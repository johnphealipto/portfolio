"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t text-zinc-500">
      <div className="container flex justify-between md:flex-row flex-col gap-4 items-center py-8">
        <p className="text-center">
          Built with{" "}
          <Link
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-orange-strong transition duration-300"
          >
            Vite.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-orange-strong transition duration-300"
          >
            Tailwind CSS
          </Link>
          , deployed with{" "}
          <Link
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-orange-strong transition duration-300"
          >
            Vercel
          </Link>
          .
        </p>
        <span className="text-center">
          Copyright © John Adibe {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
