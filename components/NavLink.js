"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// A plain text nav link: an underline slides in on hover and stays while you're on its page.
const NavLink = ({ href, children }) => {
  const active = usePathname() === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group relative py-1 text-base sm:text-lg font-medium transition-colors ${
        active ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
      }`}
    >
      {children}
      <span
        aria-hidden
        className={`absolute left-0 -bottom-0.5 h-0.5 w-full origin-left bg-main transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
};

export default NavLink;
