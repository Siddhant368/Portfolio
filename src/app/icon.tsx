import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 8,
          border: "1px solid rgba(168, 85, 247, 0.5)",
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            background: "linear-gradient(to right, #a855f7, #3b82f6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          S
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
