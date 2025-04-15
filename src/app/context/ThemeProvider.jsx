// src/app/context/ThemeProvider.js
"use client";

import { ThemeProvider } from "next-themes";  // Import from next-themes

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
