import { create } from "zustand"
import { Tag, TagSchema } from "../types"
import { UUIDTypes } from "uuid"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface TagsState {
  tags: Tag[]
  createTag: (tag: Omit<Tag, "id">) => void
  deleteTag: (id: UUIDTypes) => void
  updateTag: (id: UUIDTypes, update: Omit<Tag, "id">) => void
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
      updateTag: (id, update) => {
        const found = get().tags.find(t => t.id === id)

        if (!found) return

        const updated = {
          ...found,
          ...update
        }
        TagSchema.parse(updated)

        set(state => ({ tags: state.tags.map(t => (t.id === id ? updated : t)) }))
      }
    }),
    {
      name: "tags-storage",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
