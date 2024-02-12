const Footer = () => {
  return (
    <footer className="border-t text-zinc-500">
      <div className="container flex justify-between md:flex-row flex-col gap-4 items-center py-8">
        <p className="text-center">
          Built with{" "}
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-orange-strong transition duration-300"
          >
            Vite.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-orange-strong transition duration-300"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-orange-strong transition duration-300"
          >
            Vercel
          </a>
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
