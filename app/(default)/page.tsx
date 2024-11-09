"use client";
import React, { useEffect } from "react";
import { logPageView, initGA } from "./analytics";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";


export default function Home() {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log page view on component mount
  }, []);
  return (
    <>
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
