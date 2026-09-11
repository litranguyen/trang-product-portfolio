import { ImageResponse } from "next/og";

export const alt = "Trang Nguyen — Product Manager";
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
          background: "#f7f3ea",
          color: "#1f1a15",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 26,
              border: "1px solid rgba(31,26,21,0.26)",
              color: "#96763f",
              fontSize: 18,
              letterSpacing: 1,
            }}
          >
            TN
          </div>

          <div
            style={{
              fontSize: 17,
              letterSpacing: 4,
              color: "#7f7669",
            }}
          >
            PRODUCT MANAGER
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: -4,
            }}
          >
            I build products that
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 92,
              lineHeight: 1.1,
              letterSpacing: -4,
            }}
          >
            <span>help people&nbsp;</span>
            <span style={{ color: "#96763f" }}>decide.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(31,26,21,0.14)",
            fontSize: 19,
            letterSpacing: 2,
            color: "#7f7669",
          }}
        >
          <span>TRANG NGUYEN</span>
          <span>CHEF&apos;S TABLE — AI DINING COMPANION</span>
        </div>
      </div>
    ),
    size,
  );
}
