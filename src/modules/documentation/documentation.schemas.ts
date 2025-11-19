import { DocumentationSchema } from "@/types/prisma/schemas";
import { z } from "zod";

export const PublicDocumentationSchema = DocumentationSchema;

export { DocumentationSchema };

const documentationSchema = DocumentationSchema.pick({
	type: true,
	expiryAt: true,
	days: true,
	anticipateRenewal: true,
	document: true,
	vehicleId: true,
});
export const createDocumentationSchema = documentationSchema.extend({
	expiryAt: z.coerce.date(),
});

export const updateDocumentationSchema = documentationSchema.partial();

export type CreateDocumentationDTO = z.infer<typeof createDocumentationSchema>;
export type UpdateDocumentationDTO = z.infer<typeof updateDocumentationSchema>;
export type PublicDocumentation = z.infer<typeof PublicDocumentationSchema>;
