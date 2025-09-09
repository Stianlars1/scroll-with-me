"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import styles from "./landingPage.module.css";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const LandingPage = () => {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      // get all paragraphs inside the sections
      const paragraphs = document.querySelectorAll(".paragraph");

      paragraphs.forEach((chars) => {
        if (!chars) return;

        const text = new SplitType(chars as HTMLElement, { types: "chars" });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: chars,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: true,
          },
          opacity: 0.2,
          stagger: 0.1,
        });
      });
    },
    { scope: container },
  );

  return (
    <main className={styles.container} ref={container}>
      <section
        className={styles.section}
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
      >
        <p style={{ textAlign: "center", textWrap: "balance" }}>
          👋 Welcome to <strong>Scroll With Me</strong>
        </p>

        <i
          style={{
            textAlign: "center",
            maxWidth: "750px",
            textWrap: "pretty",
            fontSize: "1rem ",
          }}
        >
          This is a website dedicated to learning GSAP and scroll animations.
          From <strong>zero</strong> to <strong>Hero</strong>
        </i>
      </section>
      <section className={`${styles.section}  section`}>
        <p className={"paragraph"}>I'm new to animations, so bear with me.</p>
      </section>
      <section className={`${styles.section}  section`}>
        <p className={"paragraph"}>
          This is my first interactions with creating animations for web, or at
          least using scroll triggered animations, and also using GSAP.
        </p>
      </section>
      <section className={`${styles.section}  section`}>
        <p className={"paragraph"}>
          Who knew scroll-animations could be so fun?
        </p>
      </section>
      <section className={`${styles.section}  section`}>
        <p className={"paragraph"}>I for one didnt knew i could do this.</p>
      </section>
      <section className={`${styles.section}  section`}>
        <p className={"paragraph"}>
          This is as basic as it gets. I guess well stop here.
        </p>
      </section>
    </main>
  );
};
