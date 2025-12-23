"use client";

import { useEffect } from "react";

const SCROLL_KEY = "menu-list-scroll";

export function saveScrollPosition() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(SCROLL_KEY, window.scrollY.toString());
  }
}

export default function ScrollRestoration() {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem(SCROLL_KEY);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      sessionStorage.removeItem(SCROLL_KEY);
    }
  }, []);

  return null;
}
