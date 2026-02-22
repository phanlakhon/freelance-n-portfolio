"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
    TrendingUp,
    Users,
    Target,
    Rocket,
    ChevronRight,
    Share2,
    Globe,
    ArrowUpRight,
} from "lucide-react";
import { Link } from "@/i18n/routing";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// ─── Static Data ───────────────────────────────────────────────────────────────

const THESIS_WORDS = [
    "We",
    "believe",
    "the",
    "next",
    "generation",
    "of",
    "institutional",
    "capital",
    "deserves",
    "infrastructure",
    "that",
    "is",
    "as",
    "intelligent",
    "as",
    "the",
    "founders",
    "it",
    "backs.",
    "This",
    "is",
    "our",
    "mandate.",
];

// Two full sets live in the DOM for the seamless CSS marquee loop
const LP_NAMES = [
    "Sequoia Ventures",
    "Andreessen Horowitz",
    "Tiger Global",
    "Lightspeed Capital",
    "General Catalyst",
    "Accel Partners",
    "Founders Fund",
    "Benchmark Capital",
    "Kleiner Perkins",
    "Index Ventures",
];

const WHY_NOW_REASONS = [
    {
        number: "01",
        title: "Market Inflection Point",
        desc: "Global VC deployment hit $445B last year. AI-native infrastructure remains fundamentally underbuilt for the scale of capital seeking deployment.",
    },
    {
        number: "02",
        title: "Regulatory Tailwinds",
        desc: "Modernization of private placement rules opens the LP market to 40M+ accredited investors. First-mover platforms capture disproportionate share.",
    },
    {
        number: "03",
        title: "Data Moat Accumulating Now",
        desc: "Every day of delay compounds. Our proprietary LP behavior dataset grows 12% MoM. Replication cost rises exponentially with each passing quarter.",
    },
    {
        number: "04",
        title: "Team & Technology Aligned",
        desc: "Founding team with combined exits of $2.1B. Core architecture complete. This round funds go-to-market execution, not R&D.",
    },
];

const QUOTE_LINES = [
    "\u201cInnovation without architecture is just noise.",
    "Our mission is to build the digital infrastructure",
    "that empowers institutional capital to flow more",
    "efficiently towards visionary founders.\u201d",
];

// ─── MetricCard ────────────────────────────────────────────────────────────────

interface MetricProps {
    value: string;
    label: string;
    icon: React.ElementType;
}

const MetricCard = ({ value, label, icon: Icon }: MetricProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const countRef = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            const el = countRef.current;
            const card = cardRef.current;
            if (!el || !card) return;

            const numericVal = parseFloat(value.replace(/[^0-9.]/g, ""));
            const suffix = value.replace(/[0-9.]/g, "");
            const proxy = { val: 0 };

            gsap.to(proxy, {
                val: numericVal,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: { trigger: card, start: "top 80%", once: true },
                onUpdate() {
                    if (countRef.current) {
                        countRef.current.textContent =
                            Math.floor(proxy.val) + suffix;
                    }
                },
                onComplete() {
                    if (countRef.current) {
                        countRef.current.textContent = value;
                    }
                },
            });
        },
        { scope: cardRef, dependencies: [value] },
    );

    return (
        <div
            ref={cardRef}
            className="metric-card p-10 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 flex flex-col items-center text-center group hover:border-accent transition-all duration-700 hover:-translate-y-2"
        >
            <div className="mb-8 p-5 bg-neutral-800/50 rounded-2xl group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                <Icon size={36} strokeWidth={1} />
            </div>
            <span
                ref={countRef}
                className="text-5xl md:text-6xl font-display font-bold text-white mb-3 tracking-tighter"
            >
                {value}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 group-hover:text-neutral-300 transition-colors">
                {label}
            </span>
        </div>
    );
};

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function InvestorPageClient() {
    const mainRef = useRef<HTMLDivElement>(null);
    const timelineSectionRef = useRef<HTMLElement>(null);
    const timelineStripRef = useRef<HTMLDivElement>(null);
    const whyNowSectionRef = useRef<HTMLElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);
    const metricsSectionRef = useRef<HTMLElement>(null);

    // ── Cursor spotlight ──────────────────────────────────────────────────────
    // Managed outside useGSAP: it's a DOM event, not a GSAP tween.
    // Cleanup is handled by the useEffect return — no ScrollTrigger involvement.
    const handleMouseMove = useCallback((e: MouseEvent) => {
        const el = spotlightRef.current;
        if (!el) return;
        // gsap.set batches with RAF — avoids forced layout on every mousemove
        gsap.set(el, { x: e.clientX - 200, y: e.clientY - 200 });
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove, {
            passive: true,
        });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    useEffect(() => {
        // Only force scroll-to-top on hard reload, NOT on client-side route transitions
        const navEntry = performance.getEntriesByType("navigation")[0] as
            | PerformanceNavigationTiming
            | undefined;

        const isReload =
            navEntry?.type === "reload" ||
            // Fallback for older browsers
            (typeof performance !== "undefined" &&
                // @ts-ignore legacy API
                performance.navigation?.type === 1);

        if (!isReload) return;

        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Wait one frame to avoid fighting with ScrollTrigger pin calculations
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        });
    }, []);

    // ── All GSAP animations ───────────────────────────────────────────────────
    useGSAP(
        () => {
            const root = mainRef.current;
            if (!root) return;
            const q = gsap.utils.selector(root);

            // ── Hero stagger ────────────────────────────────────────────────────
            const heroEls = q(".hero-content > *");

            if (heroEls.length > 0) {
                gsap.fromTo(
                    heroEls,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        stagger: 0.15,
                        ease: "expo.out",
                        clearProps: "all",
                    },
                );
            }

            // ── Thesis word reveal ──────────────────────────────────────────────
            // Per-word ScrollTrigger — scrubs blur + opacity as each word
            // crosses the 72%→40% viewport band. No SplitText plugin needed.
            q(".thesis-word").forEach((word: Element) => {
                gsap.fromTo(
                    word,
                    { opacity: 0.1, filter: "blur(5px)" },
                    {
                        opacity: 1,
                        filter: "blur(0px)",
                        ease: "none",
                        scrollTrigger: {
                            trigger: word,
                            start: "top 72%",
                            end: "top 38%",
                            scrub: true,
                        },
                    },
                );
            });

            // ── Metrics connector line + cards ─────────────────────────────────
            // Use metricsSectionRef directly — q() is a descendant selector and
            // will NOT match the section element itself if it is a direct child
            // of mainRef. Querying from the ref avoids the scope ambiguity.
            //
            // Cards use gsap.fromTo (NOT gsap.from).
            // gsap.from applies the from-state (opacity:0) immediately on
            // registration — if the ScrollTrigger never fires (e.g. section
            // below fold at mount), the cards stay invisible permanently.
            // gsap.fromTo only applies the from-state when ST fires.
            const metricsSection = metricsSectionRef.current;
            if (metricsSection) {
                const metricsLine = metricsSection.querySelector(
                    ".metrics-connector-line",
                ) as SVGPathElement | null;
                if (metricsLine) {
                    const len = metricsLine.getTotalLength?.() ?? 1000;
                    gsap.set(metricsLine, {
                        strokeDasharray: len,
                        strokeDashoffset: len,
                    });
                    gsap.to(metricsLine, {
                        strokeDashoffset: 0,
                        duration: 1.4,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: metricsSection,
                            start: "top 70%",
                            once: true,
                        },
                    });
                }

                const metricCards = Array.from(
                    metricsSection.querySelectorAll(".metric-card"),
                );
                if (metricCards.length > 0) {
                    gsap.fromTo(
                        metricCards,
                        { y: 40, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.9,
                            stagger: 0.15,
                            ease: "expo.out",
                            delay: 0.35,
                            scrollTrigger: {
                                trigger: metricsSection,
                                start: "top 70%",
                                once: true,
                            },
                        },
                    );
                }
            }

            // ── Horizontal timeline ─────────────────────────────────────────────
            // ── Horizontal timeline ─────────────────────────────────────────────
            const section = timelineSectionRef.current;
            const strip = timelineStripRef.current;

            ScrollTrigger.matchMedia({
                "(min-width: 768px)": () => {
                    if (!section || !strip) return;

                    const dist = () => strip.scrollWidth - section.offsetWidth;

                    gsap.to(strip, {
                        x: () => -dist(),
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            pin: true,
                            scrub: 2.2,
                            end: () => `+=${dist() * 2.2}`,
                            invalidateOnRefresh: true,
                            anticipatePin: 1,
                        },
                    });
                },
            });

            // ── Why Now — pinned scroll story ───────────────────────────────────
            // Section is pinned. A GSAP timeline scrubs through 4 reasons.
            // Each reason: animates in (opacity 0→1, y 60→0), then dims to 0.35
            // as the next one arrives — keeps reading focus on the active item.
            // ── Why Now — pinned scroll story ───────────────────────────────────
            const whySection = whyNowSectionRef.current;

            if (whySection) {
                const reasons =
                    whySection.querySelectorAll<HTMLElement>(".why-reason");

                gsap.set(reasons, { opacity: 0, y: 60 });

                ScrollTrigger.matchMedia({
                    "(min-width: 768px)": () => {
                        const tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: whySection,
                                pin: true,
                                scrub: 2,
                                end: () => `+=${reasons.length * 900}`,
                                invalidateOnRefresh: true,
                                anticipatePin: 1,
                            },
                        });

                        reasons.forEach((reason, i) => {
                            tl.to(
                                reason,
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.4,
                                    ease: "power2.out",
                                },
                                i * 0.8,
                            );

                            if (i < reasons.length - 1) {
                                tl.to(
                                    reason,
                                    { opacity: 0.3, duration: 0.3 },
                                    i * 0.8 + 0.5,
                                );
                            }
                        });
                    },
                });

                // Mobile fallback
                if (window.innerWidth < 768) {
                    gsap.to(reasons, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: whySection,
                            start: "top 80%",
                        },
                    });
                }
            }

            // ── Strategy quote reveal (clip-path) ───────────────────────────────
            // Each line div has overflow:hidden + clip-path inset(0 100% 0 0).
            // Animating to inset(0 0% 0 0) reveals left→right. Staggered by delay.
            q(".quote-line").forEach((line: Element, i: number) => {
                gsap.fromTo(
                    line,
                    { clipPath: "inset(0 100% 0 0)" },
                    {
                        clipPath: "inset(0 0% 0 0)",
                        duration: 1.1,
                        ease: "expo.out",
                        delay: i * 0.13,
                        scrollTrigger: {
                            trigger: line,
                            start: "top 80%",
                            once: true,
                        },
                    },
                );
            });

            // ── Parallax background ─────────────────────────────────────────────
            const parallaxBg = q(".parallax-bg")[0];
            const parallaxSection = q(".parallax-section")[0];
            if (parallaxBg && parallaxSection) {
                gsap.to(parallaxBg, {
                    yPercent: 40,
                    ease: "none",
                    scrollTrigger: { trigger: parallaxSection, scrub: true },
                });
            }

            // ── Nav scrolled class ──────────────────────────────────────────────
            const nav =
                root.ownerDocument.querySelector<HTMLElement>(".custom-nav");
            if (nav) {
                ScrollTrigger.create({
                    start: "top -80",
                    end: 99999,
                    toggleClass: { className: "nav-scrolled", targets: nav },
                });
            }
        },
        { scope: mainRef, dependencies: [] },
    );

    const roadmap = [
        {
            date: "Phase 01",
            title: "Market Research",
            desc: "Analyzing deep-tech trends & VC sentiment in the emerging AI landscape.",
            icon: Target,
        },
        {
            date: "Phase 02",
            title: "Core Platform Architecture",
            desc: "Building a scalable data engine capable of processing millions of data points.",
            icon: TrendingUp,
        },
        {
            date: "Phase 03",
            title: "Strategic Institutional Partnerships",
            desc: "Onboarding top-tier funds to validate the platform's vision.",
            icon: Users,
        },
        {
            date: "Phase 04",
            title: "Global Expansion Strategy",
            desc: "Expanding operations to key financial hubs: Singapore, London, and New York.",
            icon: Rocket,
        },
    ];

    return (
        <div
            ref={mainRef}
            className="bg-[#050505] text-white min-h-screen selection:bg-accent selection:text-white font-sans"
        >
            {/* ─── Cursor Spotlight ─────────────────────────────────────────────
                Fixed, pointer-events:none — never blocks clicks.
                Positioned via gsap.set on mousemove (RAF-batched).           */}
            <div
                ref={spotlightRef}
                aria-hidden="true"
                className="fixed z-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(202,157,72,0.08) 0%, transparent 70%)",
                    willChange: "transform",
                    top: 0,
                    left: 0,
                }}
            />

            {/* ─── Navigation ──────────────────────────────────────────────────── */}
            <nav className="custom-nav fixed top-0 left-0 w-full z-[100] px-10 py-8 transition-all duration-500">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                            V
                        </div>
                        <span className="text-sm font-bold uppercase tracking-[0.4em] group-hover:text-accent transition-colors">
                            INVESTOR.RELATIONS
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-12">
                        {["Mission", "Metrics", "Timeline", "Strategy"].map(
                            (item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors"
                                >
                                    {item}
                                </Link>
                            ),
                        )}
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                            <Share2 size={18} strokeWidth={1.5} />
                        </button>
                        <Link
                            href="/work"
                            className="px-6 py-3 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
                        >
                            Exit to Portfolio
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ─── Hero ────────────────────────────────────────────────────────── */}
            <section
                id="mission"
                className="relative h-screen flex items-center justify-center overflow-hidden border-b border-neutral-900"
            >
                {/* SVG noise grain — purely CSS, no image asset */}
                <div
                    aria-hidden="true"
                    className="grain-overlay absolute inset-0 z-10 opacity-[0.04] pointer-events-none"
                />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10" />
                </div>

                <div className="section-container relative z-20 text-center hero-content">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-px w-10 bg-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent">
                            Private Placement Memo
                        </span>
                        <div className="h-px w-10 bg-accent" />
                    </div>
                    <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-bold leading-[0.85] mb-12 tracking-tighter">
                        Architecting <br />
                        <span className="text-neutral-700 italic">
                            Tomorrow's Capital.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
                        A bespoke digital narrative platform engineered to
                        translate complex market dynamics into a compelling
                        story of institutional growth and long-term vision.
                    </p>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                    <span className="text-[10px] font-bold uppercase tracking-widest rotate-90 mb-8">
                        Scroll
                    </span>
                    <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
                </div>
            </section>

            {/* ─── NEW: Thesis Statement — Cinematic Word Reveal ────────────────
                Each word is an inline-block span targeted by GSAP individually.
                ScrollTrigger scrubs opacity + blur as word crosses 72%→38% viewport.
                No SplitText plugin — works with zero extra dependencies.          */}
            <section
                id="thesis"
                className="py-48 bg-[#050505] border-b border-neutral-900"
            >
                <div className="section-container">
                    <div className="flex items-center gap-4 mb-20">
                        <div className="h-px w-10 bg-neutral-700" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-500">
                            Investment Thesis
                        </span>
                    </div>
                    <p className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.2] tracking-tight max-w-5xl">
                        {THESIS_WORDS.map((word, i) => (
                            <span
                                key={i}
                                className="thesis-word inline-block mr-[0.22em] last:mr-0"
                            >
                                {word}
                            </span>
                        ))}
                    </p>
                </div>
            </section>

            {/* ─── Metrics ─────────────────────────────────────────────────────── */}
            <section
                id="metrics"
                ref={metricsSectionRef}
                className="metrics-section py-40 bg-[#080808] border-b border-neutral-900 relative"
            >
                <div className="section-container">
                    {/* SVG line drawn by GSAP strokeDashoffset before cards animate in */}
                    <div
                        className="relative mb-0 pointer-events-none"
                        aria-hidden="true"
                    >
                        <svg
                            className="absolute top-0 left-0 w-full h-[1px]"
                            preserveAspectRatio="none"
                            viewBox="0 0 1000 1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ overflow: "visible" }}
                        >
                            <path
                                className="metrics-connector-line"
                                d="M 0 0.5 L 1000 0.5"
                                stroke="rgba(202,157,72,0.3)"
                                strokeWidth="1"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 pt-2">
                        <MetricCard
                            value="$2.5M+"
                            label="Growth Capital Secured"
                            icon={TrendingUp}
                        />
                        <MetricCard
                            value="4.5X"
                            label="Projected Valuation Jump"
                            icon={Users}
                        />
                        <MetricCard
                            value="120+"
                            label="Strategic LP Network"
                            icon={Target}
                        />
                    </div>
                </div>
            </section>

            {/* ─── NEW: LP Logos Marquee ────────────────────────────────────────
                Pure CSS infinite scroll — no GSAP, no JS, zero lifecycle risk.
                Two identical sets in DOM → translateX(-50%) loops seamlessly.
                Pauses on hover for accessibility.                              */}
            <div
                aria-label="Institutional Partners"
                className="py-10 bg-[#050505] border-b border-neutral-900 overflow-hidden"
            >
                <p className="text-center text-[9px] font-bold uppercase tracking-[0.5em] text-neutral-700 mb-8">
                    Trusted by leading institutions
                </p>
                <div className="marquee-track flex items-center gap-24 w-max">
                    {[...LP_NAMES, ...LP_NAMES].map((name, i) => (
                        <span
                            key={i}
                            className="flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-600 hover:text-neutral-300 transition-colors cursor-default whitespace-nowrap"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>

            {/* ─── Horizontal Timeline ─────────────────────────────────────────── */}
            <section
                id="timeline"
                ref={timelineSectionRef}
                className="min-h-screen md:h-screen bg-[#050505]"
            >
                <div
                    ref={timelineStripRef}
                    className="flex flex-col md:flex-row h-full md:items-center"
                    style={{ willChange: "transform" }}
                >
                    <div className="flex-shrink-0 w-full md:w-[400px] flex flex-col justify-center px-6 md:px-20 py-20 md:py-0">
                        <h2 className="text-6xl font-display font-bold mb-8">
                            The <br />
                            Roadmap.
                        </h2>
                        <p className="text-neutral-500 text-lg leading-relaxed">
                            Mapping the journey from initial thesis to global
                            market leadership. Each milestone represents a
                            strategic leap in our operational capability.
                        </p>
                    </div>

                    {roadmap.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-full md:w-[500px] px-6 md:px-20 py-16 md:py-0 border-t md:border-t-0 md:border-l border-neutral-800 relative group flex flex-col justify-center"
                        >
                            <div className="mb-12 w-16 h-16 bg-neutral-900 border border-neutral-800 rounded-3xl flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-700 group-hover:rotate-[15deg]">
                                <item.icon
                                    size={28}
                                    className="text-neutral-500 group-hover:text-white"
                                />
                            </div>
                            <span className="block text-xs font-bold text-accent mb-6 tracking-[0.4em] uppercase">
                                {item.date}
                            </span>
                            <h3 className="text-4xl font-display font-bold mb-8 text-white group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-neutral-500 text-lg leading-relaxed max-w-[320px] font-light">
                                {item.desc}
                            </p>
                            <div className="mt-12 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                Milestone Secured
                            </div>
                        </div>
                    ))}

                    <div
                        className="flex-shrink-0 w-[20vw]"
                        aria-hidden="true"
                    />
                </div>
            </section>

            {/* ─── NEW: Why Now — Pinned Scroll Story ──────────────────────────
                Section pins while user scrolls. GSAP timeline scrubs through
                4 reasons: each animates in (y:60→0, opacity:0→1), then dims
                to 0.3 as the next enters — forward-reading focus maintained.

                overflow:hidden is safe here because:
                - This section is not nested inside another pinned section
                - ScrollTrigger's pin spacer is injected as a sibling (outside)  */}
            <section
                id="why-now"
                ref={whyNowSectionRef}
                className="min-h-screen md:h-screen bg-[#080808] border-t border-neutral-900 overflow-hidden"
            >
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left — static label + heading during the pin */}
                    <div className="flex-shrink-0 w-full md:w-[42%] flex flex-col justify-center px-6 md:px-20 py-20 md:py-0 md:border-r border-neutral-900">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-8 block">
                            Investment Rationale
                        </span>
                        <h2 className="text-6xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-10">
                            Why
                            <br />
                            <span className="text-neutral-700 italic">
                                Now.
                            </span>
                        </h2>
                        <p className="text-neutral-500 text-lg leading-relaxed max-w-xs">
                            Four compounding factors converge in a window that
                            closes within 18 months.
                        </p>
                        <div className="flex gap-2 mt-16">
                            {WHY_NOW_REASONS.map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full bg-neutral-700"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right — reason list; items animated by GSAP pinned timeline */}
                    <div className="flex-1 flex flex-col justify-center px-6 md:px-16 pb-20 md:pb-0">
                        {WHY_NOW_REASONS.map((reason, i) => (
                            <div
                                key={i}
                                className="why-reason py-9 border-b border-neutral-900 last:border-0"
                                // initial state: opacity:0, y:60 — set by gsap.set before tl runs
                            >
                                <div className="flex items-start gap-8">
                                    <span className="text-[10px] font-bold text-accent tracking-[0.3em] mt-1.5 flex-shrink-0">
                                        {reason.number}
                                    </span>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-white mb-3">
                                            {reason.title}
                                        </h3>
                                        <p className="text-neutral-500 leading-relaxed max-w-lg">
                                            {reason.desc}
                                        </p>
                                    </div>
                                    <ArrowUpRight
                                        size={16}
                                        className="text-neutral-700 flex-shrink-0 mt-1.5 ml-auto"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Vision / Strategy ───────────────────────────────────────────── */}
            <section
                id="strategy"
                className="parallax-section relative py-60 overflow-hidden bg-neutral-900"
            >
                <div className="parallax-bg absolute inset-0 opacity-5 scale-125">
                    <div className="grid grid-cols-12 gap-10 h-full">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-full border-r border-white/10"
                            />
                        ))}
                    </div>
                </div>

                <div className="section-container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-12 inline-flex p-3 bg-accent/10 rounded-full">
                            <Globe size={24} className="text-accent" />
                        </div>
                        <h2 className="text-display-md md:text-display-lg font-display font-bold mb-16 leading-tight">
                            Beyond Metrics. <br />
                            Creating Value.
                        </h2>

                        {/* Quote: each line is a separate div with overflow:hidden.
                            GSAP animates clipPath inset(0 100% 0 0) → inset(0 0% 0 0)
                            revealing each line left-to-right, staggered by 130ms.    */}
                        <div className="text-2xl text-neutral-400 leading-[1.7] mb-20 font-light italic text-left max-w-3xl mx-auto">
                            {QUOTE_LINES.map((line, i) => (
                                <div
                                    key={i}
                                    className="quote-line overflow-hidden"
                                >
                                    {line}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-px bg-accent mb-8" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">
                                Chief Technical Architect
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500 mt-2">
                                V-Capital Relations Platform
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Footer ──────────────────────────────────────────────────────── */}
            <footer className="py-20 bg-[#020202] border-t border-neutral-900">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                                V
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest">
                                    Investor Platform
                                </h4>
                                <p className="text-[10px] text-neutral-600 uppercase tracking-widest mt-1">
                                    © 2024 All Rights Reserved
                                </p>
                            </div>
                        </div>

                        <div className="flex max-sm:flex-col items-center gap-12">
                            {["Compliance", "Terms", "Privacy", "Portal"].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </a>
                                ),
                            )}
                        </div>

                        <button
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            className="p-4 border border-neutral-800 rounded-full hover:border-accent hover:text-accent transition-all duration-500"
                        >
                            <Target size={20} className="-rotate-90" />
                        </button>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                /* ── Nav ──────────────────────────────────────────── */
                .nav-scrolled {
                    padding-top: 1.5rem !important;
                    padding-bottom: 1.5rem !important;
                    background: rgba(5, 5, 5, 0.85);
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                /* ── Grain texture ────────────────────────────────── 
                   Inline SVG feTurbulence as data URI — no asset needed.
                   background-position shifts each frame via CSS animation,
                   creating the film grain flicker.                       */
                .grain-overlay {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
                    background-size: 180px 180px;
                    animation: grain 0.7s steps(1) infinite;
                }

                @keyframes grain {
                    0% {
                        background-position: 0% 0%;
                    }
                    14% {
                        background-position: -12% -8%;
                    }
                    28% {
                        background-position: 18% 5%;
                    }
                    42% {
                        background-position: -5% 22%;
                    }
                    57% {
                        background-position: 24% -18%;
                    }
                    71% {
                        background-position: -20% 15%;
                    }
                    85% {
                        background-position: 10% -10%;
                    }
                    100% {
                        background-position: 0% 0%;
                    }
                }

                /* ── LP Marquee ───────────────────────────────────── 
                   translateX(-50%) = one full set of LP_NAMES width.
                   Because both halves are identical, the loop is seamless.
                   40s → reads at ~80px/s, deliberate not frantic.       */
                .marquee-track {
                    animation: marquee 40s linear infinite;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                .marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
