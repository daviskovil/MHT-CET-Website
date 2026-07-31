import { ImageResponse } from "next/og";

export const alt = "MHTCET Simu — Authentic MHT CET Exam Simulator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (app/globals.css)
const INK = "#0f172a";
const MUTED = "#64748b";
const PRIMARY = "#f58220";
const PRIMARY_DARK = "#d96d0e";
const TEAL = "#40e0d0";
const TEAL_DARK = "#26867c";
const CREAM = "#fff8e7";
const WHITE = "#ffffff";

type CellState = "answered" | "marked" | "unvisited";
const MARKED = new Set([5, 13, 22]);
const UNVISITED = new Set([26, 27, 28, 29, 30, 31]);
const CELL_COUNT = 32;

function stateFor(index: number): CellState {
  if (MARKED.has(index)) return "marked";
  if (UNVISITED.has(index)) return "unvisited";
  return "answered";
}

export default async function Image() {
  const cellSize = 42;
  const cellGap = 6;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fdf1e7 0%, #f8f9fa 55%, #e3faf6 100%)",
          fontFamily: "sans-serif",
          padding: "0 70px",
        }}
      >
        {/* Left: copy */}
        <div style={{ display: "flex", flexDirection: "column", width: 600 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              alignSelf: "flex-start",
              background: WHITE,
              color: TEAL_DARK,
              fontSize: 18,
              fontWeight: 700,
              padding: "10px 20px",
              borderRadius: 999,
            }}
          >
            <div style={{ display: "flex", width: 7, height: 7, borderRadius: 999, background: TEAL_DARK }} />
            Maharashtra&#39;s #1 MHT CET Simulator
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 28,
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: -1,
            }}
          >
            <span style={{ color: INK }}>Practise MHT CET Like</span>
            <span style={{ color: INK }}>
              It&#39;s <span style={{ color: TEAL_DARK }}>the Real Exam</span>
            </span>
          </div>

          <div style={{ display: "flex", marginTop: 24, fontSize: 24, color: MUTED, maxWidth: 520 }}>
            16,000+ past year questions. Authentic exam interface. Know exactly what to study next.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 44 }}>
            <div
              style={{
                display: "flex",
                width: 40,
                height: 40,
                borderRadius: 11,
                background: PRIMARY,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", width: 18, height: 18, borderRadius: 999, background: INK }} />
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 800 }}>
              <span style={{ color: INK }}>MHTCET</span>
              <span style={{ color: PRIMARY }}>&nbsp;Simu</span>
            </div>
          </div>
        </div>

        {/* Right: Question Palette card */}
        <div style={{ display: "flex", position: "relative", width: 430 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 430,
              background: WHITE,
              borderRadius: 28,
              padding: 28,
              boxShadow: "0 24px 50px rgba(15,23,42,0.16)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", fontSize: 20, fontWeight: 700, color: INK }}>Question Palette</div>
              <div
                style={{
                  display: "flex",
                  background: CREAM,
                  color: PRIMARY_DARK,
                  fontSize: 16,
                  fontWeight: 700,
                  padding: "6px 14px",
                  borderRadius: 999,
                }}
              >
                26 / 32
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: cellGap, marginTop: 20 }}>
              {Array.from({ length: CELL_COUNT }, (_, index) => {
                const state = stateFor(index);
                const bg = state === "answered" ? PRIMARY : state === "marked" ? "rgba(64,224,208,0.22)" : "rgba(15,23,42,0.06)";
                const color = state === "answered" ? WHITE : state === "marked" ? TEAL_DARK : MUTED;
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: cellSize,
                      height: cellSize,
                      borderRadius: 8,
                      background: bg,
                      color,
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: 18, marginTop: 22, fontSize: 14, color: MUTED }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ display: "flex", width: 9, height: 9, borderRadius: 999, background: PRIMARY }} />
                Answered
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ display: "flex", width: 9, height: 9, borderRadius: 999, background: TEAL_DARK }} />
                Marked
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ display: "flex", width: 9, height: 9, borderRadius: 999, background: "rgba(15,23,42,0.15)" }} />
                Not visited
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              position: "absolute",
              top: -18,
              right: -22,
              background: WHITE,
              padding: "10px 16px",
              borderRadius: 999,
              boxShadow: "0 10px 26px rgba(15,23,42,0.14)",
              fontSize: 16,
              fontWeight: 700,
              color: INK,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 26,
                height: 26,
                borderRadius: 999,
                background: "rgba(64,224,208,0.18)",
                color: TEAL_DARK,
                fontSize: 13,
              }}
            >
              &#9203;
            </div>
            45:00
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
