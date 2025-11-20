import fs from "node:fs";
import path from "node:path";
import mime from "mime-types";
import multer from "multer";
import { uuidv7 } from "zod";

const UPLOAD_ROOT = path.join(process.cwd(), "uploads", "files");

// garante a pasta
if (!fs.existsSync(UPLOAD_ROOT)) {
	fs.mkdirSync(UPLOAD_ROOT, { recursive: true });
}

// validação de mimetypes/extensões permitidas
export const ALLOWED_MIMETYPES = new Set([
	"image/png",
	"image/jpeg",
	"image/webp",
	"image/gif",
	"application/pdf",
	"text/plain",
	"application/msword", // .doc
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
	"application/vnd.ms-excel",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
]);

function fileFilter(
	_req: Express.Request,
	file: Express.Multer.File,
	cb: multer.FileFilterCallback,
) {
	if (ALLOWED_MIMETYPES.has(file.mimetype)) {
		cb(null, true);
	} else {
		cb(new Error("Tipo de arquivo não permitido"));
	}
}

const storage = multer.diskStorage({
	destination: (_req, _file, cb) => {
		cb(null, UPLOAD_ROOT);
	},
	filename: (_req, file, cb) => {
		const ext =
			mime.extension(file.mimetype) || path.extname(file.originalname) || "";
		const filename = `${uuidv7()}${ext ? `.${ext}` : ""}`;
		cb(null, filename);
	},
});

export const uploadFiles = multer({
	storage,
	fileFilter,
	limits: {
		fileSize: 25 * 1024 * 1024,
		files: 1,
	},
});
