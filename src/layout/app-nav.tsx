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
            className={clsx(
              "p-1 bg-wheat-700 group shadow-md",
              "transition-all ease-in-out duration-100",
              "hover:bg-wheat-800 focus:bg-wheat-800 data-[state=open]:bg-wheat-800",
              {
                "w-12 h-12": navMenuOpen,
                "w-10 h-10": !navMenuOpen,
              }
            )}
          >
            🍔
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-2 bg-wheat-700">
          {navMenuItems.map((item) => (
            <Fragment key={item.href}>
              {item.href && !item.items && (
                <Link href={item.href}>
                  <DropdownMenuItem
                    className={clsx(
                      "h-12 cursor-pointer",
                      "focus:bg-wheat-800"
                    )}
                  >
                    {item.label}
                    <DropdownMenuShortcut>{item.icon}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              )}
              {item.items && (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    className={clsx(
                      "h-12",
                      "focus:bg-wheat-800 data-[state=open]:bg-wheat-800"
                    )}
                  >
                    {item.label}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="ml-2 -mt-1 bg-wheat-700">
                      {item.items.map((subItem) => (
                        <Fragment key={subItem.href}>
                          <Link href={subItem.href}>
                            <DropdownMenuItem
                              className={clsx(
                                "h-12 cursor-pointer",
                                "focus:bg-wheat-800"
                              )}
                            >
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
