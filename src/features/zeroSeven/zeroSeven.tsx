"use client";
import styles from "./zeroSeven.module.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
export const ZeroSeven = () => {
  const mainContainer = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const timeline = gsap.timeline();
    const child = mainContainer.current?.querySelector(`.${styles.child}`);
    const grandChildren = mainContainer.current?.querySelectorAll(
      `.${styles.grandchild}`,
    );
    const menu = mainContainer.current?.querySelector(`.${styles.menu}`);
    timeline

      .fromTo(
        mainContainer.current,
        {
          scale: 0,
          opacity: 0,
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        ">",
      )

      .fromTo(
        child!,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        ">",
      );

    grandChildren?.forEach((grandChild) => {
      timeline.fromTo(
        grandChild,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
          stagger: 0.5,
        },
        ">",
      );
    });

    timeline.set(menu!, { position: "absolute", opacity: 0 }).fromTo(
      menu!,
      { position: "absolute", opacity: 0 },
      {
        opacity: 1,
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "200px",
      },
      ">",
    );
  }, []);

  return (
    <div ref={mainContainer} className={styles.main}>
      <div className={styles.parent}>
        <div className={styles.child}>
          <div className={styles.grandchild}>Grandchild 1</div>
          <div className={styles.grandchild}>Grandchild 2</div>
          <div className={styles.grandchild}>Grandchild 3</div>
        </div>
      </div>

      <div className={styles.menu}>MENUUUU</div>
    </div>
  );
};
