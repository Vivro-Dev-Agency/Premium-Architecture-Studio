import { brandColors } from "@/lib/brand/colors";
import { siteConfig } from "@/lib/seo";

type OgImageProps = {
  title?: string;
  description?: string;
  label?: string;
};

export function OgImageContent({
  title = siteConfig.name,
  description = siteConfig.tagline,
  label = "Agadir, Morocco",
}: Readonly<OgImageProps>) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: brandColors.ivory,
        padding: "72px 80px",
        fontFamily: "Cormorant",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "1px",
            backgroundColor: brandColors.bronze,
          }}
        />
        <span
          style={{
            fontSize: "14px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: brandColors.muted,
            fontFamily: "Inter",
          }}
        >
          {label}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: title.length > 30 ? "64px" : "80px",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: brandColors.charcoal,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: 300,
            lineHeight: 1.4,
            color: brandColors.muted,
            fontFamily: "Inter",
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${brandColors.border}`,
              backgroundColor: brandColors.ivory,
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: 300,
                letterSpacing: "0.12em",
                color: brandColors.bronze,
              }}
            >
              AM
            </span>
          </div>
          <span
            style={{
              fontSize: "13px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: brandColors.muted,
              fontFamily: "Inter",
            }}
          >
            {siteConfig.name}
          </span>
        </div>
        <div
          style={{
            width: "120px",
            height: "1px",
            backgroundColor: brandColors.bronze,
          }}
        />
      </div>
    </div>
  );
}

export function IconContent({ size }: Readonly<{ size: number }>) {
  let fontSize: number;
  if (size <= 32) {
    fontSize = 11;
  } else if (size <= 48) {
    fontSize = 16;
  } else {
    fontSize = 48;
  }

  const borderWidth = size <= 32 ? 1 : 2;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: brandColors.ivory,
        border: `${borderWidth}px solid ${brandColors.border}`,
      }}
    >
      <span
        style={{
          fontSize,
          fontWeight: 300,
          letterSpacing: "0.14em",
          color: brandColors.bronze,
          fontFamily: "Cormorant",
          marginTop: size <= 32 ? 1 : 2,
        }}
      >
        AM
      </span>
    </div>
  );
}
