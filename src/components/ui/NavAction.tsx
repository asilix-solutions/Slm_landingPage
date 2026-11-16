import type { ReactNode } from "react";

/**
 * A header/menu action. Renders a real <a> only when a verified destination exists; otherwise a
 * plain, non-interactive <span> with the same look (no href, no pointer or hover state), so nothing
 * pretends to work. `onClick` is for the mobile menu (close on choose) and only applies to links.
 */
export function NavAction({
  href,
  className,
  onClick,
  children,
}: {
  href: string | null;
  className: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (href === null) {
    return <span className={`${className} is-static`}>{children}</span>;
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
