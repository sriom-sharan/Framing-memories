import { Link } from "@heroui/link";
import {
  Navbar as MainNavbar,
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
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + 100 > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <MainNavbar
      className={`fixed ease-in-out transition-transform duration-500 bg-secondary py-2 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      // shouldHideOnScroll
      maxWidth="xl"
      position="sticky"
      height={"4rem"}
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
            <p className="font-medium text-xl font-spartan text-inherit">
              F. Memories
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex flex-row-reverse md:justify-between gap-4">
        <input
          className="bg- border hidden lg:block outline-none p-2 pl-4 font-normal"
          placeholder="Search Packages..."
          type="search"
        />
        <div className="hidden lg:flex flex-1 gap-10 justify-end ml-2">
          <NavbarItem key={"home"}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary font-normal text-lg data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"/"}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem key={"about-us"}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary font-normal text-lg data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"/about-us"}
            >
              About Us
            </Link>
          </NavbarItem>

          <NavbarItem key={"India"}>
            <div className="group relative cursor-pointer">
              <div className="flex items-center justify-between gap-2">
                <a className="menu-hover font-normal text-lg data-[active=true]:font-medium   text-black">
                  India
                </a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 font-medium"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>

              <div className="invisible absolute z-50 flex w-32 -left-8 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Sunday
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Monday
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Tuesday
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Wednesday
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  Thursday
                </a>
              </div>
            </div>
          </NavbarItem>
          <NavbarItem key={"Global"}>
            <div className="group relative cursor-pointer">
              <div className="flex items-center justify-between gap-2">
                <a className="menu-hover font-normal text-lg data-[active=true]:font-medium   text-black">
                  Global
                </a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 font-medium"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>

              <div className="invisible absolute z-50 flex w-32 -left-8 flex-col bg-primary py-1 pb-4 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-50 hover:text-black md:mx-2">
                  Sunday
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-50 hover:text-black md:mx-2">
                  Monday
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-50 hover:text-black md:mx-2">
                  Tuesday
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-50 hover:text-black md:mx-2">
                  Wednesday
                </a>

                <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-50 hover:text-black md:mx-2">
                  Thursday
                </a>
              </div>
            </div>
          </NavbarItem>

          <NavbarItem key={"contact-us"}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary font-normal  text-lg data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"/contact-us"}
            >
              Contact Us
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="border-b-2 list-none border-black p-4"
            >
              <Link color="foreground" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>

      <NavbarContent className="lg:hidden" justify="end">
        <input
          className="bg- border outline-none p-2 w-32 sm:w-36 md:w-44 font-normal"
          placeholder="Search Packages..."
          type="search"
        />

        <NavbarMenuToggle />
      </NavbarContent>
    </MainNavbar>
  );
};
