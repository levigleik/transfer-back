import * as fs from "node:fs";
import path from "node:path";
import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { File } from "@prisma/client";

const fileCrudService = createCachedService<File, typeof prisma.file>(
	"file",
	prisma.file,
);

function deleteFile(file: File) {
	try {
		const fsPath = path.join(process.cwd(), file.path);
		fs.unlink(fsPath, () => {});
	} catch (err) {
		console.error("Erro ao remover arquivo antigo:", err);
	}
}

export const fileService = {
	...fileCrudService,
	deleteFile,
};
