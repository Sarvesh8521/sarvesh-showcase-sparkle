import { useEffect } from "react";

export const useSectionReveal = () => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionPreference.matches || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    sections.forEach((section) => section.classList.add("section-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
};