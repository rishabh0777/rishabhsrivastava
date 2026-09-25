"use client";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-black px-5 text-white md:px-10 lg:px-[5vw]">
      <div className="flex flex-col gap-6 border-t border-white/15 py-6 md:flex-row md:items-center md:justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <span className="h-[5px] w-[5px] rounded-full bg-[#C7F36B]" />

          <p className="text-[8px] uppercase tracking-[0.2em] text-white/35 md:text-[9px]">
            © {new Date().getFullYear()} Rishabh Srivastava
          </p>
        </div>

        {/* CENTER */}
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/20 md:text-[9px]">
          Designed & developed with intention
        </p>

        {/* BACK TO TOP */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group flex w-fit items-center gap-3 text-[8px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-white md:text-[9px]"
        >
          Back to top

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-1"
          >
            ↑
          </span>
        </button>

      </div>
    </footer>
  );
};

export default Footer;