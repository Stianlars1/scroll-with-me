"use client";
import styles from "./zeroTwo.module.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ZeroTwo = () => {
  const firstSection = useRef<HTMLElement>(null);
  const lineSectionRef = useRef<HTMLElement>(null);
  const headerText = useRef<HTMLParagraphElement>(null);
  const heroTextContainer = useRef<HTMLDivElement>(null);
  const headlines = [
    "Example 01",
    "Example of how to use scroll triggered animations.",
    "Example of a text conversion animation triggered on scroll percentage.",
  ];
  const [currentHeadline] = useState(headlines[0]);
  useGSAP(
    () => {
      const totalCycles = headlines.length; // 2 extra cycles for the first and last sections
      let currentCycle: number | undefined = undefined;
      const pinnedHeight = window.innerHeight * totalCycles; //
      if (heroTextContainer.current) {
        heroTextContainer.current.style.height = `${pinnedHeight}px`;
      }

      const updateHeaderText = () => {
        if (headerText.current) {
          const indexOfHeadlines = currentCycle
            ? Math.min(currentCycle, headlines.length - 1)
            : 0;
          headerText.current.innerHTML = headlines[indexOfHeadlines];
        }
      };
      ScrollTrigger.create({
        trigger: heroTextContainer.current,
        start: "top top",
        end: `+=${window.innerHeight * totalCycles}`,
        pin: true,
        pinSpacing: true, // what else?
        scrub: true,
        markers: true,

        onUpdate: (self) => {
          const scrollPosition = Math.max(
            1,
            self.scroll() - window.innerHeight,
          );

          const activeIndex = Math.floor(scrollPosition / window.innerHeight);

          if (activeIndex !== currentCycle) {
            currentCycle = activeIndex;
            updateHeaderText();
          }
        },
      });
    },

    { scope: heroTextContainer },
  );
  return (
    <main className={`${styles.container} `}>
      <section className={`${styles.section} `} ref={lineSectionRef}>
        <p className={styles.scrolldown}>Scroll down</p>
      </section>
      <div ref={heroTextContainer}>
        <section
          className={`${styles.firstSection} section ${styles.section}`}
          ref={firstSection}
        >
          <p
            style={{ fontFamily: "var(--font-geist-mono)" }}
            ref={headerText}
            className={`${styles.headerText}`}
          >
            {currentHeadline}
          </p>
        </section>
      </div>
    </main>
  );
};
