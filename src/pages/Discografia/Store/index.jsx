import { create } from 'zustand';

export const useDiscografiaStore = create((set) => ({
  albuns: null,
  loaderAlbuns: true,
  errorAlbuns: false,
}));
