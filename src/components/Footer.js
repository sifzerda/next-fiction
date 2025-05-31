import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full fixed bottom-0 left-0 z-20 border-t-2 border-yellow bg-bootstrapDark text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-2 py-2 flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-4">

          {/* ================================================= */}
          <a
            href="https://react-td-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white"
          >
            <Image
              src="/mammal.svg"
              alt="Mammal"
              width={18}
              height={18}
              className="transition"
            />
            <span className="transition group-hover:text-yellow">sifzerda</span>
          </a>

          {/* ================================================= */}
          <a
            href="https://github.com/sifzerda/next-fiction"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white"
          >
            <Image
              src="/github.svg"
              alt="Github"
              width={18}
              height={18}
              className="transition"
            />
            <span className="transition group-hover:text-yellow">2025</span>
          </a>
          {/* ================================================= */}
        </div>
      </div>
    </footer>

  );
}

export default Footer;
