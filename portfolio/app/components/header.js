"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    },
    { scope: navRef }
  );

  useGSAP(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      const tl = gsap.timeline();

      tl.set(menuRef.current, {
        display: "flex",
      });

      tl.fromTo(
        menuRef.current,
        {
          clipPath: "inset(0 0 100% 0)",
        },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.7,
          ease: "power4.inOut",
        }
      );

      tl.fromTo(
        menuLinksRef.current?.children,
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 0.8,
          stagger: 0.07,
          ease: "power4.out",
        },
        "-=0.25"
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.55,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(menuRef.current, {
            display: "none",
          });
        },
      });
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* DESKTOP / MAIN NAV */}
      <header
        ref={navRef}
        className={`
          fixed left-0 top-0 z-[999] w-full
          transition-all duration-500
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      >
        <nav
          aria-label="Main navigation"
          className="
            grid grid-cols-2 items-center
            px-5 py-5
            md:grid-cols-[1fr_auto_1fr]
            md:px-10 md:py-6
          "
        >
          {/* IDENTITY */}
          <Link
            href="#home"
            className="group w-fit"
            aria-label="Rishabh Srivastava — Home"
          >
            <span
              className="
                heading block
                text-[13px]
                uppercase
                tracking-[-0.02em]
                text-white
                md:text-sm
              "
            >
              Rishabh
              <span className="text-white/35">®</span>
            </span>

            <span
              className="
                mt-0.5 hidden
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/35
                lg:block
              "
            >
              Creative Developer
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <ul
            className="
              hidden items-center gap-7
              md:flex
              lg:gap-9
            "
          >
            {links.map((link, index) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="
                    group flex items-center gap-1.5
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-white/45
                    transition-colors
                    hover:text-white
                  "
                >
                  <span className="text-[7px] text-white/20">
                    0{index + 1}
                  </span>

                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* WEBLI */}
          <div className="hidden justify-self-end md:block">
            <a
              href="https://webli.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Webli Studio"
              className="
                group flex items-center gap-2
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/50
                transition-colors
                hover:text-pink-300
              "
            >
              Webli Studio

              <span
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              >
                ↗
              </span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              relative z-[1001]
              flex items-center gap-3
              justify-self-end
              md:hidden
            "
          >
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
              {isOpen ? "Close" : "Menu"}
            </span>

            <span className="relative block h-3 w-5">
              <span
                className={`
                  absolute left-0 top-[3px]
                  h-px w-full bg-white
                  transition-all duration-300
                  ${
                    isOpen
                      ? "translate-y-[3px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  absolute bottom-[2px] left-0
                  h-px w-full bg-white
                  transition-all duration-300
                  ${
                    isOpen
                      ? "-translate-y-[3px] -rotate-45"
                      : ""
                  }
                `}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        ref={menuRef}
        className="
          fixed inset-0 z-[998]
          hidden min-h-[100svh]
          flex-col
          bg-[#f0b7cf]
          text-black
          md:hidden
        "
        style={{
          clipPath: "inset(0 0 100% 0)",
        }}
      >
        <div className="flex flex-1 items-end px-5 pb-14 pt-28">
          <ul ref={menuLinksRef} className="w-full">
            {links.map((link, index) => (
              <li
                key={link.label}
                className="overflow-hidden border-b border-black/20"
              >
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    group flex items-end
                    justify-between
                    py-3
                  "
                >
                  <span
                    className="
                      heading text-[15vw]
                      uppercase
                      leading-[0.9]
                      tracking-[-0.065em]
                    "
                  >
                    {link.label}
                  </span>

                  <span className="mb-2 text-[9px] tracking-[0.2em] text-black/45">
                    0{index + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE FOOTER */}
        <div className="flex items-end justify-between px-5 pb-6">
          <p className="text-[8px] uppercase leading-[1.6] tracking-[0.18em] text-black/50">
            Full Stack Developer
            <br />
            India
          </p>

          <a
            href="https://webli.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] uppercase tracking-[0.18em]"
          >
            Webli Studio ↗
          </a>
        </div>
      </div>
    </>
  );
}