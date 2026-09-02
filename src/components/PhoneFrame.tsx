import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  /** Renders at higher priority — use only for the above-the-fold hero device. */
  priority?: boolean;
  className?: string;
  /** Responsive width hint passed to next/image. */
  sizes?: string;
};

/**
 * Shared iPhone-style frame for the Chef's Table screenshots.
 * All source screens are 1206 x 2622, so the intrinsic ratio is fixed here
 * to keep the device outline identical everywhere it appears.
 */
export default function PhoneFrame({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 700px) 60vw, 240px",
}: PhoneFrameProps) {
  return (
    <div className={`phone-frame ${className}`.trim()}>
      <div className="phone-frame-island" aria-hidden="true" />

      <Image
        src={src}
        alt={alt}
        width={1206}
        height={2622}
        sizes={sizes}
        priority={priority}
        className="phone-frame-screen"
      />
    </div>
  );
}
