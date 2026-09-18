import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  href?: string;
};

/**
 * Wordmark logo, served from /public/logo.png. On dark backgrounds
 * (variant="light") it's rendered inverted to white since only one
 * (dark-on-transparent) version of the artwork is available.
 */
export default function Logo({ variant = "dark", className, href = "/" }: LogoProps) {
  return (
    <Link href={href} className={clsx("inline-flex shrink-0 items-center", className)} aria-label="Talvrin home">
      <Image
        src="/logo.png"
        alt="Talvrin"
        width={856}
        height={188}
        priority
        className={clsx("h-8 w-auto sm:h-9", variant === "light" && "brightness-0 invert")}
      />
    </Link>
  );
}
