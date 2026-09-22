import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "brand";

/**
 * Each variant's resting look (border + fill + text) plus the sweep-fill
 * color and the text color once that sweep has filled the button.
 */
const variants: Record<Variant, { rest: string; fill: string; hoverText: string }> = {
  primary: {
    rest: "border-ink bg-ink text-white",
    fill: "bg-white",
    hoverText: "group-hover:text-ink",
  },
  secondary: {
    rest: "border-ink bg-white text-ink",
    fill: "bg-ink",
    hoverText: "group-hover:text-white",
  },
  ghost: {
    rest: "border-ink/15 bg-transparent text-ink",
    fill: "bg-ink",
    hoverText: "group-hover:text-white",
  },
  onDark: {
    rest: "border-white bg-white text-ink",
    fill: "bg-brand",
    hoverText: "group-hover:text-white",
  },
  brand: {
    rest: "border-brand bg-brand text-white",
    fill: "bg-white",
    hoverText: "group-hover:text-brand",
  },
};

const baseClasses =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 px-5 py-[11px] text-sm font-semibold transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-50";

/** Sweep-fill hover: a fill layer scales in from the left, then the label's color inverts. */
function ButtonLabel({ variant, children }: { variant: Variant; children: ReactNode }) {
  const { fill, hoverText } = variants[variant];
  return (
    <>
      <span
        aria-hidden="true"
        className={clsx(
          "absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100",
          fill
        )}
      />
      <span className={clsx("relative z-10 transition-colors duration-300", hoverText)}>{children}</span>
    </>
  );
}

type LinkButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

export function LinkButton({ href, variant = "primary", className, children, ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={clsx(baseClasses, variants[variant].rest, className)} {...props}>
      <ButtonLabel variant={variant}>{children}</ButtonLabel>
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={clsx(baseClasses, variants[variant].rest, className)} {...props}>
      <ButtonLabel variant={variant}>{children}</ButtonLabel>
    </button>
  );
}
