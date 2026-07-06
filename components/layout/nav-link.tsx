"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  onClick?: () => void;
};

export function isNavActive(
  pathname: string,
  href: string,
  exact = false
): boolean {
  if (exact || href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({
  href,
  children,
  className,
  activeClassName,
  exact = false,
  onClick,
}: Readonly<NavLinkProps>) {
  const pathname = usePathname();
  const active = isNavActive(pathname, href, exact);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(className, active && activeClassName)}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
