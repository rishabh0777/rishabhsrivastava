"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const detailsRef = useRef(null);
  const lineRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      tl.from(headingRef.current, {
        yPercent: 110,
        duration: 1.3,
        ease: "power4.out",
      })
        .from(
          detailsRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          lineRef.current,
          {
            scaleX: 0,
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.7"
        );

      /* MARQUEE */

      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="
        contact
        relative
        flex
        min-h-screen
        w-full
        flex-col
        overflow-hidden
        bg-black
        px-5
        pt-28
        text-white
        md:px-10
        md:pt-40
        lg:px-[5vw]
      "
    >
      {/* TOP META */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-[5px] w-[5px] rounded-full bg-[#C7F36B]" />

          <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
            05 / Contact
          </p>
        </div>

        <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
          Have something in mind?
        </p>
      </div>

      {/* MAIN CTA */}

      <div className="flex flex-1 items-center py-20 md:py-28">
        <div className="w-full">
          <div className="overflow-hidden pb-3">
            <h2
              ref={headingRef}
              id="contact-heading"
              className="
                heading
                max-w-[1500px]
                text-[14vw]
                font-medium
                uppercase
                leading-[0.78]
                tracking-[-0.075em]
                md:text-[8.5vw]
              "
            >
              Have an idea?
              <br />

              <span className="ml-[9vw] text-white/20">
                Let&apos;s make it
              </span>

              <br />

              <span className="text-[#C7F36B]">
                exist.
              </span>
            </h2>
          </div>

          {/* CONTACT INFORMATION */}

          <div
            ref={detailsRef}
            className="
              mt-16
              grid
              gap-12
              md:mt-24
              md:grid-cols-[1fr_0.8fr]
              md:items-end
            "
          >
            {/* EMAIL */}

            <div>
              <p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-white/30">
                Start a conversation
              </p>

              <a
                href="mailto:rishabhsrivastava7777@gmail.com"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-white/30
                  pb-2
                  text-[5vw]
                  leading-none
                  tracking-[-0.04em]
                  transition-colors
                  duration-300
                  hover:text-[#C7F36B]
                  sm:text-[4vw]
                  md:text-[2.2vw]
                "
                aria-label="Send an email to Rishabh Srivastava"
              >
                RISHABHSRIVASTAVA7777@GMAIL.COM

                <span
                  aria-hidden="true"
                  className="
                    text-white/30
                    transition-all
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

            {/* RIGHT TEXT */}

            <div className="md:justify-self-end">
              <p
                className="
                  max-w-[420px]
                  text-sm
                  leading-[1.7]
                  text-white/45
                  md:text-base
                "
              >
                Whether it&apos;s a website, digital product, collaboration or
                simply an idea worth exploring — tell me what you&apos;re
                thinking.
              </p>

              <a
                href="https://webli.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                  transition-colors
                  hover:text-[#C7F36B]
                "
              >
                Or visit Webli Studio

                <span
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}

      <div
        ref={lineRef}
        className="h-px w-full origin-left bg-white/15"
      />

      {/* FOOTER */}

      <footer className="grid gap-8 py-6 md:grid-cols-3 md:items-end">
        <div>
          <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
            Rishabh Srivastava
          </p>

          <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/25">
            Full-Stack Developer
          </p>
        </div>

        {/* SOCIALS */}

<div className="flex gap-5 md:justify-center">
  <a
    href="https://www.linkedin.com/in/rishabh-srivastava-1b17461b0"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Rishabh Srivastava on LinkedIn"
    className="text-[9px] uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-[#C7F36B]"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://github.com/rishabh0777"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Rishabh Srivastava on GitHub"
    className="text-[9px] uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-[#C7F36B]"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.instagram.com/_codexdev.rishabh/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Rishabh Srivastava on Instagram"
    className="text-[9px] uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-[#C7F36B]"
  >
    Instagram ↗
  </a>
</div>

        <p className="text-[8px] uppercase tracking-[0.18em] text-white/25 md:text-right">
          © {new Date().getFullYear()} / India
        </p>
      </footer>

      {/* BOTTOM MARQUEE */}

      <div
        aria-hidden="true"
        className="
          relative
          -mx-5
          overflow-hidden
          border-t
          border-white/10
          py-3
          md:-mx-10
          lg:-mx-[5vw]
        "
      >
        <div
          ref={marqueeRef}
          className="
            flex
            w-max
            whitespace-nowrap
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-white/15
          "
        >
          <span className="pr-16">
            DESIGN × DEVELOPMENT × MOTION × DIGITAL EXPERIENCES ×
          </span>

          <span className="pr-16">
            DESIGN × DEVELOPMENT × MOTION × DIGITAL EXPERIENCES ×
          </span>

          <span className="pr-16">
            DESIGN × DEVELOPMENT × MOTION × DIGITAL EXPERIENCES ×
          </span>

          <span className="pr-16">
            DESIGN × DEVELOPMENT × MOTION × DIGITAL EXPERIENCES ×
          </span>
        </div>
      </div>
    </section>
  );
}