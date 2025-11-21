// lib/make-uploader.ts
import fs from "node:fs";
import path from "node:path";
import mime from "mime-types";
import multer from "multer";
import { uuidv7 } from "uuidv7";
import { Request } from "express";

export const ALLOWED_MIMETYPES = new Set([
	"image/png",
	"image/jpeg",
	"image/webp",
	"image/gif",
	"application/pdf",
	"text/plain",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
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

/**
 * Cria um uploader configurado para salvar arquivos
 * em um subdiretório dentro de /uploads.
 *
 * @param pathResolver - string ou função que recebe req e retorna o path relativo
 */
export function uploadFiles(pathResolver: string | ((req: Request) => string)) {
	const storage = multer.diskStorage({
		destination: (req, _file, cb) => {
			const relativePath =
				typeof pathResolver === "function" ? pathResolver(req) : pathResolver;

			const fullPath = path.join(process.cwd(), "uploads", relativePath);

			fs.mkdirSync(fullPath, { recursive: true });

			cb(null, fullPath);
		},
		filename: (_req, file, cb) => {
			const ext =
				mime.extension(file.mimetype) || path.extname(file.originalname) || "";
			const filename = `${uuidv7()}${ext ? `.${ext}` : ""}`;
			cb(null, filename);
		},
	});

	return multer({
		storage,
		fileFilter,
		limits: {
			fileSize: 25 * 1024 * 1024,
			files: 1,
		},
	});
}
