import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type AppLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export default function AppLink({
  children,
  className,
  ...props
}: Readonly<AppLinkProps>) {
  return (
    <Link
      className={clsx(
        "p-1 rounded-sm text-onyx-600 transition-colors",
        "hover:bg-onyx-800 hover:text-onyx",
        "focus:bg-onyx-800 focus:text-onyx focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
