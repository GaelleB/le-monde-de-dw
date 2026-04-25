import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Le Monde de DW — Storyteller Stratégique";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#33473E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Accent rouge */}
        <div
          style={{
            width: 4,
            height: 80,
            background: "#E53935",
            position: "absolute",
            left: 100,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", paddingLeft: 40 }}>
          <div
            style={{
              color: "#F1E6D0",
              fontSize: 16,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: 0.5,
              marginBottom: 24,
              fontFamily: "sans-serif",
            }}
          >
            Storyteller Stratégique
          </div>

          <div
            style={{
              color: "#F1E6D0",
              fontSize: 80,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              fontFamily: "sans-serif",
              marginBottom: 12,
            }}
          >
            Le Monde
          </div>
          <div
            style={{
              color: "#E53935",
              fontSize: 80,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              fontFamily: "sans-serif",
              marginBottom: 48,
            }}
          >
            de DW.
          </div>

          <div
            style={{
              color: "#F1E6D0",
              fontSize: 28,
              fontWeight: 300,
              opacity: 0.65,
              fontFamily: "sans-serif",
              maxWidth: 700,
            }}
          >
            Un récit cohérent, beaucoup moins de bruit.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
