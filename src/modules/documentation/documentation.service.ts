import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Documentation, File } from "@prisma/client";

const documentationCrudService = createCachedService<
	Documentation,
	typeof prisma.documentation
>("documentation", prisma.documentation);

async function createFileRecordFromMulter(file?: Express.Multer.File) {
	if (!file) {
		throw Error("File not found");
	}
	const created = await prisma.file.create({
		data: {
			fileName: file.originalname,
			path: `/uploads/files/${file.filename}`,
			mimeType: file.mimetype,
			size: file.size,
		},
	});

	return created;
}

export const documentationService = {
	...documentationCrudService,
	createFileRecordFromMulter,
};
