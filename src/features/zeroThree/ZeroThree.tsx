"use client";
import styles from "./zeroThree.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ZeroThree = () => {
  const headerSection = useRef<HTMLElement>(null);
  const heroSection = useRef<HTMLElement>(null);
  const footerSection = useRef<HTMLElement>(null);
  const heroImageOne = useRef<HTMLImageElement>(null);
  const heroParagraphs = useRef<HTMLParagraphElement>(null);
  const hasRenderedText = useRef(false);
  useGSAP(() => {
    if (heroParagraphs.current) {
      const heroParagraphText = new SplitType(heroParagraphs.current, {
        types: "chars",
      });
      gsap.from(heroParagraphText.chars, {
        scrollTrigger: {
          trigger: heroSection.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
          onUpdate: (self) => {
            if (self.progress === 1 && !hasRenderedText.current) {
              hasRenderedText.current = true;
            }
          },
        },
        scale: 0.85,
        opacity: 0,
        stagger: 0.1,
      });
    }

    gsap.from(document.querySelector(".heroText"), {
      scale: 0.85,
      duration: 1,
      stagger: 1,
      color: "white",
    });

    gsap.fromTo(
      heroImageOne.current,
      {
        scale: 1,
      },
      {
        scale: 1.2,
        scrollTrigger: {
          trigger: heroImageOne.current,
          start: "top bottom",
          end: "end end",
          scrub: true,
        },
      },
    );

    ScrollTrigger.create({
      trigger: heroSection.current,
      start: "top top",
      end: `+=${window.innerHeight}`,
      pin: true,
      scrub: true,

      onUpdate: (self) => {
        const { progress } = self;
        const newSize = gsap.utils.interpolate(1.2, 1.5, progress);
        const newBlur = gsap.utils.interpolate(0, 5, progress * 2);
        gsap.to(heroImageOne.current, {
          scale: newSize,
          filter: `blur(${newBlur}px)`,
        });

        if (progress < 1) {
          gsap.to(heroParagraphs.current, {
            scale: 1,
            opacity: 1,
            stagger: 0.1,
          });
        }

        if (progress >= 1) {
          gsap.to(heroImageOne.current, {
            scale: 1,
            filter: `blur(0px)`,
          });

          if (heroParagraphs.current) {
            gsap.to(heroParagraphs.current, {
              scale: 0.87,
              opacity: 0,
              stagger: 0.1,
            });
          }
        }
      },
    });
  }, {});
  return (
    <main className={`${styles.container} container`}>
      <section ref={headerSection} className={styles.headerSection}>
        <h1 className={`${styles.heroText} heroText`}>02</h1>
      </section>

      <section ref={heroSection} className={styles.heroSection}>
        <div className={styles.section}>
          <Image
            ref={heroImageOne}
            className={`${styles.heroImageOne} `}
            alt={""}
            aria-hidden={true}
            priority={true}
            fetchPriority={"high"}
            quality={100}
            src={"/03/03_section_01.jpg"}
            objectFit={"cover"}
            width={0}
            height={0}
            sizes={"100vw"}
          />
          <p
            ref={heroParagraphs}
            className={`${styles.heroParagraph} heroParagraph`}
          >
            <strong>
              Scroll
              <br /> With
              <br /> Me
            </strong>
          </p>
        </div>
      </section>

      <section ref={footerSection} className={styles.footerSection}>
        <p>The end..</p>
      </section>
    </main>
  );
};
