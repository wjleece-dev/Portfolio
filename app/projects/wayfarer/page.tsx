import type { Metadata } from "next";
import Link from "next/link";
import { TechBadge } from "@/components/tech-badge";

export const metadata: Metadata = {
    title: "Wayfarer — Wikidata-Grounded Map Query Tool Case Study | Will Leece",
    description: "A natural-language query tool that plots results on a map, grounded in Wikidata via a live schema-discovery agent and verification gate, not guessed by an LLM. Built with React, Vite, Node.js, and Leaflet, BYOK against Claude or GPT-5.6.",
    alternates: {
        canonical: "https://wjleece.dev/projects/wayfarer",
    },
    openGraph: {
        title: "Wayfarer — Wikidata-Grounded Map Query Tool Case Study | Will Leece",
        description: "A natural-language query tool that plots results on a map, grounded in Wikidata via a live schema-discovery agent and verification gate, not guessed by an LLM. Built with React, Vite, Node.js, and Leaflet, BYOK against Claude or GPT-5.6.",
        url: "https://wjleece.dev/projects/wayfarer",
        type: "article",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": "Wayfarer",
    "description": "A natural-language query tool that plots results on a map, grounded in Wikidata rather than guessed by an LLM, via a live schema-discovery agent and an independent verification gate.",
    "programmingLanguage": ["TypeScript"],
    "runtimePlatform": "Docker",
    "author": {
        "@type": "Person",
        "name": "Will Leece",
        "url": "https://wjleece.dev"
    },
    "url": "https://wayfarer.wjleece.dev",
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Will Leece", "item": "https://wjleece.dev" },
        { "@type": "ListItem", "position": 2, "name": "Wayfarer", "item": "https://wjleece.dev/projects/wayfarer" },
    ],
};

export default function WayfarerPage() {
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
                    Wayfarer
                </h1>
                <p className="text-lg text-muted-foreground mb-2">
                    Wikidata-Grounded Map Query Tool — Case Study
                </p>
                <a
                    href="https://wayfarer.wjleece.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground italic hover:text-foreground transition"
                >
                    wayfarer.wjleece.dev — live, BYOK (bring your own Anthropic or OpenAI key)
                </a>

                <div className="flex flex-wrap gap-2 mt-6 mb-12">
                    {["React", "TypeScript", "Vite", "Node.js / Express", "Wikidata SPARQL", "Leaflet", "Claude & OpenAI APIs", "Docker"].map((tag) => (
                        <TechBadge key={tag} tag={tag} />
                    ))}
                </div>

                <div className="space-y-12 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">The Problem</h2>
                        <p>
                            I wanted a way to turn a plain-English question, something like &quot;South American
                            capitals&quot; or &quot;Beatles birthplaces&quot;, into a map. The two obvious
                            approaches both fall short: hand-writing SPARQL against Wikidata for every query shape
                            doesn&apos;t scale, and trusting an LLM&apos;s raw output means it sounds just as
                            confident whether or not it&apos;s actually right. Most &quot;ask an LLM to find some
                            places&quot; demos skip that second half of the problem. They show you a pin and never
                            tell you whether it&apos;s real.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Architecture &amp; Tech Decisions</h2>
                        <p className="mb-4">
                            Wikidata is the source of truth; the LLM is only a narrow translator and fallback. Given
                            that, a smaller/cheaper model is viable and the critical path is the quality of SPARQL
                            generation and entity disambiguation, not raw model horsepower.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">Schema-discovery agent</h3>
                                <p>
                                    Instead of a fixed library of query templates, the agent reads Wikidata&apos;s own
                                    schema at query time: it searches for the relevant properties and classes, probes
                                    how real instances are modelled, and builds and tests a SPARQL query live against
                                    Wikidata before it&apos;s ever proposed as an answer. The same code path handles
                                    &quot;South American capitals&quot; and &quot;WWI Western Front battlefields&quot;
                                    with no query-type branch. A single-point capital and a multi-point battlefield
                                    list go through identical logic.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">Verification gate</h3>
                                <p>
                                    Before a result reaches the map it&apos;s checked along independent axes: does
                                    each row match the expected type, does the row count look sane, does a second,
                                    independent check on a sample of results hold up. A failed check triggers one
                                    bounded repair pass. If the query still can&apos;t be trusted, the result is
                                    downgraded rather than dropped, so nothing vanishes silently.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">Two-axis trust model</h3>
                                <p>
                                    Every pin carries two independent trust labels: coordinate trust (verified from
                                    Wikidata&apos;s own data → geocoded → approximate) and membership trust
                                    (confirmed by a real Wikidata relationship vs. the model&apos;s own unverified
                                    claim). A pin only reads as fully clean when both are at their strongest tier;
                                    anything weaker is visibly flagged in the UI rather than blended in with verified
                                    results.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">Multi-provider BYOK</h3>
                                <p>
                                    No server-side LLM key. Users bring their own Anthropic or OpenAI key, entered in
                                    the browser and sent per request via header, never logged or stored server-side.
                                    The API layer&apos;s provider dispatch is a single function keyed off a model-id
                                    prefix, so adding OpenAI&apos;s GPT-5.6 line-up alongside the original Claude
                                    integration was a same-day change rather than a rewrite.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">Fallback, not failure</h3>
                                <p>
                                    If Wikidata has no structured answer for a query, usually a subjective or very
                                    recent topic, the app falls back to curated model knowledge instead of returning
                                    nothing. Every result from that path is honestly labelled
                                    &quot;model-suggested&quot;, never presented as grounded.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-foreground font-semibold mb-1">Cost control &amp; deployment</h3>
                                <p>
                                    A cross-user result cache (24h TTL, keyed on query and model) serves repeat
                                    queries for free, since the underlying Wikidata data barely changes day to day.
                                    The app ships as two Docker containers, an Express API and an nginx-served Vite
                                    build, behind a Caddy reverse proxy.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Outcome</h2>
                        <p>
                            Live at{" "}
                            <a href="https://wayfarer.wjleece.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                                wayfarer.wjleece.dev
                            </a>. The canonical test case, &quot;South American capitals&quot;, returns every
                            capital, none spurious, each with a verified coordinate and a working source link.
                            Harder multi-entity queries, like every member of a band&apos;s birthplace, run through
                            the identical pipeline with no special-casing. The whole thing is BYOK: no account, no
                            server-side spend, just your own Anthropic or OpenAI key entered in the browser.
                        </p>
                    </section>
                </div>
            </div>

            <footer className="w-full border-t border-border text-center py-6 text-sm text-muted-foreground">
                <a href="mailto:will@wjleece.dev" className="hover:text-foreground transition">will@wjleece.dev</a>
            </footer>
        </main>
    );
}
