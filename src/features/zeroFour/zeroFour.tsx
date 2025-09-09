"use client";
import styles from "./zeroFour.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const hoursOfDay = Array.from({ length: 25 }, (_, i) => i);
const daysInWeek = Array.from({ length: 8 }, (_, i) => i);
export const ZeroFour = () => {
  const mainRef = useRef<HTMLElement>(null);
  const insightsRef = useRef<HTMLElement>(null);
  const insightsHeader = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: insightsRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      markers: true,
      pinSpacing: true,

      onUpdate: (self) => {
        console.log(self.progress);
        const progress = self.progress;

        // get hours a day index
        const hourMapIndex = Math.floor(progress * hoursOfDay.length);
        const hour = hoursOfDay[hourMapIndex] ?? 0;

        // get days a week index
        const dayMapIndex = Math.floor(progress * daysInWeek.length);
        const day = daysInWeek[dayMapIndex] ?? 0;
        console.log("hourMapIndex", hourMapIndex);
        console.log("hour", hour);

        if (insightsHeader.current) {
          insightsHeader.current.textContent = `Insights ${hour}/${day}`;
        }
        if (self.progress === 1) {
          if (insightsHeader.current) {
            insightsHeader.current.textContent = `Insights 24/7`;
          }
        }
      },
    });
  });

  return (
    <main ref={mainRef} className={`${styles.main} main`}>
      <section ref={insightsRef} className={`${styles.section} `}>
        <h1 ref={insightsHeader}>Insights 24/7</h1>
      </section>
      <section className={styles.section}>
        <p>Page not found</p>
      </section>
    </main>
  );
};
