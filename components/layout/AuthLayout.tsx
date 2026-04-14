"use client";
import image1 from "@/assets/auth/image1.jpg";
import image2 from "@/assets/auth/image2.jpg";
import image3 from "@/assets/auth/image3.jpg";
import image4 from "@/assets/auth/image4.jpg";
import image5 from "@/assets/auth/image5.jpg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const authImages = [
    {
      id: 1,
      title: "Showcase Your Talent",
      description:
        "Create a stunning profile to showcase your skills and attract potential clients.",
      src: image1,
    },
    {
      id: 2,
      title: "Connect with Professionals",
      description:
        "Network with industry professionals and expand your opportunities.",
      src: image2,
    },
    {
      id: 3,
      title: "Discover Opportunities",
      description:
        "Explore a wide range of job postings and freelance gigs tailored to your skills.",
      src: image3,
    },
    {
      id: 4,
      title: "Collaborate on Projects",
      description:
        "Join forces with other creatives to work on exciting projects together.",
      src: image4,
    },
    {
      id: 5,
      title: "Get Hired",
      description:
        "Land your dream job or freelance gig by connecting with the right people.",
      src: image5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % authImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [authImages.length]);

  const prevIndex = (activeIndex - 1 + authImages.length) % authImages.length;
  const nextIndex = (activeIndex + 1) % authImages.length;
  const activeSlide = authImages[activeIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="relative mx-auto flex min-h-screen w-full flex-col md:flex-row">
        <div className="hidden flex-1 items-center justify-center px-8 py-10 md:flex lg:px-14">
          <div className="w-full max-w-3xl">
            <h2 className="relative text-center text-4xl font-semibold leading-tight text-foreground lg:text-5xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`title-${activeSlide.id}`}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="block  text-foreground"
                >
                  {activeSlide.title}.
                </motion.span>
              </AnimatePresence>
            </h2>

            <div className="relative mx-auto mt-4 max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${activeSlide.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="relative text-center text-base text-muted-foreground"
                >
                  {activeSlide.description}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="relative mx-auto mt-10 h-105 w-95">
              <div className="absolute inset-0 rounded-full bg-primary/12 blur-3xl" />

              <motion.div
                key={`left-${activeIndex}`}
                initial={{ opacity: 0.45, x: -10, rotate: -3 }}
                animate={{ opacity: 0.85, x: 0, rotate: -6, y: 2 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="absolute left-0 top-9 h-80 w-55 overflow-hidden rounded-[28px] border border-border/80 bg-card/70 shadow-[0_18px_45px_rgba(0,0,0,0.24)]"
              >
                <Image
                  src={authImages[prevIndex].src}
                  alt={authImages[prevIndex].title}
                  fill
                  className="object-cover opacity-75"
                  sizes="220px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                key={`right-${activeIndex}`}
                initial={{ opacity: 0.45, x: 10, rotate: 3 }}
                animate={{ opacity: 0.85, x: 0, rotate: 6, y: 2 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="absolute right-0 top-9 h-80 w-55 overflow-hidden rounded-[28px] border border-border/80 bg-card/70 shadow-[0_18px_45px_rgba(0,0,0,0.24)]"
              >
                <Image
                  src={authImages[nextIndex].src}
                  alt={authImages[nextIndex].title}
                  fill
                  className="object-cover opacity-75"
                  sizes="220px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
              <div className="absolute left-1/2 top-0 h-95 w-62.5 -translate-x-1/2 overflow-hidden rounded-4xl border border-border bg-card/70 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`main-${activeSlide.id}`}
                    initial={{ opacity: 0, scale: 1.08, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -8 }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeSlide.src}
                      alt={activeSlide.title}
                      fill
                      priority
                      className="object-cover"
                      sizes="250px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                    <motion.div
                      initial={{ x: "-120%" }}
                      animate={{ x: "140%" }}
                      transition={{
                        duration: 1.15,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                      className="absolute inset-y-0 w-16 -skew-x-12 bg-white/35 blur-md"
                    />
                    <div className="absolute inset-3 rounded-[22px] border border-white/35" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {authImages.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-8 bg-foreground"
                      : "w-2.5 bg-muted-foreground/50 hover:bg-foreground/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center px-5 py-10 md:min-w-110 md:basis-[42%] md:bg-card/45 md:px-8 lg:basis-[38%]">
          <div className="w-full max-w-lg">{children}</div>
        </div>
      </div>
    </section>
  );
}
