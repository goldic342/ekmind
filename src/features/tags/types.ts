import { z } from "zod"

export const TagSchema = z.object({
  id: z.uuidv4(),
  name: z.string()
})

export type Tag = z.infer<typeof TagSchema>
