import type { Metadata } from "next";
import Link from "next/link";
import { TechBadge } from "@/components/tech-badge";

export const metadata: Metadata = {
    title: "Meducate API — Medical Data REST API Case Study | Will Leece",
    description: "A REST API delivering structured medical data from MedlinePlus and PubMed, categorised and WHO ICD-11 coded. Built with .NET 10, Blazor Server, PostgreSQL, and Semantic Kernel.",
    alternates: {
        canonical: "https://wjleece.dev/projects/meducate-api",
    },
    openGraph: {
        title: "Meducate API — Medical Data REST API Case Study | Will Leece",
        description: "A REST API delivering structured medical data from MedlinePlus and PubMed, categorised and WHO ICD-11 coded. Built with .NET 10, Blazor Server, PostgreSQL, and Semantic Kernel.",
        url: "https://wjleece.dev/projects/meducate-api",
        type: "article",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": "Meducate API",
    "description": "A REST API delivering structured medical data ingested from MedlinePlus and PubMed, classified by LLM and WHO ICD-11 coded, served through a clean versioned interface refreshed daily.",
    "programmingLanguage": ["C#", ".NET 10"],
    "runtimePlatform": "Railway",
    "author": {
        "@type": "Person",
        "name": "Will Leece",
        "url": "https://wjleece.dev"
    },
    "url": "https://meducateapi.com",
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Will Leece", "item": "https://wjleece.dev" },
        { "@type": "ListItem", "position": 2, "name": "Meducate API", "item": "https://wjleece.dev/projects/meducate-api" },
    ],
};

export default function MeducateApiPage() {
    return (
        <main className="min-h-[100dvh] bg-background text-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div className="max-w-4xl mx-auto px-6 py-24">
                <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:text-foreground transition mb-12 inline-block"
                >
                    ← Back to portfolio
                </Link>

                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Meducate API
                </h1>
                <p className="text-lg text-muted-foreground mb-2">
                    Medical Data REST API — Case Study
                </p>
                <a
                    href="https://meducateapi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground italic hover:text-foreground transition"
                >
                    meducateapi.com (live, free API key)
                </a>

                <div className="flex flex-wrap gap-2 mt-6 mb-12">
                    {[".NET 10", "Blazor Server", "PostgreSQL", "Semantic Kernel", "Hangfire", "Railway", "WHO ICD-11 API"].map((tag) => (
                        <TechBadge key={tag} tag={tag} />
                    ))}
                </div>

                <div className="space-y-12 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">The Problem</h2>
                        <p>
                            This started as an idea about how to use AI without opening myself up to hallucination
                            risk. That eventually evolved into a generic structured data pipeline, one that
                            didn&apos;t have to be about medical data specifically, medical was just the domain I
                            picked for the challenge (and partly because there&apos;s so much unstructured data
                            floating around in it). MedlinePlus (the National Library of Medicine&apos;s consumer
                            health site, 2,000+ topics) and PubMed are a good example of the problem: each one uses
                            its own formats, its own update schedule, and its own access method. Look up something
                            as common as Type 2 Diabetes and you&apos;ll find conflicting field names, missing
                            symptoms, or treatment info that&apos;s years out of date, depending on which provider
                            you asked. Every developer building a health education tool ends up writing the same
                            brittle scraper and hand-rolled parser, and it breaks the moment an upstream source
                            changes anything. I wanted to solve that once, at the infrastructure level, rather than
                            rebuild it for every project I picked up.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Architecture &amp; Tech Decisions</h2>
                        <p className="mb-4">
                            Meducate is built with Clean Architecture across four layers: Domain, Application,
                            Infrastructure, and Presentation. That separation means I can swap out a data provider,
                            the LLM processor, or the persistence layer without the others caring. Ironically,
                            it&apos;s the one part of this project I&apos;d probably do differently now. Since
                            building this I&apos;ve moved onto a hybridised vertical-slice architecture at my
                            full-time job, and it&apos;s a drastic improvement when you&apos;re working alongside an
                            AI coding partner. Clean Architecture wasn&apos;t the wrong call at the time, it&apos;s
                            just not what I&apos;d reach for today. It still runs as a single .NET 10 monolith on
                            Railway, which keeps things simple while the product is early.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">LLM ingestion pipeline</h3>
                                <p>
                                    Two Hangfire jobs handle ingestion. A <em>TopicDiscoveryJob</em> runs at 2 AM UTC
                                    and pulls new topics from MedlinePlus and PubMed. From there, an LLM
                                    classification step (Semantic Kernel on top of OpenAI GPT-4) assigns each topic
                                    one of 26 standardised medical categories and a type: disease, drug, procedure, symptom, and so
                                    on. A second pass extracts the structured fields, summary, symptoms, causes,
                                    treatments, citations, then a quality-control step screens for hallucinations,
                                    merges synonyms, and validates everything before it is saved. Existing topics
                                    get reprocessed at 3 AM UTC so nothing goes stale. Strip away the detail and
                                    it&apos;s really just four steps: ingest, format, screen for hallucinations,
                                    serve. That&apos;s the part of this project I&apos;m most proud of, it&apos;s a
                                    generic enough pattern that it isn&apos;t really tied to medical data at all, it
                                    would work for pretty much any domain with a lot of messy source material. I
                                    went with Semantic Kernel mainly because it, and Blazor, sit inside the .NET
                                    ecosystem I already use day to day at my full-time job, rather than juggling a
                                    second stack purely for this project.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">WHO ICD-11 coding</h3>
                                <p>
                                    Diagnosable topics, diseases, disorders, syndromes, symptoms, mental health
                                    conditions, get matched against the official WHO ICD-11 API and tagged with a
                                    real diagnostic code and title. A Hangfire step authenticates against WHO&apos;s
                                    OAuth token endpoint, searches the ICD-11 MMS release, and only accepts the
                                    first codeable entity in the pre-sorted result set, deliberately conservative,
                                    since a wrong code is worse than no code at all. About 88% of eligible topics
                                    match automatically; the rest are names too colloquial or broad for WHO&apos;s
                                    exact-match search, and get retried on every refresh cycle rather than forced.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">Blazor Server dashboard</h3>
                                <p>
                                    The developer portal is Blazor Server with passwordless magic-link
                                    authentication (emails go out through the Resend API) and cookie-based sessions.
                                    From there you create an organisation, generate up to five API keys, and watch
                                    usage on a live dashboard. Keeping the front end in Blazor kept the whole stack
                                    in C#, with models shared between the API and the UI instead of duplicated in
                                    TypeScript.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">PostgreSQL + EF Core</h3>
                                <p>
                                    The normalised medical data, user accounts, organisations, and usage metrics all
                                    live in PostgreSQL 16 through Entity Framework Core and Npgsql. Hangfire also
                                    persists to PostgreSQL, so a restart does not lose a job mid-run, and anything
                                    that fails can be retried straight from Hangfire&apos;s own dashboard.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">Minimal API surface</h3>
                                <p>
                                    The public API is intentionally small: <code>/api/topics</code>,{" "}
                                    <code>/api/topics/search</code>, and <code>/api/topics/{"{name}"}</code>, all
                                    behind an API key passed as an <code>X-Api-Key</code> header. Rate limiting is
                                    two-tier, 60 requests a minute per key plus a configurable daily cap, with an
                                    alert at 80% usage. What comes back depends on the topic type: a disease returns
                                    symptoms, causes, and treatments, while a symptom returns related symptoms and
                                    associated conditions instead. If a topic disappears from every upstream source,
                                    it gets pulled from the API automatically rather than sitting around stale.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Outcome</h2>
                        <p>
                            At its core, Meducate is a hub that lets developers fetch auto-updated medical data for
                            free, pulled from multiple trusted sources and formatted into a predictable structure
                            you can query programmatically. Right now it&apos;s ingesting and classifying over 2,000
                            health topics from MedlinePlus and PubMed, each with a structured summary, symptoms,
                            causes, treatments, and citations, sorted into 26 standardised medical categories and refreshed every
                            day without me touching anything. Roughly 88% of diagnosable topics also carry a
                            verified WHO ICD-11 code. Getting access is meant to be quick: request a magic
                            link, create an organisation, generate a key, and you&apos;re querying structured
                            medical data within a few minutes. The core pipeline is done, it&apos;s really the
                            formatting and accessibility layer that&apos;s finished. What&apos;s next is webhooks,
                            more data sources, and generally better accessibility options for developers pulling
                            from it.
                        </p>
                    </section>
                </div>
            </div>

            <footer className="w-full border-t border-border text-center py-6 text-sm text-muted-foreground">
                <a href="mailto:jamesleece24@gmail.com" className="hover:text-foreground transition">jamesleece24@gmail.com</a>
            </footer>
        </main>
    );
}
