"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const introRef = useRef(null);
  const indexRef = useRef(null);
  const founderRef = useRef(null);

  useGSAP(
    () => {
      /* -------------------------
         INITIAL LOAD
      -------------------------- */

      const introTl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      introTl
        .from(".hero-line-inner", {
          yPercent: 110,
          duration: 1.2,
          stagger: 0.12,
        })
        .from(
          ".hero-meta",
          {
            opacity: 0,
            y: 15,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.6"
        );

      /* -------------------------
         SCROLL TRANSFORMATION
      -------------------------- */

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 1.2,
          pin: stageRef.current,
          anticipatePin: 1,
        },
      });

      scrollTl

        /* Phase 01 */

        .to(
          line1Ref.current,
          {
            xPercent: -35,
            opacity: 0.16,
            ease: "none",
          },
          0
        )

        .to(
          line2Ref.current,
          {
            xPercent: 28,
            ease: "none",
          },
          0
        )

        .to(
          line3Ref.current,
          {
            xPercent: -18,
            opacity: 0.25,
            ease: "none",
          },
          0
        )

        /* DIGITAL becomes dominant */

        .to(
          line2Ref.current,
          {
            scale: 1.45,
            letterSpacing: "-0.075em",
            ease: "power2.inOut",
          },
          0.25
        )

        /* small index rotates */

        .to(
          indexRef.current,
          {
            rotate: 90,
            ease: "none",
          },
          0
        )

        /* Phase 02 - typography disappears */

        .to(
          [line1Ref.current, line3Ref.current],
          {
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.3,
          },
          0.55
        )

        .to(
          line2Ref.current,
          {
            scale: 4,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.4,
          },
          0.58
        )

        /* Identity appears */

        .fromTo(
          introRef.current,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          },
          0.7
        )

        .fromTo(
          founderRef.current,
          {
            opacity: 0,
            x: 60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
          },
          0.78
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-labelledby="hero-title"
      className="relative bg-black text-white"
    >
      {/* PINNED VIEWPORT */}

      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* TOP BAR */}

        <div className="hero-meta absolute left-0 top-0 z-20 flex w-full items-start justify-between px-5 pt-5 md:px-10 md:pt-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/45 md:text-xs">
              Portfolio / 2026
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] md:text-xs">
              Rishabh Srivastava
            </p>
          </div>

          <p className="max-w-[130px] text-right text-[9px] uppercase leading-[1.5] tracking-[0.18em] text-white/40 md:max-w-none md:text-[10px]">
            Full Stack Developer
            <br />
            India
          </p>
        </div>

        {/* INDEX */}

        <div
          ref={indexRef}
          className="hero-meta absolute left-5 top-1/2 z-20 hidden origin-left -translate-y-1/2 md:block md:left-10"
        >
          <span className="text-[9px] tracking-[0.3em] text-white/30">
            01 — 04
          </span>
        </div>

        {/* MAIN TYPOGRAPHY */}

        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            id="hero-title"
            className="heading flex w-full flex-col overflow-visible font-medium uppercase"
          >
            {/* LINE 01 */}

            <div className="overflow-hidden">
              <div
                ref={line1Ref}
                className="hero-line-inner whitespace-nowrap pl-[4vw] text-[14vw] leading-[0.73] tracking-[-0.075em] md:text-[10vw]"
              >
                Exceptional
              </div>
            </div>

            {/* LINE 02 */}

            <div className="overflow-visible">
              <div
                ref={line2Ref}
                className="hero-line-inner whitespace-nowrap text-right text-[18vw] leading-[0.73] tracking-[-0.075em] text-[#C7F36B] md:pr-[5vw] md:text-[12vw]"
              >
                Digital
              </div>
            </div>

            {/* LINE 03 */}

            <div className="overflow-hidden">
              <div
                ref={line3Ref}
                className="hero-line-inner whitespace-nowrap pl-[13vw] text-[13vw] leading-[0.76] tracking-[-0.075em] md:text-[9vw]"
              >
                Experiences
              </div>
            </div>
          </h1>
        </div>

        {/* SCROLL INDICATOR */}

        <div className="hero-meta absolute bottom-6 left-5 md:bottom-8 md:left-10">
          <div className="flex items-center gap-3">
            <span className="block h-px w-10 bg-white/30" />

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* ROLE */}

        <div className="hero-meta absolute bottom-6 right-5 text-right md:bottom-8 md:right-10">
          <p className="text-[9px] uppercase leading-[1.7] tracking-[0.18em] text-white/35">
            Development
            <br />
            Creative Direction
            <br />
            Motion
          </p>
        </div>

        {/* SECOND STATE */}

        <div
          ref={introRef}
          className="pointer-events-none absolute inset-0 z-10 flex items-center opacity-0"
        >
          <div className="w-full px-5 md:px-10 lg:px-[8vw]">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/35">
              Behind the work
            </p>

            <h2 className="heading max-w-[1250px] text-[10vw] font-medium leading-[0.88] tracking-[-0.065em] md:text-[6.4vw]">
              I turn ideas into
              <br />

              <span className="ml-[10vw] text-white/30">
                digital systems
              </span>

              <br />

              <span className="text-[#C7F36B]">
                people remember.
              </span>
            </h2>

            <p className="mt-8 max-w-[430px] text-sm leading-[1.7] text-white/50 md:ml-[45vw] md:text-base">
              I&apos;m Rishabh Srivastava, a full-stack developer focused on
              expressive interfaces, thoughtful motion and scalable web
              experiences.
            </p>
          </div>
        </div>

        {/* WEBLI REVEAL */}

        <div
          ref={founderRef}
          className="pointer-events-none absolute bottom-8 right-5 z-20 max-w-[240px] opacity-0 md:bottom-10 md:right-10"
        >
          <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-white/30">
            Founder / Creative Developer
          </p>

          <a
            href="https://webli.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto group inline-flex items-center gap-3"
            aria-label="Visit Webli Studio website"
          >
            <span className="heading text-xl tracking-[-0.03em] md:text-2xl">
              Webli Studio
            </span>

            <span
              aria-hidden="true"
              className="text-white/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-pink-300"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}