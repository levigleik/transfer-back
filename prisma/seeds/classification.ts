import type { CreateClassificationDTO } from "@/modules/classification/classification.schemas";

export const classification = [
  {
    id: 1,
    description: 'Premium'
  },
  {
    id: 2,
    description: 'Master'
  },
  {
    id: 3,
    description: 'Standard'
  }
] as (CreateClassificationDTO & { id: number })[];
