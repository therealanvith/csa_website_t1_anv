"use client";
import React, { useEffect } from 'react';

export default function Footer(): JSX.Element {
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    footer.style = `top: ${document.body.clientHeight - footer.clientHeight}px;`;
  }, []);

  return (
    <footer className="absolute left-1/2 -translate-x-1/2 flex w-full max-w-3xl items-center justify-between p-4 text-xs md:text-sm lg:px-0 lg:text-base">
        <div className="flex items-center space-x-2">
          <span className="text-zinc-700 dark:text-zinc-300">
            Made with ❤️ by the Tech team 2k24
          </span>
        </div>
      <div className="text-zinc-700 dark:text-zinc-300">
        &copy;&nbsp;&nbsp;{new Date().getFullYear()} CSA@BPHC
      </div>
    </footer>
  );
}
