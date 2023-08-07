import { create } from 'zustand';

export const useMemberStore = create((set) => ({
  members: null,
  loaderMembers: true,
  errorMembers: false,
}));
