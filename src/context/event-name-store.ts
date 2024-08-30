import { create } from 'zustand';

interface EventState {
  eventName: string;
  setEventName: (name: string) => void;
}

export const useEventStore = create<EventState>((set) => ({
  eventName: "Event Name",
  setEventName: (name: string) => set({ eventName: name }),
}));
