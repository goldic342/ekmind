import { create } from "zustand"
import { Emotion } from "./types"
import { UUIDTypes } from "uuid"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { EmotionSchema } from "@/types"

interface EmotionsState {
  emotions: Emotion[]

  addEmotion: (newEmotion: Omit<Emotion, "id">) => void
  deleteEmotion: (id: UUIDTypes) => void
  updateEmotion: (id: UUIDTypes, update: Omit<Emotion, "id">) => void
}

export const useEmotions = create<EmotionsState>()(
  persist(
    (set, get) => ({
      emotions: [],

      addEmotion: payload => {
        const newEmotion = {
          id: crypto.randomUUID(),
          ...payload
        }

        EmotionSchema.parse(newEmotion)
        set(state => ({ emotions: [...state.emotions, newEmotion] }))
      },

      deleteEmotion: id => {
        set(state => ({ emotions: state.emotions.filter(e => e.id !== id) }))
      },
      updateEmotion: (id, payload) => {
        set(state => {
          let updated: Emotion | undefined

          const emotions = state.emotions.map(e => {
            if (e.id !== id) return e

            updated = { ...e, ...payload }
            EmotionSchema.parse(updated)
            return updated
          })

          if (!updated) return state

          return { emotions }
        })
      }
    }),
    {
      name: "emotions-storage",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
