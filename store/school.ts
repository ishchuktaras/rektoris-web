// stores/schoolStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type School = {
 id: string
 name: string 
 logo: string | null
 slug: string
}

interface SchoolState {
 school: School | null
 setSchool: (school: School) => void
 clearSchool: () => void
}

export const useSchoolStore = create<SchoolState>()(
 persist(
   (set) => ({
     school: null,
     setSchool: (school) => set({ school }),
     clearSchool: () => set({ school: null }),
   }),
   {
     name: 'school-storage',
   }
 )
)