import fs from "node:fs";
import path from "node:path";
import multer from "multer";

const uploadDir = path.join(process.cwd(), "uploads", "vehicles");

if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
	destination: (_req, _file, cb) => {
		cb(null, uploadDir);
	},
	filename: (_req, file, cb) => {
		const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
		const ext = path.extname(file.originalname) || ".png";
		cb(null, `vehicle-${uniqueSuffix}${ext}`);
	},
});

export const uploadVehiclePhotos = multer({
	storage,
	limits: {
		fileSize: 12 * 1024 * 1024, // 12MB por arquivo (ajuste se quiser)
		files: 10,
	},
});
