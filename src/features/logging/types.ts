import { z } from "zod"
import { TagSchema } from "../tags/types"

export const LogSchema = z.object({
  id: z.uuidv4(),
  timestamp: z.iso.datetime(),
  mood: z.number().gte(1).lte(100),
  note: z.string().optional(),

  tags: z.array(z.uuidv4()),
  emotions: z.array(z.uuidv4())
})

export type Log = z.infer<typeof LogSchema>
