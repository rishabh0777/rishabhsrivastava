"use client";

import { useRef } from "react";
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
  const scrollIndicatorRef = useRef(null);
  const roleRef = useRef(null);
  const founderRef = useRef(null);

  useGSAP(
    () => {
      /* ==========================================
         INITIAL LOAD
      ========================================== */

      const heroLines = [
        line1Ref.current,
        line2Ref.current,
        line3Ref.current,
      ];

      const initialMeta = [
        indexRef.current,
        scrollIndicatorRef.current,
        roleRef.current,
      ];

      /*
       * Explicit initial state.
       * Prevents flash before GSAP starts.
       */

      gsap.set(heroLines, {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(".hero-top-meta", {
        opacity: 0,
        y: 15,
      });

      gsap.set(initialMeta, {
        opacity: 0,
      });

      gsap.set(introRef.current, {
        opacity: 0,
        y: 100,
      });

      gsap.set(founderRef.current, {
        opacity: 0,
        x: 60,
      });

      /*
       * Initial entrance
       */

      const introTl = gsap.timeline({
        delay: 0.5,
        defaults: {
          ease: "power4.out",
        },
      });

      introTl
        .to(heroLines, {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.12,
        })

        .to(
          ".hero-top-meta",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.6"
        )

        .to(
          initialMeta,
          {
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
          },
          "<"
        )

        /*
         * Entrance finished.
         * Now create scroll animation from known visible states.
         */

        .call(() => {
          createScrollAnimation();
          ScrollTrigger.refresh();
        });

      /* ==========================================
         SCROLL ANIMATION
      ========================================== */

      function createScrollAnimation() {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2200",
            scrub: 1.2,
            pin: stageRef.current,
            anticipatePin: 1,
            invalidateOnRefresh: false,
          },
        });

        /*
         * Explicit starting states.
         *
         * These make reverse scrolling reliable.
         */

        scrollTl

          /* ======================================
             PHASE 01
             TYPOGRAPHY MOVEMENT
          ====================================== */

          .fromTo(
            line1Ref.current,
            {
              xPercent: 0,
              opacity: 1,
            },
            {
              xPercent: -35,
              opacity: 0.16,
              ease: "none",
              immediateRender: false,
            },
            0
          )

          .fromTo(
            line2Ref.current,
            {
              xPercent: 0,
            },
            {
              xPercent: 28,
              ease: "none",
              immediateRender: false,
            },
            0
          )

          .fromTo(
            line3Ref.current,
            {
              xPercent: 0,
              opacity: 1,
            },
            {
              xPercent: -18,
              opacity: 0.25,
              ease: "none",
              immediateRender: false,
            },
            0
          )

          /* ======================================
             DIGITAL BECOMES DOMINANT
          ====================================== */

          .fromTo(
            line2Ref.current,
            {
              scale: 1,
              letterSpacing: "-0.075em",
            },
            {
              scale: 1.45,
              letterSpacing: "-0.075em",
              ease: "power2.inOut",
              immediateRender: false,
            },
            0.25
          )

          /* ======================================
             INDEX ROTATION
          ====================================== */

          .fromTo(
            indexRef.current,
            {
              rotation: 0,
            },
            {
              rotation: 90,
              ease: "none",
              immediateRender: false,
            },
            0
          )

          /* ======================================
             PHASE 02
             EXCEPTIONAL + EXPERIENCES DISAPPEAR
          ====================================== */

          .to(
            [line1Ref.current, line3Ref.current],
            {
              opacity: 0,
              filter: "blur(10px)",
              duration: 0.3,
              ease: "none",
            },
            0.55
          )

          /* ======================================
             DIGITAL DISAPPEARS
          ====================================== */

          .to(
            line2Ref.current,
            {
              scale: 4,
              opacity: 0,
              filter: "blur(8px)",
              duration: 0.4,
              ease: "none",
            },
            0.58
          )

          /* ======================================
             HIDE SCROLL INDICATOR
          ====================================== */

          .fromTo(
            scrollIndicatorRef.current,
            {
              opacity: 1,
              y: 0,
            },
            {
              opacity: 0,
              y: 15,
              duration: 0.18,
              ease: "power2.out",
              immediateRender: false,
            },
            0.58
          )

          /* ======================================
             HIDE ROLE
          ====================================== */

          .fromTo(
            roleRef.current,
            {
              opacity: 1,
              y: 0,
            },
            {
              opacity: 0,
              y: 15,
              duration: 0.18,
              ease: "power2.out",
              immediateRender: false,
            },
            0.58
          )

          /* ======================================
             SECOND STATE APPEARS
          ====================================== */

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
              immediateRender: false,
            },
            0.7
          )

          /* ======================================
             WEBLI STUDIO APPEARS
          ====================================== */

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
              ease: "power3.out",
              immediateRender: false,
            },
            0.78
          );
      }
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-labelledby="hero-title"
      className="relative bg-black text-white"
    >
      {/* ==========================================
          PINNED VIEWPORT
      ========================================== */}

      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* ==========================================
            TOP BAR
        ========================================== */}

        <div className="hero-top-meta absolute left-0 top-0 z-20 flex w-full items-start justify-between px-5 pt-5 opacity-0 md:px-10 md:pt-8">
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

        {/* ==========================================
            INDEX
        ========================================== */}

        <div
          ref={indexRef}
          className="absolute left-5 top-1/2 z-20 hidden origin-left -translate-y-1/2 opacity-0 md:block md:left-10"
        >
          <span className="text-[9px] tracking-[0.3em] text-white/30">
            01 — 04
          </span>
        </div>

        {/* ==========================================
            MAIN TYPOGRAPHY
        ========================================== */}

        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            id="hero-title"
            className="heading flex w-full flex-col overflow-visible font-medium uppercase"
          >
            {/* EXCEPTIONAL */}

            <div className="overflow-hidden">
              <div
                ref={line1Ref}
                className="
                  whitespace-nowrap
                  pl-[4vw]
                  text-[14vw]
                  leading-[0.73]
                  tracking-[-0.075em]
                  opacity-0
                  md:text-[10vw]
                "
              >
                Exceptional
              </div>
            </div>

            {/* DIGITAL */}

            <div className="overflow-hidden">
              <div
                ref={line2Ref}
                className="
                  whitespace-nowrap
                  text-right
                  text-[18vw]
                  leading-[0.73]
                  tracking-[-0.075em]
                  text-[#C7F36B]
                  opacity-0
                  md:pr-[5vw]
                  md:text-[12vw]
                "
              >
                Digital
              </div>
            </div>

            {/* EXPERIENCES */}

            <div className="overflow-hidden">
              <div
                ref={line3Ref}
                className="
                  whitespace-nowrap
                  pl-[13vw]
                  text-[13vw]
                  leading-[0.76]
                  tracking-[-0.075em]
                  opacity-0
                  md:text-[9vw]
                "
              >
                Experiences
              </div>
            </div>
          </h1>
        </div>

        {/* ==========================================
            SCROLL INDICATOR
        ========================================== */}

        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-6 left-5 opacity-0 md:bottom-8 md:left-10"
        >
          <div className="flex items-center gap-3">
            <span className="block h-px w-10 bg-white/30" />

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* ==========================================
            ROLE
        ========================================== */}

        <div
          ref={roleRef}
          className="absolute bottom-6 right-5 text-right opacity-0 md:bottom-8 md:right-10"
        >
          <p className="text-[9px] uppercase leading-[1.7] tracking-[0.18em] text-white/35">
            Development
            <br />
            Creative Direction
            <br />
            Motion
          </p>
        </div>

        {/* ==========================================
            SECOND STATE
        ========================================== */}

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

        {/* ==========================================
            WEBLI STUDIO REVEAL
        ========================================== */}

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
              className="
                text-white/40
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-[#C7F36B]
              "
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}