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
        "p-1 rounded-sm text-onyx transition-colors",
        "hover:bg-wheat-800 hover:text-onyx-400",
        "focus:bg-wheat-800 focus:text-onyx-400 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
