import { create } from 'zustand';

export const useMemberStore = create((set) => ({
  members: null,
  exMembers: null,
  loaderMembers: true,
  errorMembers: false,
}));
