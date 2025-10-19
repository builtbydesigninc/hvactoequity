import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { EvervaultCard } from "../components/ui/evervault-card";
import { LayoutTextFlip } from "../components/ui/layout-text-flip";
import { ShimmerButton } from "../components/ui/shimmer-button";
import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from "../components/ui/glowing-stars";
import { Spotlight } from "../components/ui/spotlight-new";
import { Lens } from "../components/ui/lens";
import { FAQItem } from "../components/FAQItem";
import { BentoCard, BentoGrid } from "../components/ui/bento-grid";
import { AnimatedList } from "../components/ui/animated-list";
import { SparklesCore } from "../components/ui/sparkles";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Marquee } from "../components/ui/marquee";
import { DottedMap } from "../components/ui/dotted-map";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Target, TrendingUp, Users, Zap, DollarSign, Building2 } from "lucide-react";

export default function Index() {
  const [activeView, setActiveView] = useState<"sellers" | "buyers">("sellers");
  const [isSwitching, setIsSwitching] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay content animation until after initial loader
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleViewSwitch = (view: "sellers" | "buyers") => {
    if (view !== activeView) {
      setIsSwitching(true);
      setShowContent(false);
      setTimeout(() => {
        setActiveView(view);
        setTimeout(() => {
          setIsSwitching(false);
          setTimeout(() => {
            setShowContent(true);
          }, 100);
        }, 100);
      }, 2000);
    }
  };

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
      text: "400+ Businesses Successfully Scaled",
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
      text: "$2B+ in Successful Exits",
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
      text: "15 Years Industry Experience",
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
      text: "Proven Operational Systems",
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
      text: "Tech-Enabled Growth Platform",
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
      text: "Complete M&A Support",
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
      text: "Industry Veterans",
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
      text: "95% Staff Retention Rate",
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
      text: "24-Month Exit Strategy",
    },
  ];

  // Removed unused categoryCards - was showing peptide products

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      {/* Switching Loader */}
      {isSwitching && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <div className="relative px-4">
            <img 
              src="/assets/logo.png" 
              alt="HVAC to Equity" 
              className="h-16 sm:h-20 md:h-24 w-auto relative z-10 max-w-[90vw]"
            />
            <div 
              className="absolute inset-0 flex items-start justify-center"
              style={{ animation: 'scan 2s infinite' }}
            >
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#326ec2] to-transparent opacity-90 blur-sm" />
              <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#4A90E2] to-transparent" />
            </div>
          </div>
        </div>
      )}

      {/* Floating Frosted Glass Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl shadow-black/50">
          <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="flex items-center">
                <img 
                  src="/assets/logo.png" 
                  alt="HVAC to Equity" 
                  className="h-8 sm:h-9 md:h-11 w-auto"
                />
              </Link>
              
              {/* Desktop View - Both Buttons */}
              <div className="hidden sm:flex gap-2 md:gap-3 items-center">
                <button 
                  onClick={() => handleViewSwitch("sellers")}
                  className={`flex gap-2 items-center px-4 py-2 rounded-full cursor-pointer transition-all ${
                    activeView === "sellers" ? "bg-white/20 hover:bg-white/25 shadow-lg shadow-white/10 border border-white/30" : "bg-white/5 hover:bg-white/10 border border-transparent"
                  }`}
                >
                  <p className="font-satoshi font-semibold text-sm md:text-base text-white whitespace-nowrap">
                    For Sellers
                  </p>
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
                <button 
                  onClick={() => handleViewSwitch("buyers")}
                  className={`flex gap-2 items-center px-4 py-2 rounded-full cursor-pointer transition-all ${
                    activeView === "buyers" ? "bg-white/20 hover:bg-white/25 shadow-lg shadow-white/10 border border-white/30" : "bg-white/5 hover:bg-white/10 border border-transparent"
                  }`}
                >
                  <p className="font-satoshi font-semibold text-sm md:text-base text-white whitespace-nowrap">
                    For Buyers
                  </p>
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
              
              {/* Mobile View - Dropdown */}
              <div className="sm:hidden relative">
                <select
                  value={activeView}
                  onChange={(e) => handleViewSwitch(e.target.value as "sellers" | "buyers")}
                  className="appearance-none bg-white/20 border border-white/30 rounded-full px-4 py-2 pr-8 text-white font-satoshi font-semibold text-sm cursor-pointer hover:bg-white/25 transition-all focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="sellers" className="bg-[#1A1A1A] text-white">For Sellers</option>
                  <option value="buyers" className="bg-[#1A1A1A] text-white">For Buyers</option>
                </select>
                <ChevronRight className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none rotate-90 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HVAC Header & Hero */}
      <AuroraBackground className="relative min-h-screen overflow-hidden">
        {/* Conditional Animation - Sparkles for Sellers */}
        {activeView === "sellers" && (
          <div className="absolute inset-0 w-full h-full z-[1]">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.3}
              maxSize={0.8}
              particleDensity={30}
              className="w-full h-full"
              particleColor="#4A90E2"
              speed={0.5}
            />
          </div>
        )}
        <div className="relative z-10 flex flex-col gap-24 lg:gap-32 items-center px-6 sm:px-8 md:px-12 lg:px-[99px] pt-32 sm:pt-36 pb-16 sm:pb-20 w-full max-w-[1440px] mx-auto">
          
          {/* Hero Content */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[36px] items-center w-full max-w-[1117px]">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-clash font-medium leading-tight text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[79.008px] text-center bg-gradient-to-r from-white via-[#4A90E2] to-white bg-clip-text text-transparent"
            >
              {activeView === "sellers" 
                ? "Scale Your HVAC Business to 8-Figures and Beyond"
                : "Acquire Profitable HVAC Businesses Ready to Scale"
              }
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="font-satoshi font-normal leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-[28px] text-center text-[#B8BCC8] max-w-[801px]"
            >
              {activeView === "sellers"
                ? "The proven playbook to transform your HVAC company into a scalable, sellable asset worth millions"
                : "Partner with proven operators to buy, build, and exit HVAC companies with 3-5x returns"
              }
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={showContent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4 items-center mt-4"
            >
              <a href="https://api.leadconnectorhq.com/widget/booking/MeVlwNXClcMGEH3GZWxY" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-[#1e3a5f] via-[#326ec2] to-[#1e3a5f] flex items-center px-8 py-4 rounded-full cursor-pointer hover:from-[#326ec2] hover:via-[#4A90E2] hover:to-[#326ec2] transition-all shadow-2xl shadow-[#326ec2]/40 transform hover:scale-105 border border-[#326ec2]/30">
                  <p className="font-satoshi font-bold text-lg sm:text-xl text-white">
                    {activeView === "sellers" ? "GET YOUR GROWTH ROADMAP" : "VIEW AVAILABLE OPPORTUNITIES"}
                  </p>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>

      {/* Gradient Transition */}
      <div className="h-32 bg-gradient-to-b from-black via-[#0B0B0B] to-[#0B0B0B]"></div>

      {/* What Sets Us Apart Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#9CA3AF] via-[#4A90E2] to-[#9CA3AF] bg-clip-text text-transparent font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14"
          >
            What Sets Us Apart
          </motion.h2>

          <div className="relative flex h-[500px] w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-[#0F0F10] to-[#151515] border border-[#222222] p-6">
            <AnimatedList delay={1500}>
              {Array.from({ length: 20 }, () => [
                {
                  name: "Industry Insiders",
                  description: "Our team has operated, scaled, and sold HVAC companies. We've been in your shoes.",
                  icon: <Users className="w-5 h-5" />,
                },
                {
                  name: "Tech-Enabled Growth",
                  description: "Proprietary software stack for dispatch, CRM, and operations that adds $2M+ in enterprise value",
                  icon: <Zap className="w-5 h-5" />,
                },
                {
                  name: "People First",
                  description: "We retain your key employees and culture. 95% staff retention rate post-acquisition",
                  icon: <Target className="w-5 h-5" />,
                },
              ]).flat().map((item, idx) => (
                <div
                  key={idx}
                  className="relative mx-auto w-full max-w-3xl cursor-pointer overflow-hidden rounded-xl p-6 border border-[#2A2A2A] bg-gradient-to-b from-[#1A1A1A] to-[#151515] transition-all duration-200 ease-in-out hover:scale-[102%] hover:border-[#333]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#326ec2]/20 to-[#4A90E2]/10 flex items-center justify-center border border-[#326ec2]/30">
                      <div className="text-[#4A90E2]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-white to-[#B8BCC8] bg-clip-text text-transparent font-satoshi">
                        {item.name}
                      </h3>
                      <p className="text-[#B8BCC8] text-base leading-relaxed font-satoshi">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedList>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0F0F10]"></div>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#9CA3AF] via-[#4A90E2] to-[#9CA3AF] bg-clip-text text-transparent font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14"
          >
            How We Work
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Large Featured Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:row-span-3 relative overflow-hidden rounded-2xl border border-[#222222] bg-gradient-to-b from-[#0F0F10] to-[#151515] p-8 sm:p-10 hover:border-[#333] transition-all text-left"
            >
              <div className="flex flex-col h-full justify-center">
                <div>
                  <h3 className="text-white font-satoshi text-2xl sm:text-3xl font-bold mb-3">
                    {activeView === "sellers" ? "Operational Excellence" : "Capital Partnership"}
                  </h3>
                  <p className="text-[#7A8196] font-satoshi text-base sm:text-lg leading-relaxed">
                    {activeView === "sellers"
                      ? "We implement proven systems that increased efficiency by 40% on average, from dispatch optimization to inventory management"
                      : "$50M+ ready to deploy with flexible deal structures from $1M-$10M per acquisition"
                    }
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-[#222222] bg-gradient-to-b from-[#0F0F10] to-[#151515] p-8 hover:border-[#333] transition-all text-left"
            >
              <div className="flex flex-col gap-3 h-full">
                <h3 className="text-white font-satoshi text-xl sm:text-2xl font-bold">
                  {activeView === "sellers" ? "Financial Engineering" : "Operational Support"}
                </h3>
                <p className="text-[#7A8196] font-satoshi text-sm sm:text-base leading-relaxed">
                  {activeView === "sellers"
                    ? "Structure your books for maximum valuation. Our CFOs prepare your business for institutional buyers"
                    : "Hands-on team of HVAC industry veterans to optimize operations post-acquisition"
                  }
                </p>
              </div>
            </motion.div>

            {/* Middle Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-[#222222] bg-gradient-to-b from-[#0F0F10] to-[#151515] p-8 hover:border-[#333] transition-all text-left"
            >
              <div className="flex flex-col gap-3 h-full">
                <h3 className="text-white font-satoshi text-xl sm:text-2xl font-bold">
                  {activeView === "sellers" ? "Exit Strategy" : "Platform Building"}
                </h3>
                <p className="text-[#7A8196] font-satoshi text-sm sm:text-base leading-relaxed">
                  {activeView === "sellers"
                    ? "Clear 24-month path to exit with milestone-based value creation and buyer introductions"
                    : "Roll-up strategy to create regional powerhouses with shared services and economies of scale"
                  }
                </p>
              </div>
            </motion.div>

          </div>
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
            className="bg-gradient-to-r from-[#9CA3AF] via-[#4A90E2] to-[#9CA3AF] bg-clip-text text-transparent font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14"
          >
            We're With You Every Step Of The Way
          </motion.h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <GlowingStarsBackgroundCard className="bg-gradient-to-b from-[#0F0F10] to-[#151515] border-[#222222] !max-w-none !max-h-none !h-auto flex flex-col p-8">
              <div className="flex items-center gap-3 mb-4 w-full">
                <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-satoshi font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-satoshi text-base sm:text-lg font-semibold break-words">
                    Strategic Assessment
                  </h3>
                </div>
              </div>
              <p className="text-[#7A8196] font-satoshi text-sm leading-relaxed">
                Deep dive into your operations, financials, and market position to identify growth opportunities.
              </p>
            </GlowingStarsBackgroundCard>

            {/* Step 2 */}
            <GlowingStarsBackgroundCard className="bg-gradient-to-b from-[#0F0F10] to-[#151515] border-[#222222] !max-w-none !max-h-none !h-auto flex flex-col p-8">
              <div className="flex items-center gap-3 mb-4 w-full">
                <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-satoshi font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-satoshi text-base sm:text-lg font-semibold break-words">
                    Implementation & Growth
                  </h3>
                </div>
              </div>
              <p className="text-[#7A8196] font-satoshi text-sm leading-relaxed">
                Deploy proven systems, optimize operations, and accelerate revenue growth with hands-on support.
              </p>
            </GlowingStarsBackgroundCard>

            {/* Step 3 */}
            <GlowingStarsBackgroundCard className="bg-gradient-to-b from-[#0F0F10] to-[#151515] border-[#222222] !max-w-none !max-h-none !h-auto flex flex-col p-8">
              <div className="flex items-center gap-3 mb-4 w-full">
                <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-satoshi font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-satoshi text-base sm:text-lg font-semibold break-words">
                    Exit Preparation
                  </h3>
                </div>
              </div>
              <p className="text-[#7A8196] font-satoshi text-sm leading-relaxed">
                Position for maximum valuation and connect with strategic buyers for optimal exit.
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
            <a href="https://api.leadconnectorhq.com/widget/booking/MeVlwNXClcMGEH3GZWxY" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-[#1e3a5f] via-[#326ec2] to-[#1e3a5f] px-12 sm:px-16 py-4 sm:py-5 rounded-full cursor-pointer hover:from-[#326ec2] hover:via-[#4A90E2] hover:to-[#326ec2] transition-all shadow-2xl shadow-[#326ec2]/40 transform hover:scale-105 border border-[#326ec2]/30">
                <span className="font-satoshi font-bold text-lg sm:text-xl text-white">Apply Now</span>
              </button>
            </a>
          </motion.div>
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
            className="bg-gradient-to-r from-[#9CA3AF] via-[#4A90E2] to-[#9CA3AF] bg-clip-text text-transparent font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14"
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
            {[
              { image: "/headshots/Ash Rahman.png", name: "Ash Rahman", title: "CEO" },
              { image: "/headshots/Muhammad Bin Sohail.png", name: "Muhammad Bin Sohail", title: "Head of Technology" },
              { image: "/headshots/Oliver Ibrahim.png", name: "Oliver Ibrahim", title: "Head of Marketing" },
              { image: "/headshots/Gaelle Semaan.png", name: "Gaelle Semaan", title: "Head of Sales" },
              { image: "/headshots/Jimmy.png", name: "Jimmy", title: "Head of Equity Partnerships" },
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
            <a href="https://api.leadconnectorhq.com/widget/booking/MeVlwNXClcMGEH3GZWxY" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-[#1e3a5f] via-[#326ec2] to-[#1e3a5f] px-12 sm:px-16 py-4 sm:py-5 rounded-full cursor-pointer hover:from-[#326ec2] hover:via-[#4A90E2] hover:to-[#326ec2] transition-all shadow-2xl shadow-[#326ec2]/40 transform hover:scale-105 border border-[#326ec2]/30">
                <span className="font-satoshi font-bold text-lg sm:text-xl text-white">Apply Now</span>
              </button>
            </a>
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
            className="bg-gradient-to-r from-[#9CA3AF] via-[#4A90E2] to-[#9CA3AF] bg-clip-text text-transparent font-clash text-3xl sm:text-4xl md:text-5xl lg:text-[52px] mb-10 sm:mb-12 md:mb-14"
          >
            Success Stories
          </motion.h2>

          <InfiniteMovingCards
            items={[
              {
                quote: "HVAC to Equity helped us implement zone-based routing that cut fuel costs by 35% and increased daily jobs by 50%",
                name: "Dave Johnson, Founder",
                title: "Johnson HVAC • From $3M to $15M in 3 years",
              },
              {
                quote: "They prepared us for acquisition and introduced us to 5 strategic buyers. The bidding war was incredible",
                name: "Sarah Chen, CEO",
                title: "Elite Mechanical • Sold for 5.2x EBITDA",
              },
              {
                quote: "Their financial restructuring alone added $2M to our valuation",
                name: "Mike Rodriguez, Owner",
                title: "AirPro Services • 140% revenue growth in 18 months",
              },
              {
                quote: "The operational systems they implemented transformed how we run our business. We're now doing twice the volume with the same team size",
                name: "Lisa Martinez, COO",
                title: "Climate Control Pro • Scaled to 8 locations",
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
            <a href="https://api.leadconnectorhq.com/widget/booking/MeVlwNXClcMGEH3GZWxY" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-[#1e3a5f] via-[#326ec2] to-[#1e3a5f] px-12 sm:px-16 py-4 sm:py-5 rounded-full cursor-pointer hover:from-[#326ec2] hover:via-[#4A90E2] hover:to-[#326ec2] transition-all shadow-2xl shadow-[#326ec2]/40 transform hover:scale-105 border border-[#326ec2]/30">
                <span className="font-satoshi font-bold text-lg sm:text-xl text-white">Apply Now</span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-[601px] mx-auto">
          <div className="flex flex-col gap-[25px]">
            <FAQItem
              variant="dark"
              question="What is HVAC to Equity?"
              answer="HVAC to Equity is a specialized growth advisory firm that helps HVAC business owners scale their operations, optimize financials, and prepare for lucrative exits. We combine operational expertise, financial engineering, and strategic planning to transform local HVAC companies into institutional-grade assets."
            />
            <FAQItem
              variant="dark"
              question="How do you help HVAC businesses scale?"
              answer="We implement proven operational systems, optimize your financials, and create a strategic growth plan tailored to your business. Our team has scaled 400+ HVAC companies using our proprietary methodology that focuses on efficiency, profitability, and enterprise value creation."
            />
            <FAQItem
              variant="dark"
              question="What kind of results can I expect?"
              answer="Our clients typically see 40% operational efficiency gains within 6 months, 2-3x revenue growth within 24 months, and valuation multiples that increase from 3-4x to 5-7x EBITDA. Results vary based on starting point and commitment level."
            />
            <FAQItem
              variant="dark"
              question="How do I get started with HVAC to Equity?"
              answer="Start with a free strategy session where we assess your business and create a custom growth roadmap. If it's a good fit, we'll partner with you to implement proven systems and scale your operations over 12-24 months."
            />
            <FAQItem
              variant="dark"
              question="What are the fees and investment required?"
              answer="We offer flexible engagement models from monthly consulting retainers starting at $5,000/month to equity partnerships for qualified businesses. Your initial strategy session is complimentary. We structure deals based on your specific needs and growth stage."
            />
            <FAQItem
              variant="dark"
              question="What makes you different from other business consultants?"
              answer="Unlike generic consultants, our team has operated, scaled, and sold HVAC companies. We don't just advise—we implement. Our proprietary software stack, hands-on approach, and proven playbook have generated over $2B in successful exits across 400+ businesses."
            />
            <FAQItem
              variant="dark"
              question="Do you work with businesses of all sizes?"
              answer="We primarily work with established HVAC companies doing $2M-$50M in annual revenue. However, we evaluate each business individually. If you're doing $1M+ and have strong growth potential, we encourage you to apply for a strategy session."
            />
            <FAQItem
              variant="dark"
              question="How long does the process take?"
              answer="Our typical engagement is 12-24 months from initial implementation to exit readiness. Quick wins happen in the first 90 days, with significant operational improvements by month 6. Exit preparation and buyer introductions typically begin around month 18."
            />
            <FAQItem
              variant="dark"
              question="Can you guarantee results?"
              answer="While we can't guarantee specific outcomes, we have a proven track record with 400+ successful engagements and $2B+ in exits. We only take on clients we believe we can help, and our results speak for themselves. If we don't think we're a fit, we'll tell you upfront."
            />
            <FAQItem
              variant="dark"
              question="Do I have to sell my business?"
              answer="No! Many of our clients work with us purely for growth and never sell. Our systems create value whether you want to scale and hold, pass to family, or eventually exit. The choice is always yours."
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
            <p className="text-[#E5E5E5] font-satoshi text-lg sm:text-xl mb-6">
              Still Have Questions? Our Team Is Here To Help.
            </p>
            <a href="https://api.leadconnectorhq.com/widget/booking/MeVlwNXClcMGEH3GZWxY" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-[#1e3a5f] via-[#326ec2] to-[#1e3a5f] px-12 sm:px-16 py-4 sm:py-5 rounded-full cursor-pointer hover:from-[#326ec2] hover:via-[#4A90E2] hover:to-[#326ec2] transition-all shadow-2xl shadow-[#326ec2]/40 transform hover:scale-105 border border-[#326ec2]/30">
                <span className="font-satoshi font-bold text-lg sm:text-xl text-white">Apply Now</span>
              </button>
            </a>
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
                <h2 className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-satoshi text-3xl sm:text-4xl md:text-5xl leading-tight">
                  Ready to Scale Your HVAC Business?
                </h2>
                <p className="text-[#7A8196] font-satoshi text-base sm:text-lg leading-relaxed">
                  Get exclusive insights, case studies, and growth strategies delivered to your inbox.
                </p>
              </div>

              {/* Right Form */}
              <div className="flex flex-col gap-[36px] max-w-[384px] w-full">
                <div className="flex flex-col gap-[30px]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-[21px] rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder:text-[#666] font-satoshi text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#4A5568]"
                  />
                  <a href="https://api.leadconnectorhq.com/widget/booking/MeVlwNXClcMGEH3GZWxY" target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="w-full bg-gradient-to-r from-[#1e3a5f] via-[#326ec2] to-[#1e3a5f] px-6 py-4 rounded-full cursor-pointer hover:from-[#326ec2] hover:via-[#4A90E2] hover:to-[#326ec2] transition-all shadow-2xl shadow-[#326ec2]/40 transform hover:scale-105 border border-[#326ec2]/30">
                      <span className="font-satoshi font-bold text-base sm:text-lg text-white">Sign up for the newsletter today</span>
                    </button>
                  </a>
                </div>
                <p className="text-[#7A8196] font-satoshi text-sm">
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
            {/* Logo at top of footer */}
            <div className="flex justify-center">
              <img 
                src="/assets/logo.png" 
                alt="HVAC to Equity" 
                className="h-16 sm:h-20 w-auto opacity-80"
              />
            </div>
            
            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-[187px]">
              {/* Navigation Column */}
              <div className="flex flex-col gap-[22px]">
                <h3 className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-satoshi text-2xl sm:text-3xl md:text-[31px] font-bold">
                  Navigation
                </h3>
                <nav className="flex flex-col gap-[14px]">
                  <a
                    href="#"
                    className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Shop / Catalog
                  </a>
                  <a
                    href="#"
                    className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </nav>
              </div>

              {/* Legal & Compliance Column */}
              <div className="flex flex-col gap-[22px]">
                <h3 className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-satoshi text-2xl sm:text-3xl md:text-[31px] font-bold">
                  Legal & Compliance
                </h3>
                <nav className="flex flex-col gap-[14px]">
                  <Link
                    to="/terms"
                    className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/privacy"
                    className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/refund"
                    className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Return / Refund Policy
                  </Link>
                  <Link
                    to="/confidentiality"
                    className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors"
                  >
                    Confidentiality Agreement
                  </Link>
                </nav>
              </div>

              {/* Contact Column */}
              <div className="flex flex-col gap-[22px]">
                <h3 className="bg-gradient-to-r from-[#9CA3AF] to-[#E5E7EB] bg-clip-text text-transparent font-satoshi text-2xl sm:text-3xl md:text-[31px] font-bold">
                  Contact
                </h3>
                <div className="flex flex-col gap-[14px]">
                  <p className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px]">
                    Email: info@hvactoequity.com
                  </p>
                  <p className="text-[#7A8196] font-satoshi text-lg sm:text-xl md:text-[20px]">
                    Address: 123 Business Center Way, Suite 500, Dallas, TX, 75201
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
              <p className="text-[#7A8196] font-satoshi text-sm sm:text-base">
                © 2025 HVAC to Equity™
              </p>
              <p className="text-[#7A8196] font-satoshi text-sm sm:text-base text-center">
                Transforming HVAC Businesses into Institutional Assets.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
