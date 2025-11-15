import { DocumentationSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicDocumentationSchema = DocumentationSchema;

export { DocumentationSchema };

export const createDocumentationSchema = DocumentationSchema.pick({
	type: true,
	expiryAt: true,
	days: true,
	anticipateRenewal: true,
});

export const updateDocumentationSchema = DocumentationSchema.pick({
	type: true,
	expiryAt: true,
	days: true,
	anticipateRenewal: true,
}).partial();

export type CreateDocumentationDTO = z.infer<typeof createDocumentationSchema>;
export type UpdateDocumentationDTO = z.infer<typeof updateDocumentationSchema>;
export type PublicDocumentation = z.infer<typeof PublicDocumentationSchema>;
