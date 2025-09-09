"use client";
import { ReactNode } from "react";
import ReactLenis from "@studio-freight/react-lenis";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis autoRaf={true} options={{ duration: 2.5 }} root>
      {children}
    </ReactLenis>
  );
};
