"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Discover",
    label: "Understanding the problem",
    content:
      "We begin with your goals, audience, requirements and references. This gives the project a clear direction before development starts.",
  },
  {
    number: "02",
    title: "Structure",
    label: "Defining the experience",
    content:
      "I translate the requirements into a clear page structure, interaction direction and technical approach so every section has a purpose.",
  },
  {
    number: "03",
    title: "Build",
    label: "Turning direction into code",
    content:
      "The experience is developed with modern technologies such as Next.js, React and Tailwind CSS, with motion added where it improves the interaction.",
  },
  {
    number: "04",
    title: "Refine",
    label: "Testing every detail",
    content:
      "Layouts, responsiveness, interactions and functionality are tested and refined across screen sizes before the final delivery.",
  },
  {
    number: "05",
    title: "Deliver",
    label: "Ready for the real world",
    content:
      "The completed project is prepared for handoff with clean source code and project access. Deployment can also be handled when required.",
  },
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState(0);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const statementRef = useRef(null);
  const rowsRef = useRef([]);

  useGSAP(
    () => {
      /* --------------------------------
         LARGE HEADING
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
         STATEMENT
      -------------------------------- */

      gsap.from(statementRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statementRef.current,
          start: "top 85%",
        },
      });

      /* --------------------------------
         PROCESS ROWS
      -------------------------------- */

      rowsRef.current.forEach((row) => {
        if (!row) return;

        gsap.from(row, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
          },
        });
      });
    },
    {
      scope: sectionRef,
    }
  );

  const toggleStep = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-labelledby="process-heading"
      className="
        process
        relative
        w-full
        overflow-hidden
        bg-white
        px-5
        py-28
        text-black
        md:px-10
        md:py-40
        lg:px-[5vw]
      "
    >
      {/* --------------------------------
          SECTION META
      -------------------------------- */}

      <div className="mb-14 flex items-center justify-between md:mb-20">
        <div className="flex items-center gap-3">
          <span className="h-[5px] w-[5px] rounded-full bg-black" />

          <p className="text-[9px] uppercase tracking-[0.25em] text-black/50">
            04 / Process
          </p>
        </div>

        <p className="text-[9px] uppercase tracking-[0.2em] text-black/35">
          From idea → delivery
        </p>
      </div>

      {/* --------------------------------
          HERO HEADING
      -------------------------------- */}

      <div className="overflow-hidden">
        <h2
          ref={headingRef}
          id="process-heading"
          className="
            heading
            text-[17vw]
            font-medium
            uppercase
            leading-[0.78]
            tracking-[-0.075em]
            md:text-[9.5vw]
          "
        >
          How things
          <br />

          <span className="ml-[13vw] text-black/25">
            get done.
          </span>
        </h2>
      </div>

      {/* --------------------------------
          STATEMENT
      -------------------------------- */}

      <div
        ref={statementRef}
        className="
          my-20
          flex
          justify-end
          md:my-32
        "
      >
        <p
          className="
            heading
            max-w-[850px]
            text-[7vw]
            leading-[1.05]
            tracking-[-0.045em]
            md:text-[3.2vw]
          "
        >
          No unnecessary complexity.
          <span className="text-black/35">
            {" "}
            Just a clear path from understanding the problem to shipping the
            final experience.
          </span>
        </p>
      </div>

      {/* --------------------------------
          TABLE LABEL
      -------------------------------- */}

      <div
        className="
          hidden
          grid-cols-[70px_1fr_0.6fr_40px]
          border-b
          border-black/20
          pb-3
          text-[8px]
          uppercase
          tracking-[0.2em]
          text-black/40
          md:grid
        "
      >
        <span>Step</span>
        <span>Phase</span>
        <span>Purpose</span>
        <span />
      </div>

      {/* --------------------------------
          PROCESS STEPS
      -------------------------------- */}

      <div>
        {processSteps.map((step, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={step.number}
              ref={(element) => {
                rowsRef.current[index] = element;
              }}
              className="
                group
                relative
                border-b
                border-black/20
              "
            >
              <button
                type="button"
                onClick={() => toggleStep(index)}
                aria-expanded={isOpen}
                aria-controls={`process-content-${index}`}
                className="
                  grid
                  w-full
                  cursor-pointer
                  grid-cols-[40px_1fr_30px]
                  items-center
                  gap-2
                  py-7
                  text-left
                  md:grid-cols-[70px_1fr_0.6fr_40px]
                  md:gap-0
                  md:py-9
                "
              >
                {/* NUMBER */}

                <span
                  className="
                    text-[9px]
                    tracking-[0.2em]
                    text-black/40
                  "
                >
                  {step.number}
                </span>

                {/* TITLE */}

                <span
                  className="
                    heading
                    text-[12vw]
                    font-medium
                    uppercase
                    leading-[0.85]
                    tracking-[-0.06em]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:translate-x-3
                    md:text-[5.3vw]
                  "
                >
                  {step.title}
                </span>

                {/* PURPOSE */}

                <span
                  className="
                    hidden
                    max-w-[220px]
                    text-[10px]
                    uppercase
                    leading-[1.5]
                    tracking-[0.12em]
                    text-black/45
                    md:block
                  "
                >
                  {step.label}
                </span>

                {/* PLUS */}

                <span
                  aria-hidden="true"
                  className={`
                    relative
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    transition-transform
                    duration-500
                    ${isOpen ? "rotate-45" : "rotate-0"}
                  `}
                >
                  <span className="absolute h-px w-4 bg-black" />
                  <span className="absolute h-4 w-px bg-black" />
                </span>
              </button>

              {/* --------------------------------
                  EXPANDED CONTENT
              -------------------------------- */}

              <div
                id={`process-content-${index}`}
                className={`
                  grid
                  transition-[grid-template-rows]
                  duration-500
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <div
                    className="
                      grid
                      pb-8
                      pl-[40px]
                      md:grid-cols-[70px_1fr_0.6fr_40px]
                      md:pb-10
                      md:pl-0
                    "
                  >
                    <div className="hidden md:block" />

                    <div />

                    <p
                      className="
                        max-w-[500px]
                        pr-5
                        text-sm
                        leading-[1.7]
                        text-black/60
                        md:pr-0
                        md:text-[13px]
                        lg:text-sm
                      "
                    >
                      {step.content}
                    </p>

                    <div />
                  </div>
                </div>
              </div>

              {/* HOVER LINE */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-[-1px]
                  left-0
                  h-px
                  w-full
                  origin-left
                  scale-x-0
                  bg-black
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  group-hover:scale-x-100
                "
              />
            </article>
          );
        })}
      </div>

      {/* --------------------------------
          BOTTOM
      -------------------------------- */}

      <div className="mt-10 flex items-end justify-between gap-10">
        <p className="text-[8px] uppercase leading-[1.7] tracking-[0.2em] text-black/40">
          Think
          <br />
          Build
          <br />
          Refine
        </p>

        <p className="max-w-[300px] text-right text-[10px] leading-[1.6] text-black/45">
          Every project is different. The process adapts, the attention to
          detail doesn&apos;t.
        </p>
      </div>
    </section>
  );
}