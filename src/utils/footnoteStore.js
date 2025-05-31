import { create } from 'zustand';

const useFootnoteStore = create((set, get) => ({
  counter: 1,
  getNextFootnoteNumber: () => {
    const nextCounter = get().counter;
    set({ counter: nextCounter + 1 });
    return nextCounter;
  },
  resetCounter: () => set({ counter: 1 })
}));

export default useFootnoteStore;