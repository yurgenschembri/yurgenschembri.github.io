"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function AppNav() {
  const navMenuItems = [
    {
      href: "/#education",
      icon: "🎓",
      label: "Education",
    },
    {
      href: "/#experience",
      icon: "💻",
      label: "Experience",
    },
    {
      href: "/#services",
      icon: "🦸‍♂️",
      label: "Services",
    },
    {
      icon: "✍️",
      label: "Blog",
      href: "/blog",
      items: [
        {
          href: "/dev",
          icon: "👨‍💻",
          label: "Office",
        },
        {
          href: "/kitchen",
          icon: "👨‍🍳",
          label: "Kitchen",
        },
      ],
    },
    {
      href: "/contact",
      icon: "☎️",
      label: "Get in touch",
    },
  ];

  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-2 left-2">
      <DropdownMenu onOpenChange={(isOpen) => setNavMenuOpen(isOpen)}>
        <DropdownMenuTrigger asChild>
          <Button
            className={clsx("transition-all duration-100", {
              "w-12 h-12": navMenuOpen,
              "w-10 h-10": !navMenuOpen,
            })}
            variant="outline"
          >
            🍔
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-2">
          {navMenuItems.map((item) => (
            <Fragment key={item.href}>
              {item.href && !item.items && (
                <Link href={item.href}>
                  <DropdownMenuItem className="cursor-pointer h-12">
                    {item.label}
                    <DropdownMenuShortcut>{item.icon}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              )}
              {item.items && (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="h-12">
                    {item.label}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="ml-2 -mt-1">
                      {item.items.map((subItem) => (
                        <Fragment key={subItem.href}>
                          <Link href={subItem.href}>
                            <DropdownMenuItem className="cursor-pointer h-12">
                              {subItem.label}
                              <DropdownMenuShortcut>
                                {subItem.icon}
                              </DropdownMenuShortcut>
                            </DropdownMenuItem>
                          </Link>
                        </Fragment>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              )}
            </Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
