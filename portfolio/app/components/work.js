"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    title: "Webli Studio",
    description: "Creative Digital Agency",
    type: "Agency / Development",
    year: "2026",
    link: "https://webli.vercel.app/",
  },
  {
    title: "Lion's Den Cafe",
    description: "Cafe Experience, Jaunpur",
    type: "Design / Development",
    year: "2026",
    link: "https://lionsdencafe.vercel.app/",
  },
  {
    title: "Aathavan Films",
    description: "Photography & Film Portfolio",
    type: "Portfolio / Development",
    year: "2026",
    link: "https://aathavanfilms.vercel.app/",
  },
  {
    title: "Serene Stays Goa",
    description: "Holiday Home Rental",
    type: "Hospitality / Development",
    year: "2026",
    link: "https://serene-stays.vercel.app/",
  },
  {
    title: "Jerdon Villa",
    description: "Luxury Pool Villa",
    type: "Hospitality / Development",
    year: "2026",
    link: "https://www.jerdon.in/",
  },
  {
    title: "Timeless Vogue",
    description: "Men's Fashion E-Commerce",
    type: "Commerce / Development",
    year: "2025",
    link: "https://timelessvogue.vercel.app/",
  },
];

export default function Work() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const rowsRef = useRef([]);
  const cursorRef = useRef(null);

  useGSAP(
    () => {
      /* --------------------------------
         SECTION HEADING
      -------------------------------- */

      gsap.from(headingRef.current, {
        yPercent: 110,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      /* --------------------------------
         PROJECT ROWS
      -------------------------------- */

      rowsRef.current.forEach((row) => {
        if (!row) return;

        const title = row.querySelector(".project-title");
        const meta = row.querySelector(".project-meta");
        const number = row.querySelector(".project-number");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
          },
        });

        tl.from(title, {
          yPercent: 110,
          duration: 1,
          ease: "power4.out",
        })
          .from(
            [meta, number],
            {
              opacity: 0,
              y: 15,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.55"
          );
      });

      /* --------------------------------
         CURSOR
      -------------------------------- */

      const moveCursor = (event) => {
        if (!cursorRef.current) return;

        gsap.to(cursorRef.current, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.25,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", moveCursor);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    },
    {
      scope: sectionRef,
    }
  );

  const handleEnter = (event) => {
    const row = event.currentTarget;

    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.25,
      ease: "power3.out",
    });

    gsap.to(row.querySelector(".project-title"), {
      x: 22,
      color: "#C7F36B",
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(row.querySelector(".project-number"), {
      x: 6,
      color: "#C7F36B",
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(row.querySelector(".project-arrow"), {
      rotate: 45,
      x: 5,
      y: -5,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(row.querySelector(".project-line"), {
      scaleX: 1,
      duration: 0.6,
      ease: "power4.out",
    });
  };

  const handleLeave = (event) => {
    const row = event.currentTarget;

    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.2,
    });

    gsap.to(row.querySelector(".project-title"), {
      x: 0,
      color: "#ffffff",
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(row.querySelector(".project-number"), {
      x: 0,
      color: "rgba(255,255,255,0.25)",
      duration: 0.4,
    });

    gsap.to(row.querySelector(".project-arrow"), {
      rotate: 0,
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(row.querySelector(".project-line"), {
      scaleX: 0,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  return (
    <section
  ref={sectionRef}
  id="projects"
  aria-labelledby="work-heading"
  className="
    work
    relative
    w-full
    overflow-hidden
    bg-black
    px-5
    pt-16
    pb-28
    text-white
    md:px-10
    md:pt-20
    md:pb-40
    lg:px-[5vw]
  "
>
      {/* CUSTOM CURSOR */}

      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          h-20
          w-20
          -translate-x-1/2
          -translate-y-1/2
          scale-0
          items-center
          justify-center
          rounded-full
          bg-[#C7F36B]
          text-[8px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-black
          opacity-0
          lg:flex
        "
      >
        View ↗
      </div>

      {/* SECTION LABEL */}

      <div className="mb-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-[5px] w-[5px] rounded-full bg-[#C7F36B]" />

          <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
            03 / Selected Work
          </p>
        </div>

        <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
          ({String(works.length).padStart(2, "0")})
        </p>
      </div>

      {/* LARGE HEADING */}

      <div className="mb-20 overflow-hidden md:mb-28">
        <h2
          ref={headingRef}
          id="work-heading"
          className="
            heading
            text-[18vw]
            font-medium
            uppercase
            leading-[0.78]
            tracking-[-0.075em]
            md:text-[10vw]
          "
        >
          Selected
          <br />

          <span className="ml-[14vw] text-white/20">
            Works
          </span>
          <span className="text-[#C7F36B]">.</span>
        </h2>
      </div>

      {/* DESKTOP COLUMN LABELS */}

      <div
        className="
          hidden
          grid-cols-[55px_1fr_0.5fr_70px_35px]
          border-b
          border-white/15
          pb-3
          text-[8px]
          uppercase
          tracking-[0.2em]
          text-white/25
          md:grid
        "
      >
        <span>No.</span>
        <span>Project</span>
        <span>Discipline</span>
        <span>Year</span>
        <span />
      </div>

      {/* PROJECT LIST */}

      <div>
        {works.map((work, index) => (
          <a
            key={work.title}
            ref={(element) => {
              rowsRef.current[index] = element;
            }}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${work.title} project`}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="
              group
              relative
              grid
              cursor-none
              gap-4
              border-b
              border-white/15
              py-7
              md:grid-cols-[55px_1fr_0.5fr_70px_35px]
              md:items-center
              md:gap-0
              md:py-9
            "
          >
            {/* PINK HOVER LINE */}

            <span
              aria-hidden="true"
              className="
                project-line
                absolute
                bottom-[-1px]
                left-0
                h-px
                w-full
                origin-left
                scale-x-0
                bg-[#C7F36B]
              "
            />

            {/* NUMBER */}

            <span
              className="
                project-number
                text-[9px]
                tracking-[0.2em]
                text-white/25
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* PROJECT */}

            <div>
              <div className="overflow-hidden pb-1">
                <h3
                  className="
                    project-title
                    heading
                    text-[11vw]
                    font-medium
                    uppercase
                    leading-[0.85]
                    tracking-[-0.06em]
                    md:text-[4.6vw]
                  "
                >
                  {work.title}
                </h3>
              </div>

              {/* MOBILE DESCRIPTION */}

              <p className="mt-2 text-xs text-white/35 md:hidden">
                {work.description}
              </p>
            </div>

            {/* TYPE */}

            <div className="project-meta hidden md:block">
              <p className="text-[10px] uppercase leading-[1.5] tracking-[0.13em] text-white/35">
                {work.type}
              </p>

              <p className="mt-1 text-[9px] text-white/20">
                {work.description}
              </p>
            </div>

            {/* YEAR */}

            <span className="project-meta hidden text-[9px] tracking-[0.15em] text-white/30 md:block">
              {work.year}
            </span>

            {/* ARROW */}

            <span
              aria-hidden="true"
              className="
                project-arrow
                absolute
                bottom-7
                right-0
                text-xl
                text-white/40
                md:static
                md:text-lg
              "
            >
              ↗
            </span>
          </a>
        ))}
      </div>

      {/* FOOTER */}

      <div className="mt-8 flex items-start justify-between gap-10">
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
          Selected projects / 2025—2026
        </p>

        <p className="max-w-[270px] text-right text-[9px] leading-[1.6] text-white/30">
          A selection of digital experiences built for brands, businesses and
          independent ideas.
        </p>
      </div>
    </section>
  );
}