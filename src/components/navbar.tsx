import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";


export const Navbar = () => {
  return (
    <HeroUINavbar
      className="bg-[#C1C6B9] py-2"
      shouldHideOnScroll
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* <Logo /> */}
            {/* <img src="logo.png" className="w-28" alt="" /> */}
            <p className="font-medium text-xl font-spartan text-inherit">F. Memories</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <div className="hidden lg:flex flex-1 gap-10 justify-end ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary font-normal text-xl data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="border-b-2 border-black p-4"
            >
              <Link color="foreground" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
    </HeroUINavbar>
  );
};
