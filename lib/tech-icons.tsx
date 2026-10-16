import type { ElementType } from "react";
import {
    SiDotnet,
    SiBlazor,
    SiPostgresql,
    SiRailway,
    SiReact,
    SiTypescript,
    SiVite,
    SiNodedotjs,
    SiWikidata,
    SiLeaflet,
    SiDocker,
    SiWorldhealthorganization,
} from "react-icons/si";

// Microsoft has no simple-icons entry (trademark policy), so its four-square mark is drawn by hand.
function MicrosoftLogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 23 23" className={className}>
            <rect x="1" y="1" width="10" height="10" fill="#F25022" />
            <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
            <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
            <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
        </svg>
    );
}

// Same paths and colors as ProviderLogo.tsx in the Wayfarer app itself (simple-icons, CC0),
// kept in sync so the badge matches what the BYOK key picker actually shows.
function AnthropicLogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className}>
            <path
                fill="#CC785C"
                d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"
            />
        </svg>
    );
}

function OpenAILogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className}>
            <path
                fill="#10A37F"
                d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
            />
        </svg>
    );
}

// Hangfire's own icon mark (the square glyph from the logo at hangfire.io/logo.svg, not their full
// wordmark). No simple-icons entry exists for it, so it's reproduced from their site directly.
function HangfireLogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 615 615" className={className}>
            <rect width="515" height="515" x="50" y="50" fill="currentColor" rx="50" ry="50" />
            <path fill="#FCFCFD" d="M386 150h40v314h-40V321H228v143h-39V151h39v135h158z" />
        </svg>
    );
}

type TechIcon = { Icon: ElementType; className?: string };

// Official brand hex verified against simple-icons/simple-icons data/simple-icons.json (source of truth,
// not general recollection — a couple of earlier guesses for Vite/Node/Wikidata/PostgreSQL were wrong).
// The badge pill background flips near-white <-> near-black between themes, so colors close in luminance
// to one of those extremes (near-black Railway, dark purple .NET/Blazor, mid purple Vite, light cyan React)
// get a theme-specific variant to stay legible; everything else has enough contrast against both.
// Semantic Kernel has no mark of its own, so it falls back to Microsoft's logo.
export const TECH_ICONS: Record<string, TechIcon[]> = {
    ".NET 10": [{ Icon: SiDotnet, className: "text-[#512BD4] dark:text-[#8b7cf6]" }],
    "Blazor Server": [{ Icon: SiBlazor, className: "text-[#512BD4] dark:text-[#8b7cf6]" }],
    PostgreSQL: [{ Icon: SiPostgresql, className: "text-[#4169E1]" }],
    "Semantic Kernel": [{ Icon: MicrosoftLogo }],
    Hangfire: [{ Icon: HangfireLogo, className: "text-[#2A4B7A] dark:text-[#5B8DC7]" }],
    Railway: [{ Icon: SiRailway, className: "text-[#0B0D0E] dark:text-white" }],
    "WHO ICD-11 API": [{ Icon: SiWorldhealthorganization, className: "text-[#0093D5]" }],
    React: [{ Icon: SiReact, className: "text-[#0891B2] dark:text-[#61DAFB]" }],
    TypeScript: [{ Icon: SiTypescript, className: "text-[#3178C6]" }],
    Vite: [{ Icon: SiVite, className: "text-[#9135FF] dark:text-[#b18aff]" }],
    "Node.js / Express": [{ Icon: SiNodedotjs, className: "text-[#5FA04E]" }],
    "Wikidata SPARQL": [{ Icon: SiWikidata, className: "text-[#006699] dark:text-[#3ba7d9]" }],
    Leaflet: [{ Icon: SiLeaflet, className: "text-[#199900]" }],
    "Claude & OpenAI APIs": [{ Icon: AnthropicLogo }, { Icon: OpenAILogo }],
    Docker: [{ Icon: SiDocker, className: "text-[#2496ED]" }],
};
