import { ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { EvervaultCard } from "../components/ui/evervault-card";
import { LayoutTextFlip } from "../components/ui/layout-text-flip";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from "../components/ui/glowing-stars";
import { Spotlight } from "../components/ui/spotlight-new";
import { Lens } from "../components/ui/lens";
import { FAQItem } from "../components/FAQItem";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Index() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const trustBadges = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 12L20.56 9.22001L20.9 5.54001L17.29 4.72001L15.4 1.54001L12 3.00001L8.6 1.54001L6.71 4.72001L3.1 5.53001L3.44 9.21001L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58001L18 9.00001L10 17Z"
            fill="#E5E5E5"
          />
        </svg>
      ),
      text: "Affordable Pricing with no hidden fees",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25 5C17.587 5 14.992 4.057 12.45 2.15C12.3202 2.05263 12.1623 2 12 2C11.8377 2 11.6798 2.05263 11.55 2.15C9.008 4.057 6.413 5 3.75 5C3.55109 5 3.36032 5.07902 3.21967 5.21967C3.07902 5.36032 3 5.55109 3 5.75V11C3 16.001 5.958 19.676 11.725 21.948C11.9017 22.0176 12.0983 22.0176 12.275 21.948C18.042 19.676 21 16 21 11V5.75C21 5.55109 20.921 5.36032 20.7803 5.21967C20.6397 5.07902 20.4489 5 20.25 5ZM16.757 9.303L10.757 14.803C10.6145 14.9335 10.4271 15.004 10.2339 14.9997C10.0407 14.9954 9.8566 14.9167 9.72 14.78L7.22 12.28C7.14631 12.2113 7.08721 12.1285 7.04622 12.0365C7.00523 11.9445 6.98319 11.8452 6.98141 11.7445C6.97963 11.6438 6.99816 11.5438 7.03588 11.4504C7.0736 11.357 7.12974 11.2722 7.20096 11.201C7.27218 11.1297 7.35701 11.0736 7.4504 11.0359C7.54379 10.9982 7.64382 10.9796 7.74452 10.9814C7.84523 10.9832 7.94454 11.0052 8.03654 11.0462C8.12854 11.0872 8.21134 11.1463 8.28 11.22L10.273 13.212L15.743 8.197C15.8897 8.06253 16.0837 7.99184 16.2825 8.00047C16.4813 8.00909 16.6685 8.09634 16.803 8.243C16.9375 8.38966 17.0082 8.58374 16.9995 8.78253C16.9909 8.98132 16.9037 9.16854 16.757 9.303Z"
            fill="#E5E5E5"
          />
        </svg>
      ),
      text: "FDA-registered pharmacies",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4751 5.48317C18.5029 5.46694 18.526 5.4437 18.542 5.41577C18.5581 5.38783 18.5665 5.35618 18.5665 5.32397C18.5665 5.29176 18.5581 5.26011 18.542 5.23217C18.526 5.20424 18.5029 5.181 18.4751 5.16476L11.4369 1.07566C10.9865 0.814623 10.4752 0.677155 9.9547 0.677155C9.43418 0.677155 8.92289 0.814623 8.47255 1.07566L1.43573 5.16476C1.4079 5.181 1.38482 5.20424 1.36878 5.23217C1.35273 5.26011 1.34429 5.29176 1.34429 5.32397C1.34429 5.35618 1.35273 5.38783 1.36878 5.41577C1.38482 5.4437 1.4079 5.46694 1.43573 5.48317L9.86277 10.4404C9.89112 10.4571 9.92342 10.4659 9.95632 10.4659C9.98921 10.4659 10.0215 10.4571 10.0499 10.4404L18.4751 5.48317ZM0.646843 6.737C0.618735 6.72077 0.586841 6.71225 0.554384 6.71231C0.521928 6.71236 0.490061 6.72098 0.462005 6.7373C0.43395 6.75362 0.410701 6.77705 0.394609 6.80524C0.378518 6.83343 0.370155 6.86536 0.370365 6.89782V14.9106C0.371061 15.2967 0.472832 15.676 0.665557 16.0106C0.858283 16.3452 1.13525 16.6235 1.4689 16.8178L8.94118 21.2982C8.96919 21.3143 9.00096 21.3229 9.03329 21.3229C9.06563 21.3229 9.0974 21.3144 9.12542 21.2982C9.15343 21.2821 9.1767 21.2588 9.19289 21.2308C9.20909 21.2028 9.21763 21.1711 9.21766 21.1387V11.8422C9.21763 11.8098 9.20909 11.7781 9.19292 11.7501C9.17674 11.7221 9.15349 11.6989 9.1255 11.6827L0.646843 6.737ZM10.6922 11.8744V21.1364C10.6922 21.1688 10.7008 21.2005 10.717 21.2285C10.7332 21.2565 10.7564 21.2798 10.7844 21.2959C10.8125 21.3121 10.8442 21.3206 10.8766 21.3206C10.9089 21.3206 10.9407 21.312 10.9687 21.2959L18.4405 16.8155C18.7739 16.6214 19.0508 16.3435 19.2435 16.0093C19.4363 15.6752 19.5384 15.2964 19.5395 14.9106V6.89782C19.5394 6.86552 19.5308 6.83382 19.5146 6.80589C19.4983 6.77796 19.4751 6.75478 19.4471 6.73868C19.4191 6.72258 19.3873 6.71412 19.355 6.71415C19.3227 6.71418 19.291 6.7227 19.263 6.73885L10.7844 11.7154C10.7564 11.7316 10.7332 11.7547 10.7171 11.7826C10.7009 11.8105 10.6923 11.8422 10.6922 11.8744Z"
            fill="#E5E5E5"
          />
        </svg>
      ),
      text: "Free and Discrete Shipping on All Prescriptions",
    },
    {
      icon: (
        <svg
          className="w-3 h-5"
          viewBox="0 0 13 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.370361 3.125C0.370361 1.676 1.54636 0.5 2.99536 0.5H9.74536C11.1944 0.5 12.3704 1.676 12.3704 3.125V18.875C12.3704 19.5712 12.0938 20.2389 11.6015 20.7312C11.1092 21.2234 10.4416 21.5 9.74536 21.5H2.99536C2.29917 21.5 1.63149 21.2234 1.13921 20.7312C0.646923 20.2389 0.370361 19.5712 0.370361 18.875V3.125ZM4.87036 17C4.67145 17 4.48068 17.079 4.34003 17.2197C4.19938 17.3603 4.12036 17.5511 4.12036 17.75C4.12036 17.9489 4.19938 18.1397 4.34003 18.2803C4.48068 18.421 4.67145 18.5 4.87036 18.5H7.87036C8.06927 18.5 8.26004 18.421 8.40069 18.2803C8.54134 18.1397 8.62036 17.9489 8.62036 17.75C8.62036 17.5511 8.54134 17.3603 8.40069 17.2197C8.26004 17.079 8.06927 17 7.87036 17H4.87036Z"
            fill="#E5E5E5"
          />
        </svg>
      ),
      text: "100% Online Process",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            fill="#E5E5E5"
          />
          <path
            d="M2 17L12 22L22 17V12L12 17L2 12V17Z"
            fill="#E5E5E5"
            opacity="0.7"
          />
        </svg>
      ),
      text: "Private white label available",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#E5E5E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Complete turnkey partner",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#E5E5E5"
          />
        </svg>
      ),
      text: "USA Made",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z"
            stroke="#E5E5E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Third party tested",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.72 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
            fill="#E5E5E5"
          />
        </svg>
      ),
      text: "Research grade peptides",
    },
  ];

  const categoryCards = [
    {
      category: "Injectables",
      image: "/assets/pm injectable peptide bottle with injetcion.png",
    },
    {
      category: "Topicals",
      image: "/assets/pm topical cream bottle.png",
    },
    {
      category: "Oral",
      image: "/assets/pm pills blue and orange gradient.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      {/* Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-gradient-to-r from-[#1A1A1A] via-[#252525] to-[#1A1A1A] overflow-hidden border-b border-[#2A2A2A]"
          >
            <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 px-6 py-3">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-2 sm:gap-3"
              >
                <span className="inline-flex items-center gap-1.5 bg-[#FF6B35]/20 backdrop-blur-sm px-3 py-1 rounded-full border border-[#FF6B35]/30">
                  <svg className="w-4 h-4 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-[#FF6B35] font-helvetica text-xs font-semibold uppercase tracking-wide">
                    Limited Time
                  </span>
                </span>
                <p className="text-[#E5E5E5] font-helvetica text-sm sm:text-base md:text-lg font-semibold">
                  <span className="hidden sm:inline">Black Friday Sale: </span>
                  <span className="font-bold text-[#FF6B35]">10% OFF</span> Entire Catalog
                  <span className="hidden md:inline"> • Ends Soon</span>
                </p>
              </motion.div>
              
              {/* Close Button */}
              <button
                onClick={() => setShowAnnouncement(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-white transition-colors p-1"
                aria-label="Dismiss announcement"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Banner */}
      <div className="bg-[#111111] px-6 sm:px-8 md:px-12 py-6 md:py-7 overflow-hidden">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 mask-fade z-[1]"
            aria-hidden="true"
          />
          <div className="marquee flex items-center gap-6 sm:gap-8 md:gap-10 w-max [--duration:40s] hover:[animation-play-state:paused] motion-reduce:!animate-none">
            {trustBadges.map((badge, index) => (
              <div
                key={`a-${index}`}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="flex-shrink-0">{badge.icon}</div>
                <div className="text-[#E5E5E5] font-inter text-sm sm:text-base">
                  {badge.text}
                </div>
              </div>
            ))}
            {trustBadges.map((badge, index) => (
              <div
                key={`b-${index}`}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="flex-shrink-0">{badge.icon}</div>
                <div className="text-[#E5E5E5] font-inter text-sm sm:text-base">
                  {badge.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-black/60 border-b border-white/10 shadow-xl">
        <div className="px-6 sm:px-8 md:px-12 lg:px-28">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <img
                src="/logos/dark.svg"
                alt="the peptide market"
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            
            {/* CTA Button */}
            <ShimmerButton className="h-12 px-10 text-lg">
              Apply Now
            </ShimmerButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl border border-[#222222] bg-gradient-to-b from-[#0F0F10] to-[#151515] p-6 sm:p-8 md:p-10 overflow-hidden">
            <Spotlight
              gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 90%, .05) 0, hsla(0, 0%, 70%, .02) 50%, hsla(0, 0%, 50%, 0) 80%)"
              gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 85%, .04) 0, hsla(0, 0%, 60%, .01) 80%, transparent 100%)"
              gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 80%, .03) 0, hsla(0, 0%, 50%, .01) 80%, transparent 100%)"
              translateY={-250}
              width={400}
              height={1000}
              smallWidth={180}
              duration={8}
              xOffset={80}
            />
            {/* Main Content */}
            <div className="flex flex-col gap-12 lg:gap-16">
              {/* Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[91px] font-helvetica leading-tight">
                  <div className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent mb-6">
                    Peptides for
                  </div>
                  <LayoutTextFlip
                    text=""
                    words={[
                      "Hair Regrowth",
                      "Testosterone",
                      "Weight Loss",
                      "Sexual Wellness",
                      "Muscle Growth",
                      "Skin Care",
                      "Immune System",
                    ]}
                    duration={3000}
                  />
                </h1>
                <p className="text-[#9CA3AF] font-helvetica text-base sm:text-lg md:text-xl">
                  Helping your patients and practice become profitable.
                </p>
              </motion.div>

              {/* Cards Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full"
              >
                {categoryCards.map((card, index) => (
                    <button
                      key={index}
                    className="rounded-xl p-6 flex flex-col gap-6 min-h-[320px] bg-[#111111] border border-[#222222] hover:shadow-lg hover:border-[#333] transition-all hover:-translate-y-1 cursor-pointer text-left w-full"
                    >
                      <div className="flex justify-between items-center">
                      <div className="text-lg sm:text-xl font-helvetica">
                        <span className="text-[#EAEAEA]">{card.category}</span>
                        </div>
                      <ChevronRight className="w-5 h-5 flex-shrink-0 text-[#FF6B35]" />
                      </div>
                      <Lens zoomFactor={2} lensSize={150}>
                      <img
                        src={card.image}
                        alt={card.category}
                        className="w-full h-52 sm:h-56 md:h-60 object-contain mx-auto"
                      />
                      </Lens>
                    </button>
                  ))}
              </motion.div>

              {/* Telehealth for Clinics - Minimal Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="mt-2 relative rounded-lg border border-[#2A2A2A] bg-gradient-to-r from-[#1A1A1A] to-[#151515] py-3 px-4 text-center overflow-hidden"
              >
                <p className="relative z-10 text-[#9CA3AF] font-helvetica text-sm sm:text-base italic">
                  Add Turnkey Telehealth Services to Your Clinic
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Peptide Solutions Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14"
          >
            Premium Peptide Solutions
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Large Featured Card - Water Splash Bottle */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:row-span-3 relative overflow-hidden rounded-2xl border border-[#222222] bg-gradient-to-b from-[#0F0F10] to-[#151515] p-8 sm:p-10 hover:border-[#333] transition-all cursor-pointer text-left"
            >
              <div className="flex flex-col h-full justify-center">
                <div className="mb-6">
                  <h3 className="text-white font-helvetica text-2xl sm:text-3xl font-bold mb-3">
                    Pure Excellence
            </h3>
                  <p className="text-[#9CA3AF] font-helvetica text-base sm:text-lg leading-relaxed">
                    Pure Excellence at 99.6% purity. Every product tested, verified, and optimized for maximum efficacy.
                  </p>
                </div>
                <div className="flex items-center justify-center flex-1 min-h-[380px]">
                  <Lens zoomFactor={2.2} lensSize={200}>
                    <img
                      src="/assets/bottle in a water splash.png"
                      alt="Premium peptides"
                      className="w-full max-w-lg h-full object-contain scale-110"
                    />
                  </Lens>
            </div>
          </div>
            </motion.button>

            {/* Top Right - Oral Peptides */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-[#222222] bg-gradient-to-b from-[#0F0F10] to-[#151515] p-8 hover:border-[#333] transition-all cursor-pointer text-left"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 h-full">
                <div className="flex-1">
                  <h3 className="text-white font-helvetica text-xl sm:text-2xl font-bold mb-2">
                    Oral Formulations
                  </h3>
                  <p className="text-[#9CA3AF] font-helvetica text-sm sm:text-base leading-relaxed">
                    Convenient Daily Protocols
                  </p>
        </div>
                <div className="w-36 h-36 sm:w-40 sm:h-40 flex-shrink-0">
                  <Lens zoomFactor={2} lensSize={140}>
                    <img
                      src="/assets/pm pills blue and orange gradient.png"
                      alt="Oral peptides"
                      className="w-full h-full object-contain"
                    />
                  </Lens>
      </div>
              </div>
            </motion.button>

            {/* Middle Right - Subcutaneous Injectables */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-[#222222] bg-gradient-to-b from-[#0F0F10] to-[#151515] p-8 hover:border-[#333] transition-all cursor-pointer text-left"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 h-full">
                <div className="flex-1">
                  <h3 className="text-white font-helvetica text-xl sm:text-2xl font-bold mb-2">
                    Subcutaneous Injectables
                  </h3>
                  <p className="text-[#9CA3AF] font-helvetica text-sm sm:text-base leading-relaxed">
                    Lyophilized Peptide Vials (Purity Tested)
                  </p>
                </div>
                <div className="w-36 h-36 sm:w-40 sm:h-40 flex-shrink-0">
                  <Lens zoomFactor={2} lensSize={140}>
                    <img
                      src="/assets/pm injectable peptide bottle with injetcion.png"
                      alt="Subcutaneous Injectables"
                      className="w-full h-full object-contain"
                    />
                  </Lens>
      </div>
              </div>
            </motion.button>

            {/* Bottom Right - Topical Solutions */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-[#222222] bg-gradient-to-b from-[#0F0F10] to-[#151515] p-8 hover:border-[#333] transition-all cursor-pointer text-left"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 h-full">
                <div className="flex-1">
                  <h3 className="text-white font-helvetica text-xl sm:text-2xl font-bold mb-2">
                    Topical Compounds
                  </h3>
                  <p className="text-[#9CA3AF] font-helvetica text-sm sm:text-base leading-relaxed">
                    Transdermal Absorption Systems
                  </p>
                </div>
                <div className="w-36 h-36 sm:w-40 sm:h-40 flex-shrink-0">
                  <Lens zoomFactor={2} lensSize={140}>
                    <img
                      src="/assets/pm topical cream bottle.png"
                      alt="Topical solutions"
                      className="w-full h-full object-contain"
                    />
                  </Lens>
                </div>
              </div>
            </motion.button>
          </div>

          {/* Bottom Stat Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { stat: "100%", label: "FDA-registered pharmacies" },
              { stat: "24/7", label: "Clinician support" },
              { stat: "COA", label: "Docs available & 3rd party tested" },
              { stat: "3-5", label: "Days discreet delivery" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="rounded-xl border border-[#222222] bg-gradient-to-b from-[#0F0F10] to-[#151515] p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-helvetica font-bold bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <p className="text-[#9CA3AF] font-helvetica text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA after stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <ShimmerButton className="h-14 sm:h-16 px-12 sm:px-16 text-lg sm:text-xl">
              Apply Now
            </ShimmerButton>
            <p className="text-[#9CA3AF] font-helvetica text-sm mt-4">
              FDA-registered pharmacies • Discreet shipping
            </p>
          </motion.div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-16 sm:py-20 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14"
          >
            We're With You Every Step Of The Way
          </motion.h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <GlowingStarsBackgroundCard className="bg-gradient-to-b from-[#0F0F10] to-[#151515] border-[#222222] !max-w-none !max-h-none !h-auto flex flex-col p-8">
              <div className="flex items-center gap-3 mb-4 w-full">
                <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-helvetica font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-helvetica text-base sm:text-lg font-semibold break-words">
                    Dedicated 24/7 Support
                  </h3>
                </div>
              </div>
              <p className="text-[#9CA3AF] font-helvetica text-sm leading-relaxed">
                Access our online portal anytime for immediate assistance and real-time support.
              </p>
            </GlowingStarsBackgroundCard>

            {/* Step 2 */}
            <GlowingStarsBackgroundCard className="bg-gradient-to-b from-[#0F0F10] to-[#151515] border-[#222222] !max-w-none !max-h-none !h-auto flex flex-col p-8">
              <div className="flex items-center gap-3 mb-4 w-full">
                <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-helvetica font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-helvetica text-base sm:text-lg font-semibold break-words">
                    100% Online Ordering
                  </h3>
                </div>
              </div>
              <p className="text-[#9CA3AF] font-helvetica text-sm leading-relaxed">
                Order seamlessly online with no minimum order quantity required.
              </p>
            </GlowingStarsBackgroundCard>

            {/* Step 3 */}
            <GlowingStarsBackgroundCard className="bg-gradient-to-b from-[#0F0F10] to-[#151515] border-[#222222] !max-w-none !max-h-none !h-auto flex flex-col p-8">
              <div className="flex items-center gap-3 mb-4 w-full">
                <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-helvetica font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-helvetica text-base sm:text-lg font-semibold break-words">
                    Fast Delivery
                  </h3>
                </div>
              </div>
              <p className="text-[#9CA3AF] font-helvetica text-sm leading-relaxed">
                Premium peptides shipped discreetly with ongoing optimization support.
              </p>
            </GlowingStarsBackgroundCard>
          </div>
          
          {/* CTA after How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12 sm:mt-16 text-center"
          >
            <ShimmerButton className="h-14 sm:h-16 px-12 sm:px-16 text-lg sm:text-xl">
              Apply Now
            </ShimmerButton>
          </motion.div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-10 sm:py-12 md:py-16 bg-[#0B0B0B]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 max-w-[420px] lg:self-center"
            >
              <h2 className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14 leading-tight">
                No Hidden Fees, Ever
              </h2>
              <p className="text-[#9CA3AF] font-helvetica text-sm sm:text-base md:text-[18px] mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                We build community by focusing on real solutions, personalized care, science-backed supplements and root cause therapies paired with virtual appointments and accessible diagnostics make healthcare seamless and centered on you.
              </p>
              <ShimmerButton className="h-12 sm:h-14 md:h-16 px-10 sm:px-12 md:px-16 text-lg sm:text-xl md:text-2xl">
                Apply Now
              </ShimmerButton>
              <p className="text-[#9CA3AF] font-helvetica text-sm mt-4">
                FDA-registered pharmacies • Discreet shipping
              </p>
            </motion.div>

            {/* Right Comparison Table */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="flex-1 w-full max-w-[550px]"
            >
              {/* Table Headers */}
              <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[110px_1fr_1fr_1fr] items-end mb-4 sm:mb-5 md:mb-6 gap-x-3">
                <div></div>
                <div className="flex justify-center items-end">
                  <img
                    src="/logos/dark.svg"
                    alt="the peptide market"
                    className="h-5 sm:h-6 md:h-7 w-auto"
                  />
                </div>
                <div className="text-[#E5E5E5] font-helvetica text-[9px] sm:text-[10px] uppercase text-center">
                  OUR COMPETITORS
                </div>
                <div className="text-[#E5E5E5] font-helvetica text-[9px] sm:text-[10px] uppercase text-center">
                  TRADITIONAL MEDICINE
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-2 mb-4">
                {/* Row: CONVENIENT */}
                <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[110px_1fr_1fr_1fr] items-center gap-x-3">
                  <div className="text-[#E5E5E5] font-helvetica text-[9px] uppercase">
                    CONVENIENT
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z"
                        fill="#E5E5E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Row: MEMBERSHIP FEES */}
                <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[110px_1fr_1fr_1fr] items-center gap-x-3">
                  <div className="text-[#E5E5E5] font-helvetica text-[9px] uppercase">
                    MEMBERSHIP FEES
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <span className="text-white font-helvetica text-xs md:text-sm leading-none whitespace-nowrap font-semibold">
                      $0
                    </span>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <span className="text-white font-helvetica text-xs md:text-sm leading-none whitespace-nowrap font-semibold">
                      $129+
                    </span>
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <span className="text-white font-helvetica text-xs md:text-sm leading-none whitespace-nowrap font-semibold">
                      $0
                    </span>
                  </div>
                </div>

                {/* Row: CONSULTATION FEES */}
                <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[110px_1fr_1fr_1fr] items-center gap-x-3">
                  <div className="text-[#E5E5E5] font-helvetica text-[9px] uppercase">
                    CONSULTATION FEES
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <span className="text-white font-helvetica text-xs md:text-sm leading-none whitespace-nowrap font-semibold">
                      $0
                    </span>
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <span className="text-white font-helvetica text-xs md:text-sm leading-none whitespace-nowrap font-semibold">
                      $0
                    </span>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <span className="text-white font-helvetica text-xs md:text-sm leading-none whitespace-nowrap font-semibold">
                      $20+
                    </span>
                  </div>
                </div>

                {/* Row: TREATS ROOT CAUSE */}
                <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[110px_1fr_1fr_1fr] items-center gap-x-3">
                  <div className="text-[#E5E5E5] font-helvetica text-[9px] uppercase">
                    TREATS ROOT CAUSE
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z"
                        fill="#E5E5E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z"
                        fill="#E5E5E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Row: LAB DRAWS */}
                <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[110px_1fr_1fr_1fr] items-center gap-x-3">
                  <div className="text-[#E5E5E5] font-helvetica text-[9px] uppercase">
                    LAB DRAWS
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z"
                        fill="#E5E5E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Row: PROACTIVE */}
                <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[110px_1fr_1fr_1fr] items-center gap-x-3">
                  <div className="text-[#E5E5E5] font-helvetica text-[9px] uppercase">
                    PROACTIVE
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z"
                        fill="#E5E5E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z"
                        fill="#E5E5E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                </div>

                {/* Row: DATA DRIVEN */}
                <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[110px_1fr_1fr_1fr] items-center gap-x-3">
                  <div className="text-[#E5E5E5] font-helvetica text-[9px] uppercase">
                    DATA DRIVEN
                  </div>
                  <div className="h-9 md:h-10 rounded bg-[#000000] border border-[#2A2A2A] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z"
                        fill="#E5E5E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                  <div className="h-9 md:h-10 rounded border border-[#1A1A1A] bg-[#050505] flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 27 27" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z"
                        fill="#E5E5E5"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z"
                        fill="#E5E5E5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Total Cost Row */}
              <div className="pt-3 sm:pt-4 border-t border-[#222222]">
                <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[110px_1fr_1fr_1fr] items-center gap-x-3">
                  <div className="text-[#E5E5E5] font-helvetica text-[9px] font-bold uppercase">
                    TOTAL COST
                  </div>
                  <div className="py-1.5 flex justify-center">
                    <span className="text-white font-helvetica text-xs sm:text-sm md:text-base font-bold">
                      $0
                    </span>
                  </div>
                  <div className="py-1.5 flex justify-center">
                    <span className="text-white font-helvetica text-xs sm:text-sm md:text-base font-bold">
                      $129+
                    </span>
                  </div>
                  <div className="py-1.5 flex justify-center">
                    <span className="text-white font-helvetica text-xs sm:text-sm md:text-base font-bold">
                      $20+
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14"
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
            {[
              { image: "/headshots/Ash Rahman.png", name: "Ash Rahman", title: "CEO" },
              { image: "/headshots/Muhammad Bin Sohail.png", name: "Muhammad Bin Sohail", title: "Head of Technology" },
              { image: "/headshots/Oliver Ibrahim.png", name: "Oliver Ibrahim", title: "Head of Marketing" },
              { image: "/headshots/Gaelle Semaan.png", name: "Gaelle Semaan", title: "Clinic Launch Liaison" },
              { image: "/headshots/Jimmy.png", name: "Jimmy", title: "Head of Sales" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <EvervaultCard
                  image={member.image}
                  name={member.name}
                  title={member.title}
                />
              </motion.div>
            ))}
          </div>
          
          {/* CTA after Our Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12 sm:mt-16 text-center"
          >
            <ShimmerButton className="h-14 sm:h-16 px-12 sm:px-16 text-lg sm:text-xl">
              Apply Now
            </ShimmerButton>
          </motion.div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14"
          >
            Trusted By Clinics Across The US
          </motion.h2>

          <InfiniteMovingCards
            items={[
              {
                quote: "Switching to Peptide Market changed everything for us. Not only are we getting faster peptide shipments, but our margins improved by at least 30%. Their team helped us stay compliant in all 50 states — total game changer.",
                name: "Dr. Emily Rodriguez",
                title: "Clinic Owner – Miami, FL",
              },
              {
                quote: "We were struggling to find a reliable peptide supplier. Now we get access to over 60 U.S.-made peptides, delivered fast — and our patients love the results. The onboarding was seamless.",
                name: "Jonathan Blake",
                title: "Wellness Practice Owner – Austin, TX",
              },
              {
                quote: "Their telehealth setup saved us months of legal headaches. We launched our medical weight loss program in less than two weeks with full physician coverage and compliance support.",
                name: "Sarah Kim, NP",
                title: "Los Angeles, CA",
              },
              {
                quote: "The Peptide Market platform feels like it was built for high-performing clinics. From the telemedicine tools to the sleek branding, everything just works. It makes us look and operate like a national brand.",
                name: "Dr. Kevin Patel",
                title: "Men's Health Specialist – Scottsdale, AZ",
              },
            ]}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
          
          {/* CTA after Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12 sm:mt-16 text-center"
          >
            <ShimmerButton className="h-14 sm:h-16 px-12 sm:px-16 text-lg sm:text-xl">
              Apply Now
            </ShimmerButton>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-[601px] mx-auto">
          <div className="flex flex-col gap-[25px]">
            <FAQItem
              variant="dark"
              question="What is the peptide market?"
              answer="The peptide market is a comprehensive platform offering personalized healthcare solutions around supplying peptides, hormone therapy, and telehealth services. We focus on only the highest purity Lyophilized peptides to our clients. Accessible, data-driven care tailored to your specific needs."
            />
            <FAQItem
              variant="dark"
              question="Why Add Peptides To Your Traditional Medical Practice Or Clinic?"
              answer="The sentiment towards using progressive medicine is increasing at an unprecedented rate. We have taken a proactive, data-driven approach to where the healthcare market is headed. So why not offer Peptides to treat your patients and clients in a controlled environment then have them go to less experienced and skilled people at an amazing markup. The best part is this requires no extra work on your part to add an extra 5-7 figures to your business. We help you offer convenient direct to patient delivery and virtual appointments."
            />
            <FAQItem
              variant="dark"
              question="How Pure are your peptides?"
              answer="Our pharmaceutical grade lyophilized peptides are third party batch tested at 99.6% purity. Highest available on the market. COA toxin documentations are available for each batch."
            />
            <FAQItem
              variant="dark"
              question="How Do I Work With Peptide Market?"
              answer="Our application process is simple and convenient. If approved, your Clinic Launch Liaison will directly set you up on our platform to get you started offering peptides to your patients immediately."
            />
            <FAQItem
              variant="dark"
              question="Are there any membership or consultation fees?"
              answer="No, we pride ourselves on transparent pricing with no hidden fees. Unlike our competitors who charge $129+ in membership fees, we offer consultations at $0 cost. You only pay for your prescribed treatments."
            />
            <FAQItem
              variant="dark"
              question="What makes you different from traditional medicine?"
              answer="We take a proactive, data-driven approach to healthcare. Our treatments address root causes rather than just symptoms, and we offer convenient at-home lab draws and virtual appointments. Plus, there are no consultation fees like you'd find with traditional medicine."
            />
            <FAQItem
              variant="dark"
              question="Is the treatment safe and FDA-approved?"
              answer="Yes, all our treatments are dispensed through FDA-registered pharmacies and prescribed by board-certified physicians. We ensure the highest standards of safety and quality in all our products and services."
            />
            <FAQItem
              variant="dark"
              question="How long does shipping take?"
              answer="We offer free and discreet shipping on all prescriptions. Most orders are delivered within 3-5 business days. All packages are shipped in unmarked, discreet packaging to protect your privacy."
            />
            <FAQItem
              variant="dark"
              question="Do you price match competitors?"
              answer="Not only will we price match, but if we can beat their pricing we will. This will be rare as we already offer the best pricing in the peptide market!"
            />
            <FAQItem
              variant="dark"
              question="Do you have Minimum Order Quantities?"
              answer="No! We are your partner and scale up or down according to your needs."
            />
          </div>

          {/* CTA after FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-[#E5E5E5] font-helvetica text-lg sm:text-xl mb-6">
              Still Have Questions? Our Team Is Here To Help.
            </p>
            <ShimmerButton className="h-14 sm:h-16 px-12 sm:px-16 text-lg sm:text-xl">
              Apply Now
            </ShimmerButton>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative bg-gradient-to-b from-[#0F0F10] to-[#151515] border border-[#222222] rounded-[24px] px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-[100px] overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-[1090px] mx-auto">
              {/* Left Content */}
              <div className="flex flex-col gap-6 max-w-[450px] w-full">
                <h2 className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-3xl sm:text-4xl md:text-5xl leading-tight">
                  Learn The Benefits Of Adding Peptides To Your Practice?
                </h2>
                <p className="text-[#9CA3AF] font-helvetica text-base sm:text-lg leading-relaxed">
                  Stay updated with industry insights, best practices, and exclusive offers.
                </p>
              </div>

              {/* Right Form */}
              <div className="flex flex-col gap-[36px] max-w-[384px] w-full">
                <div className="flex flex-col gap-[30px]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-[21px] rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder:text-[#666] font-helvetica text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#4A5568]"
                  />
                  <ShimmerButton className="w-full text-base sm:text-lg">
                    Sign up for the newsletter today
                  </ShimmerButton>
                </div>
                <p className="text-[#9CA3AF] font-helvetica text-sm">
                  By creating an account using email, I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-[#E5E7EB] underline hover:text-white transition-colors"
                  >
                    Terms & conditions
                  </Link>{" "}
                  and acknowledge the{" "}
                  <Link
                    to="/privacy"
                    className="text-[#E5E7EB] underline hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative bg-[#0B0B0B] border-t border-[#222222] px-0 py-12 sm:py-16 md:py-20 lg:py-[87px]">
        <div className="relative z-[1] max-w-[1410px] mx-auto px-6 sm:px-8 pb-[clamp(80px,14vw,260px)]">
          <div className="flex flex-col gap-16 sm:gap-20 md:gap-[91px]">
            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-[187px]">
              {/* Navigation Column */}
              <div className="flex flex-col gap-[22px]">
                <h3 className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-2xl sm:text-3xl md:text-[31px] font-bold">
                  Navigation
                </h3>
                <nav className="flex flex-col gap-[14px]">
                  <a
                    href="#"
                    className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Shop / Catalog
                  </a>
                  <a
                    href="#"
                    className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </nav>
              </div>

              {/* Legal & Compliance Column */}
              <div className="flex flex-col gap-[22px]">
                <h3 className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-2xl sm:text-3xl md:text-[31px] font-bold">
                  Legal & Compliance
                </h3>
                <nav className="flex flex-col gap-[14px]">
                  <Link
                    to="/terms"
                    className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/privacy"
                    className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/refund"
                    className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Return / Refund Policy
                  </Link>
                  <Link
                    to="/hipaa"
                    className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    HIPAA Compliance Notice
                  </Link>
                </nav>
              </div>

              {/* Contact Column */}
              <div className="flex flex-col gap-[22px]">
                <h3 className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-helvetica text-2xl sm:text-3xl md:text-[31px] font-bold">
                  Contact
                </h3>
                <div className="flex flex-col gap-[14px]">
                  <p className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px]">
                    Email: info@thepeptidemarket.com
                  </p>
                  <p className="text-[#9CA3AF] font-helvetica text-lg sm:text-xl md:text-[20px]">
                    Address: 5900 Balcones Drive Suite 100, Austin, TX, 78731
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
              <p className="text-[#9CA3AF] font-helvetica text-sm sm:text-base">
                © 2025 The Peptide Market™
              </p>
              <p className="text-[#9CA3AF] font-helvetica text-sm sm:text-base text-center">
                Complete Peptide Solutions for Modern Medicine.
              </p>
            </div>

            {/* Watermark handled by absolute element below */}
          </div>
        </div>
        {/* Absolute full-width watermark with 10px margins */}
        <div
          aria-hidden
          className="pointer-events-none select-none absolute left-0 right-0 bottom-[10px] z-0 overflow-hidden px-2"
        >
          <div className="w-full text-white/15 font-orpheus font-bold leading-none text-center text-[clamp(28px,10vw,240px)] uppercase tracking-tight">
            PEPTIDE MARKET
          </div>
        </div>
      </footer>
    </div>
  );
}
