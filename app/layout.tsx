
import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import { Analytics } from '@vercel/analytics/next';

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('darkMode');
      if (saved === null || saved === 'true') {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export const metadata: Metadata = {
    metadataBase: new URL("https://wjleece.dev"),
    title: "Will Leece | Full-Stack .NET Developer | ASP.NET Core, C# | UK",
    description: "Will Leece is a UK-based full-stack .NET developer. ASP.NET Core, C#, Blazor, SignalR, and Semantic Kernel.",
    keywords: ["William Leece", "Will Leece", "Full-Stack Developer", "Software Engineer", "Portfolio", ".NET", "C#", "ASP.NET Core", "Next.js", "Tailwind CSS", "UK Developer"],
    authors: [{ name: "William Leece", url: "https://wjleece.dev" }],
    creator: "William Leece",
    publisher: "William Leece",
    openGraph: {
        title: "Will Leece | Full-Stack .NET Developer | ASP.NET Core, C# | UK",
        description: "Will Leece is a UK-based full-stack .NET developer. ASP.NET Core, C#, Blazor, SignalR, and Semantic Kernel.",
        url: "https://wjleece.dev/",
        siteName: "wjleece.dev",
        type: "website",
        images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Will Leece | Full-Stack .NET Developer | ASP.NET Core, C# | UK",
        description: "Will Leece is a UK-based full-stack .NET developer. ASP.NET Core, C#, Blazor, SignalR, and Semantic Kernel.",
        images: ["/opengraph-image"],
    },
    alternates: {
        canonical: "https://wjleece.dev/"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
};

export const viewport: Viewport = {
    themeColor: "#000000",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased">
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
