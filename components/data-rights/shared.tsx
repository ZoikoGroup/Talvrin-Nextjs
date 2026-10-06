import Image from "next/image";
import clsx from "clsx";

export const IMAGE_DIR = "/images/trust/data-rights";

/** Full-width photo banner used under several section intros on this page. */
export function Banner({
  src,
  alt,
  ratio,
  className,
}: {
  src: string;
  alt: string;
  /** Tailwind aspect class matching the Figma frame, e.g. "aspect-[1278/307]". */
  ratio: string;
  className?: string;
}) {
  return (
    <div className={clsx("relative min-h-[200px] w-full overflow-hidden rounded-2xl", ratio, className)}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1310px) 1246px, 100vw" className="object-cover" />
    </div>
  );
}
