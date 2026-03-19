import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { Log } from "../types"
import { LogItemSchema } from "@/types"
import { UUIDTypes } from "uuid"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface LogsState {
  logs: Log[]
  addLog: (log: Omit<Log, "id" | 'timestamp'>) => void
  updateLogs: (newlogs: Log[]) => void
  deleteLog: (id: UUIDTypes) => void
}

export const useLogs = create<LogsState>()(persist(
  (set, get) => ({
    logs: [],

    addLog: (log) => {
      const newLog: Log = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        ...log
      }
      LogItemSchema.parse(newLog)
      set((state) => ({ logs: [...state.logs, newLog] }))
    },

    updateLogs: (newLogs) => {
      for (const log of newLogs)
        LogItemSchema.parse(log)
      set(state => ({ logs: [...newLogs] }))
    },

    deleteLog: (id) => {
      set(state => ({ logs: state.logs.filter(l => l.id !== id) }))
    },
  }),
  {
    name: 'logs-storage',
    storage: createJSONStorage(() => AsyncStorage)
  }
))
