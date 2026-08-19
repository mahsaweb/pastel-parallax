import { create } from 'zustand';

export const useStore = create((set) => ({
  // وضعیت باز یا بسته بودن منو
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  // وضعیت پروژه انتخاب‌شده برای نمایش جزئیات
  activeProject: null,
  setActiveProject: (project) => set({ activeProject: project }),
}));