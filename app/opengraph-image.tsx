import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Will Leece — Full-Stack Developer | ASP.NET Core & C# | UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#000",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
                    <div style={{ width: 64, height: 14, borderRadius: 7, background: "#fff" }} />
                    <div style={{ width: 64, height: 14, borderRadius: 7, background: "#fff", opacity: 0.75 }} />
                    <div style={{ width: 64, height: 14, borderRadius: 7, background: "#fff", opacity: 0.5 }} />
                </div>
                <div
                    style={{
                        fontSize: "18px",
                        color: "#a1a1aa",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: "24px",
                        fontWeight: 600,
                    }}
                >
                    wjleece.dev
                </div>
                <div
                    style={{
                        fontSize: "64px",
                        fontWeight: 800,
                        color: "#fafafa",
                        lineHeight: 1.1,
                        marginBottom: "24px",
                    }}
                >
                    Will Leece
                </div>
                <div
                    style={{
                        fontSize: "28px",
                        color: "#a1a1aa",
                        marginBottom: "48px",
                        fontWeight: 400,
                    }}
                >
                    Full-Stack .NET Developer · UK
                </div>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {["ASP.NET Core", "C#", "Blazor", "SignalR", "Agent Framework"].map((skill) => (
                        <div
                            key={skill}
                            style={{
                                background: "#18181b",
                                border: "1px solid #27272a",
                                color: "#d4d4d8",
                                borderRadius: "9999px",
                                padding: "8px 20px",
                                fontSize: "18px",
                                fontWeight: 500,
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
