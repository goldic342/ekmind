import { create } from "zustand"
import { Tag, TagSchema } from "../types"
import { UUIDTypes } from "uuid"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface TagsState {
  tags: Tag[]
  createTag: (tag: Omit<Tag, "id">) => void
  deleteTag: (id: UUIDTypes) => void
  updateTag: (id: UUIDTypes, payload: Omit<Tag, "id">) => void
}

export const useTags = create<TagsState>()(
  persist(
    (set, get) => ({
      tags: [],
      createTag: tag => {
        const newTag = {
          id: crypto.randomUUID(),
          ...tag
        }

        TagSchema.parse(newTag)

        set(state => ({ tags: [...state.tags, newTag] }))
      },
      deleteTag: id => {
        set(state => ({ tags: state.tags.filter(t => t.id !== id) }))
      },
      updateTag: (id, payload) => {
        set(state => {
          let updated: Tag | undefined

          const tags = state.tags.map(t => {
            if (t.id !== id) return t

            updated = { ...t, ...payload }
            TagSchema.parse(updated)
            return updated
          })
          if (!updated) return state
          return { tags }
        })
      }
    }),
    {
      name: "tags-storage",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
