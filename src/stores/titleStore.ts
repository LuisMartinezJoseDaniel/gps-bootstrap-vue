import { defineStore } from 'pinia';

export const useTitleStore = defineStore('title', {
  state: () => ({
    title: 'Default Title',
  }),
  actions: {
    setTitle(newTitle: string) {
      this.title = newTitle;
    },
  },
});
