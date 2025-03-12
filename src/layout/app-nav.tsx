import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function AppNav() {
  const navMenuItems = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <div className="fixed h-0 w-full">
      <div className="flex justify-between items-center p-6 h-16 bg-onyx shadow-md">
        <div className="flex flex-row items-center">
          <Link
            href="/"
            className={clsx(
              navigationMenuTriggerStyle(),
              "h-max rounded-full transition-colors bg-onyx hover:bg-onyx-400 gap-2"
            )}
          >
            <Image src="img/logo.png" width={40} height={40} alt={"Logo"} />
            <span className="hidden sm:inline-block text-wheat">
              @yurgenschembri
            </span>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {navMenuItems.map((navItem) => (
              <Link
                key={`${navItem.href}_${navItem.label}`}
                href={navItem.href}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navItem.label}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
