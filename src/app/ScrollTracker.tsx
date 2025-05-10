"use client";
import { useEffect } from "react";

export default function ScrollTracker() {
  useEffect(() => {
    const handleScroll = () => {
      console.log("User is scrolling");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return null;
} 