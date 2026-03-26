import z from "zod"

export const EmotionSchema = z.object({
  id: z.uuidv4(),
  name: z.string(),

  // Defined in app config
  category_id: z.number().gte(0)
})

export type Emotion = z.infer<typeof EmotionSchema>
