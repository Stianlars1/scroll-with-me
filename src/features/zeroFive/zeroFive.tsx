"use client";
import styles from "./zeroFive.module.css";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ZeroFiveBackground } from "@/features/zeroFive/background/background";
import SplitType from "split-type";

export const ZeroFive = () => {
  const mainRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const section2 = useRef<HTMLElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const headerTitle = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(useGSAP, ScrollTrigger);

      if (typeof window !== "undefined") {
        gsap.to(splineRef.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "center top",
            end: "bottom top",
            scrub: true,
          },
          filter: "blur(5px)",
          transform: "scale(1.1)",
        });

        gsap.to(splineRef.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },

          y: 300,
        });

        gsap.to(headerTitle.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          ease: "power1.inOut",
          y: 200,
        });

        gsap.from(section2.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          ease: "power1.out",
          y: 75,
        });
      }

      const paragraphsToGlitch = document.querySelectorAll(".glitchHeader");
      const paragraphsToFade = document.querySelectorAll(".opacityText");

      paragraphsToGlitch.forEach((chars) => {
        if (!chars) return;

        const text = new SplitType(chars as HTMLElement, { types: "chars" });

        gsap.from(text.chars, {
          stagger: {
            each: 0.05,
            from: "random",
            repeat: 0,
            ease: "power1.inOut",
          },
          scale: gsap.utils.random(0.5, 2),
          filter: "blur(5px)",
          opacity: gsap.utils.interpolate(0, 1, 1),
          // odd === y - 50 : even === y + 50
          y: (index) => (index % 2 === 0 ? -20 : 30),
          scrollTrigger: {
            trigger: section2.current,
            start: "top 75%",
            end: "top 20%",
            scrub: true,
          },
        });
      });

      paragraphsToFade.forEach((chars) => {
        if (!chars) return;

        const text = new SplitType(chars as HTMLElement, { types: "words" });
        console.log(text);
        gsap.from(text.words, {
          stagger: {
            each: 0.05,
            from: "random",
          },
          opacity: 0.5,
          filter: "blur(5px)",
          duration: 2,
          scale: 1.05,
          scrollTrigger: {
            trigger: section2.current,
            start: "top center",
            end: "top 25%",
            scrub: true,
          },
        });
      });
    },

    { scope: mainRef, dependencies: [] },
  );

  return (
    <main ref={mainRef} className={`${styles.main} main`}>
      <section ref={headerRef} className={styles.headerSection}>
        <Spline
          ref={splineRef}
          className={styles.spline}
          scene="/05/spline/scene.splinecode"
        />
        <h1 ref={headerTitle} className={styles.headerTitle}>
          <span>Empower</span>
          <span>your mental</span>
          <span>health journey</span>
        </h1>
      </section>
      <section
        ref={section2}
        className={`${styles.section} ${styles.section2}`}
      >
        <p className={`glitchHeader ${styles.glitchHeader} `}>Our Vision</p>
        <p className={`opacityText ${styles.glitchText} `}>
          We empower humanity with the tools, knowledge, amd wisdom to face
          mental health challenges with confidence and unprecedented resilience.
        </p>
        <ZeroFiveBackground />
      </section>
    </main>
  );
};
