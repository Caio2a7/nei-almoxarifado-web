import { defineStore } from "pinia";

export const useSearch = defineStore('search', {
    state: () => ({
        itemSearch: {
            searching: false,
            itemId: 0 
        } 
    }),
    persist: {
        storage: persistedState.cookiesWithOptions({
          sameSite: 'strict',
          Secure: true
        }),
    },
})