"use client";

import React from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TopNavigation from "@/components/top-navigation";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactLenis root>
      <TopNavigation />
      <main>{children}</main>
      <Footer />
    </ReactLenis>
  );
};

export default Providers;
