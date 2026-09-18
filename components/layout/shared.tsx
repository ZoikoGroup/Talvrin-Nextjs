import { ReactNode } from "react";

const variantClasses = {
  default: "text-xs font-semibold uppercase tracking-wider text-brand-light",
  disclosure: "text-[11px] leading-none font-bold uppercase tracking-[0.66px] text-[#B98132]/85",
};

/** Small uppercase eyebrow label, shared across header/footer blocks. */
export function EyebrowLabel({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: keyof typeof variantClasses;
}) {
  return <p className={variantClasses[variant]}>{children}</p>;
}
