"use client";
import { useEffect } from "react";

export default function PreloadRemover() {
  useEffect(() => {
    const el = document.getElementById("preload-spinner");
    if (el) el.remove();
  }, []);

  return null;
}
