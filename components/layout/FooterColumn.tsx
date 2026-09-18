import Link from "next/link";
import type { NavGroup } from "@/lib/navigation";

export default function FooterColumn({ group }: { group: NavGroup }) {
  return (
    <div>
      <h3 className="text-[13px] leading-none font-bold tracking-[0.65px] text-[#F6F5FB]/85">{group.label}</h3>
      <ul className="mt-4 space-y-2.5">
        {group.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[14px] leading-none font-normal text-[#F6F5FB]/60 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
