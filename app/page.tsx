
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/tech-badge";
import { Sun, Moon, Mail, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);
    const [meducateExpanded, setMeducateExpanded] = useState(false);
    const [wayfarerExpanded, setWayfarerExpanded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("darkMode");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDarkMode(saved === null || saved === "true");
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", String(darkMode));
    }, [darkMode]);

    const experience = [
        {
            years: "Mar 2025 – Present",
            role: ".NET Developer at Central Technology",
            location: "Remote · Chesterfield-based company",
            desc: [
                "Build production AI features with Microsoft Agent Framework across a range of use cases, from chat interfaces to recommendation generators.",
                "Set up AI-assisted development workflows in Codex and Claude, using optimised instruction files, execution plans and git worktrees. Running two to three workstreams in parallel at least doubles my throughput.",
                "Built an AI benchmarking suite, packaged as a Codex skill, that compares any model available in Codex on a common task, and tests instruction files per model per task to find the best model and instruction file for each job.",
                "Built SignalR wallboards and a reusable framework that gets a new branch its boards in about 20 minutes.",
                "Build features for a multi-tenant client portal in ASP.NET Core, Blazor and EF Core, where customers view their own data and submit requests.",
                "Optimised many slow reports and queries, some from minutes to seconds, using parameterised OPENQUERY, subquery filtering and EF Core refactoring."
            ]
        },
        {
            years: "Oct 2022 – Apr 2025",
            role: "Junior .NET Developer at Central Technology",
            location: "Remote · Chesterfield-based company",
            desc: [
                "Built bespoke features across internal and customer-facing CRUD applications using ASP.NET Core, C#, and EF Core.",
                "Authored bespoke reports for recurring operational issues and data forensics that turn manual investigation into repeatable tooling."
            ]
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "William Leece",
        "alternateName": "Will Leece",
        "url": "https://wjleece.dev",
        "jobTitle": "Full-Stack Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Central Technology"
        },
        "sameAs": [
            "https://www.linkedin.com/in/will-leece-485803236/",
            "https://github.com/kino1307"
        ],
        "knowsAbout": [
            "ASP.NET Core", "C#", ".NET", "Entity Framework Core",
            "Blazor", "SignalR", "SQL", "PostgreSQL",
            "Next.js", "React", "Tailwind CSS", "JavaScript", "TypeScript",
            "RESTful APIs", "Microsoft Agent Framework", "AI Integration"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "GB"
        }
    };

    return (
        <main className="min-h-[100dvh] bg-background text-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Navbar */}
            <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-card border border-border rounded-full px-6 py-2 flex items-center space-x-6 shadow-lg" aria-label="Main navigation">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex-shrink-0 cursor-pointer hover:scale-110 transition-transform"
                    aria-label="Scroll to top"
                >
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                        <rect x="8" y="9" width="16" height="4" rx="2" />
                        <rect x="9" y="15" width="16" height="4" rx="2" opacity="0.75" />
                        <rect x="10" y="21" width="16" height="4" rx="2" opacity="0.5" />
                    </svg>
                </button>

                <nav className="flex space-x-4">
                    <button
                        onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                        className="px-3 py-1 rounded-full hover:bg-accent transition cursor-pointer"
                    >
                        Experience
                    </button>

                    <button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                        className="px-3 py-1 rounded-full hover:bg-accent transition cursor-pointer"
                    >
                        Projects
                    </button>
                </nav>

                <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle dark mode"
                    className="ml-auto cursor-pointer"
                >
                    {darkMode ? <Sun className="w-5 h-5 text-[#f5a623]" /> : <Moon className="w-5 h-5 text-[#6366f1]" />}
                </Button>
            </header>

            {/* About Section */}
            <section id="about" className="flex flex-col items-center justify-start text-center px-6 space-y-6 pt-32 md:pt-40" aria-label="About Me">
                <h1 className="text-5xl md:text-7xl font-extrabold">I&apos;m Will Leece,</h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                    a full-stack .NET developer based in the UK, currently building at Central Technology.
                </p>

                <div className="flex space-x-6 mt-4">
                    <Button asChild size="sm" variant="ghost" aria-label="Email" className="cursor-pointer">
                        <a href="mailto:will@wjleece.dev" rel="noopener noreferrer me">
                            <Mail className="w-6 h-6 text-[#EA4335] transition-opacity hover:opacity-80" />
                        </a>
                    </Button>

                    <Button asChild size="sm" variant="ghost" aria-label="LinkedIn" className="cursor-pointer">
                        <a
                            href="https://www.linkedin.com/in/will-leece-485803236/"
                            target="_blank"
                            rel="noopener noreferrer me"
                        >
                            <FaLinkedin className="w-6 h-6 text-[#0A66C2] transition-opacity hover:opacity-80" />
                        </a>
                    </Button>

                    <Button asChild size="sm" variant="ghost" aria-label="GitHub" className="cursor-pointer">
                        <a
                            href="https://github.com/kino1307"
                            target="_blank"
                            rel="noopener noreferrer me"
                        >
                            <SiGithub className="w-6 h-6 text-[#8250df] transition-opacity hover:opacity-80" />
                        </a>
                    </Button>

                    <Button asChild size="sm" variant="ghost" aria-label="Resume" className="cursor-pointer">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer me"
                        >
                            <FileText className="w-6 h-6" />
                        </a>
                    </Button>
                </div>
            </section>

            <div className="my-16"></div>

            {/* About Section */}
            <section id="skills" className="scroll-mt-20 max-w-4xl mx-auto px-6 py-12" aria-label="About and Skills">
                <h2 className="text-3xl font-semibold mb-6 text-left">About</h2>
                <p className="text-muted-foreground max-w-3xl">
                    I build .NET web apps, from real-time SignalR wallboards to multi-tenant client portals, and I specialise in AI-output
                    verification: building independent QA and checks around LLM-generated content rather than
                    trusting model output directly.
                </p>
            </section>

            <div className="my-16"></div>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-20 max-w-4xl mx-auto px-6 py-12" aria-label="Experience">
                <h2 className="text-3xl font-semibold mb-10 text-left">Experience</h2>
                <ul className="space-y-8">
                    {experience.map((exp, idx) => (
                        <li key={idx} className="flex flex-col md:flex-row md:items-start md:space-x-6">
                            <span className="text-muted-foreground w-32 md:w-40 flex-shrink-0">{exp.years}</span>
                            <div>
                                <h3 className="font-semibold">{exp.role}</h3>
                                <p className="text-sm text-muted-foreground">{exp.location}</p>
                                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                                    {exp.desc.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <div className="my-16"></div>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-20 max-w-4xl mx-auto px-6 py-12 space-y-6" aria-label="Projects">
                <h2 className="text-3xl font-semibold mb-10 text-left">Projects</h2>

                <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition">
                    <a href="https://meducateapi.com" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-xl font-bold mb-2">Meducate API</h3>
                    </a>
                    <p className="text-muted-foreground mb-4">
                        A REST API that ingests medical data from MedlinePlus and PubMed, uses an LLM to classify and structure it into standardised medical categories, and serves it through a versioned interface refreshed daily. Nightly quality-control jobs check that AI-generated summaries haven&apos;t drifted from their source material and flag any that have for re-processing. Diagnosable topics are also cross-referenced against the WHO ICD-11 API and tagged with a real diagnostic code where a confident match exists.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {[".NET 10", "Blazor Server", "PostgreSQL", "Semantic Kernel", "Hangfire", "Railway", "WHO ICD-11 API"].map((tag) => (
                            <TechBadge key={tag} tag={tag} />
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                        <a href="https://meducateapi.com/docs" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
                            Try with demo key →
                        </a>
                        <a href="https://github.com/kino1307/MeducateAPI" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition flex items-center gap-1">
                            <SiGithub className="w-3.5 h-3.5 text-[#8250df] transition-opacity hover:opacity-80" /> GitHub
                        </a>
                        <span className="text-sm text-muted-foreground">Free tier: 1,000 req/day · no credit card</span>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <button
                            onClick={() => setMeducateExpanded(!meducateExpanded)}
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                            {meducateExpanded ? "Hide" : "Read"} case study
                            {meducateExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        <Link
                            href="/projects/meducate-api"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition underline"
                        >
                            Full case study page →
                        </Link>
                    </div>

                    {meducateExpanded && (
                        <div className="mt-6 space-y-6 text-muted-foreground border-t border-border pt-6">
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">The Problem</h4>
                                <p>
                                    Medical reference data from sources like MedlinePlus (U.S. National Library of Medicine,
                                    2,000+ health topics) and PubMed is unstructured and inconsistent. Each source uses
                                    different formats, update cycles, and access methods. A single condition like Type 2
                                    Diabetes might appear across multiple providers with conflicting field names, missing
                                    symptoms, or outdated treatment info. Developers building health education tools end up
                                    writing brittle scrapers and hand-rolled parsers that break every time an upstream source
                                    changes. It&apos;s a problem most teams solve independently, when a single fix at the
                                    infrastructure level would cover all of them.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">Architecture &amp; Tech Decisions</h4>
                                <p className="mb-3">
                                    Meducate follows Clean Architecture across four layers (Domain, Application,
                                    Infrastructure, and Presentation) so the data providers, LLM processor, and persistence
                                    layer can each be replaced independently. It ships as a .NET 10 monolith on Railway,
                                    which keeps operational complexity low while the product is early stage.
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <strong className="text-foreground">LLM ingestion pipeline</strong>: Hangfire runs
                                        two daily jobs. A <em>TopicDiscoveryJob</em> at 2 AM UTC fetches new topics from
                                        MedlinePlus and PubMed, then an LLM classification step (Semantic Kernel + OpenAI GPT-4)
                                        assigns each topic one of 26 standardised medical categories and
                                        a type (Disease, Drug, Procedure, Symptom, etc.). A second extraction pass pulls out
                                        structured fields: summary, symptoms, causes, treatments, and citations. Existing topics
                                        are re-processed at 3 AM UTC so the data stays current. Semantic Kernel was chosen over
                                        direct SDK calls because it handles prompt orchestration and makes it easy to swap models
                                        or add prompt filters without touching business logic. Microsoft has since superseded it with Agent Framework, which is what I use at work now.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Automated quality control</strong>: after each
                                        nightly ingest, a QC job re-fetches the canonical source content for every topic and
                                        compares the LLM-generated summary against the current upstream text. Summaries where
                                        semantic drift exceeds a configurable threshold are flagged and queued for re-processing
                                        rather than served stale. A model change, prompt update, or upstream content edit
                                        can&apos;t silently corrupt the API&apos;s data. Regressions surface before they reach consumers.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">WHO ICD-11 coding</strong>: diagnosable
                                        topics (diseases, disorders, syndromes, symptoms, and mental health conditions)
                                        are matched against the official WHO ICD-11 API and tagged with a real
                                        diagnostic code and title. The search only accepts the first codeable entity
                                        in the pre-sorted result set, deliberately conservative since a wrong code is
                                        worse than a missing one. Around 88% of eligible topics match automatically;
                                        the rest are names too colloquial or broad for WHO&apos;s exact-match search
                                        and are retried on every refresh cycle.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Blazor Server dashboard</strong>: the developer
                                        portal uses passwordless magic-link authentication (emails sent via Resend API) with
                                        cookie-based sessions. Users can create an organisation, generate up to five API keys,
                                        and monitor usage through a real-time dashboard. The front-end runs in Blazor, which
                                        keeps the entire stack in C# with shared models between the API and UI.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">PostgreSQL + EF Core</strong>: all normalised
                                        medical data, user accounts, organisations, and usage metrics live in PostgreSQL 16
                                        via Entity Framework Core (Npgsql). Hangfire also uses PostgreSQL for persistence,
                                        so background jobs survive restarts and can be retried from the built-in dashboard.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Minimal API surface</strong>: the public API
                                        exposes topic endpoints ({`/api/topics`}, {`/api/topics/search`}, {`/api/topics/{name}`})
                                        with API-key auth via {`X-Api-Key`} header and two-tier rate limiting: 60 requests/min
                                        per key plus a configurable daily cap with 80% usage alerts. Response schemas adapt to
                                        topic type: a Disease returns symptoms, causes, and treatments, while a Symptom returns
                                        related symptoms, associated conditions, and management. Topics dropped by all upstream
                                        providers are retired from the API.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">Outcome</h4>
                                <p>
                                    Meducate is live in production at meducateapi.com. It covers 2,000+ health topics from
                                    MedlinePlus and PubMed, each with structured summaries, symptoms, causes, treatments, and
                                    citations, sorted into 26 standardised medical categories and refreshed daily, with roughly 88% of
                                    diagnosable topics also carrying a verified WHO ICD-11 code. The free tier is
                                    1,000 requests/day with no credit card required; a demo key is at{" "}
                                    <a href="https://meducateapi.com/docs" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                                        meducateapi.com/docs
                                    </a>. Getting set up takes minutes: request a magic link, create an organisation, generate a key.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition">
                    <a href="https://wayfarer.wjleece.dev" target="_blank" rel="noopener noreferrer">
                        <h3 className="text-xl font-bold mb-2">Wayfarer</h3>
                    </a>
                    <p className="text-muted-foreground mb-4">
                        A natural-language query tool that plots results on a map, grounded in Wikidata rather than guessed by an LLM. An agent explores Wikidata&apos;s schema live and builds and tests a SPARQL query, then a verification gate checks the result against expected type, row count, and a second independent pass before anything reaches the map. Anything that can&apos;t be confirmed gets flagged in the UI instead of being blended in with the verified results.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {["React", "TypeScript", "Vite", "Node.js / Express", "Wikidata SPARQL", "Leaflet", "Claude & OpenAI APIs", "Docker"].map((tag) => (
                            <TechBadge key={tag} tag={tag} />
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                        <a href="https://wayfarer.wjleece.dev" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
                            Try it live →
                        </a>
                        <a href="https://github.com/kino1307/Wayfarer" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition flex items-center gap-1">
                            <SiGithub className="w-3.5 h-3.5 text-[#8250df] transition-opacity hover:opacity-80" /> GitHub
                        </a>
                        <span className="text-sm text-muted-foreground">BYOK &middot; bring your own Anthropic or OpenAI key, nothing stored server-side</span>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <button
                            onClick={() => setWayfarerExpanded(!wayfarerExpanded)}
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                            {wayfarerExpanded ? "Hide" : "Read"} case study
                            {wayfarerExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        <Link
                            href="/projects/wayfarer"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition underline"
                        >
                            Full case study page →
                        </Link>
                    </div>

                    {wayfarerExpanded && (
                        <div className="mt-6 space-y-6 text-muted-foreground border-t border-border pt-6">
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">The Problem</h4>
                                <p>
                                    I wanted a way to turn a plain-English question, something like &quot;South
                                    American capitals&quot; or &quot;Beatles birthplaces&quot;, into a map. The two
                                    obvious approaches both fall short: hand-writing SPARQL for every query shape
                                    doesn&apos;t scale, and trusting an LLM&apos;s raw output means it sounds just
                                    as confident whether or not it&apos;s actually right. Most &quot;ask an LLM to
                                    find some places&quot; demos skip that second half of the problem. They show you
                                    a pin and never tell you whether it&apos;s real.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">Architecture &amp; Tech Decisions</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <strong className="text-foreground">Schema-discovery agent</strong>: instead
                                        of a fixed library of query templates, the agent reads Wikidata&apos;s own
                                        schema at query time. It searches for the relevant properties and classes,
                                        probes how real instances are modelled, then builds and tests a SPARQL query
                                        live against Wikidata before it&apos;s ever proposed as an answer. The same
                                        code path handles &quot;South American capitals&quot; and &quot;WWI Western
                                        Front battlefields&quot; with no query-type branch.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Verification gate</strong>: before a
                                        result reaches the map it&apos;s checked along independent axes: does each
                                        row match the expected type, does the row count look sane, and does a second
                                        independent check on a sample hold up. A failed check triggers one bounded
                                        repair pass. If it still can&apos;t be trusted, the result gets downgraded and
                                        flagged rather than dropped.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Two-axis trust model</strong>: every pin
                                        carries a coordinate trust tier (verified from Wikidata&apos;s own data →
                                        geocoded → approximate) and a membership trust tier (confirmed by a real
                                        Wikidata relationship vs. the model&apos;s own unverified claim). A pin only
                                        reads as fully clean when both are the strongest tier.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Multi-provider BYOK</strong>: no
                                        server-side LLM key. Users bring their own Anthropic or OpenAI key, entered in
                                        the browser and sent per request, never logged or stored server-side. A shared
                                        provider dispatcher in the API layer meant adding OpenAI alongside the
                                        original Claude integration was a same-day change, not a rewrite.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Cost control</strong>: a cross-user result
                                        cache (24h TTL, keyed on query and model) serves repeat queries for free,
                                        since the underlying Wikidata data barely changes day to day.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">Outcome</h4>
                                <p>
                                    Live at{" "}
                                    <a href="https://wayfarer.wjleece.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                                        wayfarer.wjleece.dev
                                    </a>. The canonical test case, &quot;South American capitals&quot;, returns
                                    every capital, none spurious, each with a verified coordinate and a working
                                    source link. Harder multi-entity queries, like every member of a band&apos;s
                                    birthplace, run through the identical pipeline with no special-casing. When
                                    Wikidata has no structured answer for a subjective or very recent query, the app
                                    falls back to the model&apos;s own knowledge instead of returning nothing, but
                                    every one of those results is labelled as unverified rather than blended in with
                                    the grounded ones.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

            </section>

            {/* Footer */}
            <footer className="w-full border-t border-border text-center py-6 text-sm text-muted-foreground">
                <a href="mailto:will@wjleece.dev" className="hover:text-foreground transition">will@wjleece.dev</a>
            </footer>
        </main>
    );
}
