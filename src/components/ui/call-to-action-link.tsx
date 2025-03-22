import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type CallToActionLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export default function CallToActionLink({
  children,
  className,
  ...props
}: Readonly<CallToActionLinkProps>) {
  return (
    <Link
      className={clsx(
        "inline-block p-1 rounded-sm bg-onyx-300 text-onyx-800 transition-colors shadow-md",
        "hover:bg-onyx-400 hover:text-onyx-900 hover:shadow-lg",
        "focus:bg-onyx-400 focus:text-onyx-900 focus:shadow-lg focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
