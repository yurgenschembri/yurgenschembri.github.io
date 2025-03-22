import { ReactNode } from "react";
import AppNav from "./app-nav";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout(props: Readonly<AppLayoutProps>) {
  return (
    <div className="min-h-dvh flex flex-col">
      <AppNav />
      {props.children}
    </div>
  );
}
