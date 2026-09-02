import { ImageResponse } from "next/og";

export const alt = "Chef's Table — AI dining companion case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#111a14",
          color: "#f2f0e8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 34,
            fontSize: 17,
            letterSpacing: 4,
            color: "#8c938c",
          }}
        >
          <span>PRODUCT CASE STUDY</span>
          <span>2026</span>
          <span>iOS MVP</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 5,
              color: "#c8b783",
              marginBottom: 26,
            }}
          >
            CHEF&apos;S TABLE
          </div>

          <div
            style={{
              fontSize: 78,
              lineHeight: 1.02,
              letterSpacing: -3.5,
            }}
          >
            Helping diners decide
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.15,
              letterSpacing: -3.5,
            }}
          >
            <span>what to&nbsp;</span>
            <span style={{ color: "#c8b783" }}>order.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.14)",
            fontSize: 19,
            letterSpacing: 2,
            color: "#8c938c",
          }}
        >
          <span>TRANG NGUYEN — PRODUCT MANAGER</span>
          <span>RESEARCH → DEFINE → BUILD</span>
        </div>
      </div>
    ),
    size,
  );
}
