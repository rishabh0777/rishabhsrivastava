"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    index: "01",
    title: "Frontend",
    description:
      "Interfaces built with precision, responsive systems and purposeful motion — using React, Next.js, Tailwind CSS and GSAP.",
    tags: ["Next.js", "React", "GSAP"],
  },
  {
    index: "02",
    title: "Backend",
    description:
      "Scalable APIs, databases and server-side architecture designed to keep products reliable as they grow.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    index: "03",
    title: "Full Stack",
    description:
      "From the first interface to the final API — complete web experiences built as one coherent digital system.",
    tags: ["MERN", "Architecture", "Deployment"],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const rowsRef = useRef([]);

  useGSAP(
    () => {
      /*
       * HEADING REVEAL
       */
      gsap.from(headingRef.current, {
        yPercent: 110,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      /*
       * SERVICE ROWS
       */
      rowsRef.current.forEach((row, index) => {
        if (!row) return;

        gsap.from(row, {
          x: index % 2 === 0 ? -80 : 80,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: row,
            start: "top 88%",
          },
        });
      });
    },
    {
      scope: sectionRef,
    }
  );

  const handleEnter = (event) => {
    const row = event.currentTarget;

    gsap.to(row.querySelector(".service-title"), {
      x: 20,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(row.querySelector(".service-number"), {
      color: "#f0b7cf",
      duration: 0.3,
    });

    gsap.to(row.querySelector(".service-line"), {
      scaleX: 1,
      duration: 0.6,
      ease: "power4.out",
    });
  };

  const handleLeave = (event) => {
    const row = event.currentTarget;

    gsap.to(row.querySelector(".service-title"), {
      x: 0,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(row.querySelector(".service-number"), {
      color: "rgba(255,255,255,0.25)",
      duration: 0.3,
    });

    gsap.to(row.querySelector(".service-line"), {
      scaleX: 0,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-heading"
      className="
  relative w-full
  overflow-hidden
  bg-black
  px-5
  pb-28
  pt-16
  text-white
  md:px-10
  md:pb-40
  md:pt-24
  lg:px-[5vw]
"
    >
      {/* SECTION INTRO */}

      <div className="mb-20 md:mb-28">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[5px] w-[5px] rounded-full bg-pink-300" />

          <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 md:text-[10px]">
            02 / What I do
          </p>
        </div>

        <div className="overflow-hidden">
          <h2
            ref={headingRef}
            id="services-heading"
            className="
              heading
              max-w-[1100px]
              text-[13vw]
              font-medium
              uppercase
              leading-[0.82]
              tracking-[-0.07em]
              md:text-[7vw]
            "
          >
            How I turn
            <br />

            <span className="ml-[12vw] text-white/25">
              ideas into
            </span>

            <br />

            <span className="text-[#C7F36B]">
              digital.
            </span>
          </h2>
        </div>
      </div>

      {/* SMALL LABELS */}

      <div
        className="
          hidden
          grid-cols-[60px_1fr_0.65fr]
          border-b border-white/15
          pb-3
          text-[8px]
          uppercase
          tracking-[0.22em]
          text-white/25
          md:grid
        "
      >
        <span>No.</span>
        <span>Capability</span>
        <span>Description / Stack</span>
      </div>

      {/* SERVICES */}

      <div>
        {services.map((service, index) => (
          <article
            key={service.index}
            ref={(element) => {
              rowsRef.current[index] = element;
            }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="
              group
              relative
              grid
              cursor-default
              gap-5
              border-b
              border-white/15
              py-8
              md:grid-cols-[60px_1fr_0.65fr]
              md:items-center
              md:gap-0
              md:py-10
              lg:py-12
            "
          >
            {/* HOVER LINE */}

            <span
              aria-hidden="true"
              className="
                service-line
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
                service-number
                text-[10px]
                tracking-[0.2em]
                text-white/25
              "
            >
              {service.index}
            </span>

            {/* TITLE */}

            <h3
              className="
                service-title
                heading
                text-[12vw]
                font-medium
                uppercase
                leading-[0.85]
                tracking-[-0.065em]
                md:text-[5.3vw]
              "
            >
              {service.title}
            </h3>

            {/* INFORMATION */}

            <div className="max-w-[430px] md:pl-6">
              <p
                className="
                  text-sm
                  leading-[1.65]
                  text-white/45
                  md:text-[13px]
                  lg:text-sm
                "
              >
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-white/30
                      transition-colors
                      duration-300
                      group-hover:text-white/55
                      md:text-[9px]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* BOTTOM NOTE */}

      <div className="mt-8 flex items-start justify-between gap-8">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
          Development / Design / Motion
        </p>

        <p className="max-w-[280px] text-right text-[10px] leading-[1.6] text-white/35">
          Built around the problem, not around a predefined template.
        </p>
      </div>
    </section>
  );
}