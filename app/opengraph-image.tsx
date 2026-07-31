import { ImageResponse } from "next/og";

export const alt = "MHTCET Simu — Authentic MHT CET Exam Simulator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GRID_STATES = [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f9fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 8, marginBottom: 40 }}>
          {GRID_STATES.map((state, index) => (
            <div
              key={index}
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: state ? "#f58220" : "rgba(15,23,42,0.08)",
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
            padding: "10px 28px",
            borderRadius: 999,
            background: "#eef2fc",
            color: "#6366f1",
            marginBottom: 32,
          }}
        >
          Maharashtra&#39;s #1 MHT CET Simulator
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800 }}>
          <span style={{ color: "#0f172a" }}>MHTCET</span>
          <span style={{ color: "#f58220" }}>&nbsp;Simu</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#64748b", marginTop: 24 }}>
          Practise MHT CET Like It&#39;s the Real Exam
        </div>
      </div>
    ),
    { ...size },
  );
}
