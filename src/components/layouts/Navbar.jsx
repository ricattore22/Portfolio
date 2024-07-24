import Link from "next/link";
import { cn } from "@/lib/utils";

import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdOutlineClose } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";

import { ModeToggle } from "../mode-toggle";
import { buttonVariants } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Author from "../ui-custom/Author";

const listNavbar = [
  {
    name: "Home",
    url: "/",
    separator: true,
  },
  {
    name: "About",
    url: "/#about",
    separator: true,
  },
  {
    name: "Project",
    url: "/#project-work",
    separator: false,
  },
];

export default function Navbar() {
  return (
    <>
      {/* Wrapper */}
      <div className="fixed top-0 z-40 w-full flex justify-center items-center transition-all ease-in-out duration-200">
        {/* Content */}
        <header className="w-full h-[80px] px-[24px] md:px-[40px] lg:px-[80px] border-b border-primary font-itim flex justify-between items-center backdrop-filter backdrop-blur-lg bg-opacity-30 transition-all ease-in-out duration-300">
          <Author />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-[16px]">
            {/* Link Pages */}
            <NavigationMenu className="gap-[24px]">
              <NavigationMenuList className="gap-[8px]">
                {listNavbar.map((link) => {
                  return (
                    <CustomNavigationMenuLink
                      key={link.name}
                      href={link.url}
                      aria-label={link.name}
                      separator={link.separator}
                    >
                      {link.name}
                    </CustomNavigationMenuLink>
                  );
                })}
              </NavigationMenuList>
              {/* Link Icon */}
              <NavigationMenuList className="gap-[8px]">
                <CustomNavigationMenuLink
                  href="mailto:ricattore22@gmail.com"
                  aria-label="Email"
                  icon
                >
                  <MdEmail className="text-[28px]" />
                </CustomNavigationMenuLink>
                <CustomNavigationMenuLink
                  href="https://www.linkedin.com/in/richards-griffiano-9893271b8"
                  aria-label="LinkedIn"
                  target="_blank"
                  icon
                >
                  <FaLinkedinIn className="text-[24px]" />
                </CustomNavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>

            <ModeToggle />
          </div>

          {/* Mobile, menu button */}
          <div className="flex md:hidden items-center gap-[4px]">
            <ModeToggle />

            {/* Mobile Navbar with Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(buttonVariants({ variant: "ghost" }), "px-2")}
              >
                <TbMenuDeep className="text-[24px]" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="min-w-[10rem] mr-[24px] md:mr-[40px]">
                <DropdownMenuGroup>
                  {listNavbar.map((link) => {
                    return (
                      <CustomDropdownLink
                        key={link.name}
                        href={link.url}
                        aria-label={link.name}
                      >
                        {link.name}
                      </CustomDropdownLink>
                    );
                  })}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <CustomDropdownLink
                    href="mailto:ricattore22@gmail.com"
                    aria-label="Email"
                  >
                    Email
                  </CustomDropdownLink>
                  <CustomDropdownLink
                    href="https://www.linkedin.com/in/richards-griffiano-9893271b8"
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    LinkedIn
                  </CustomDropdownLink>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
    </>
  );
}

function CustomNavigationMenuLink({
  href,
  icon = false,
  separator = false,
  className,
  children,
  ...props
}) {
  return (
    <>
      <NavigationMenuItem>
        <Link
          href={href}
          className={cn(
            !icon && "hover:underline hover:underline-offset-2",
            icon && buttonVariants({ variant: "ghost" }),
            icon && "px-2",
            className
          )}
          {...props}
        >
          {children}
        </Link>
      </NavigationMenuItem>

      {separator && <NavigationMenuItem>/</NavigationMenuItem>}
    </>
  );
}

function CustomDropdownLink({ href, className, children, ...props }) {
  return (
    <>
      <DropdownMenuItem asChild>
        <Link href={href} {...props}>
          {children}
        </Link>
      </DropdownMenuItem>
    </>
  );
}

// Mobile Navbar with Drawer
{
  /* <Drawer direction="right">
  <DrawerTrigger className={cn(buttonVariants({ variant: "ghost" }), "px-2")}>
    <TbMenuDeep className="text-[24px]" />
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader className="flex justify-between items-center">
      <DrawerTitle>
        <Author />
      </DrawerTitle>
      <DrawerDescription className="text-primary">
        <DrawerClose
          className={cn(buttonVariants({ variant: "ghost" }), "px-2")}
        >
          <MdOutlineClose className="text-[32px]" />
        </DrawerClose>
      </DrawerDescription>
    </DrawerHeader>
    <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 gap-[32px]">
      {listNavbar.map((link) => {
        return (
          <CustomLink
            key={link.name}
            href={link.url}
            aria-label={link.name}
            className="w-fit p-[8px] font-medium text-[24px] sm:text-[28px] text-center hover:text-pf-yellow"
          >
            {link.name}
          </CustomLink>
        );
      })}
    </div>
    <DrawerFooter>
      <div className="flex justify-center items-center gap-[16px]">
        <CustomLink href="mailto:ricattore22@gmail.com" aria-label="Email">
          <MdEmail className="text-[36px]" />
        </CustomLink>
        <CustomLink
          href="https://www.linkedin.com/in/richards-griffiano-9893271b8"
          aria-label="LinkedIn"
          target="_blank"
        >
          <FaLinkedinIn className="text-[32px]" />
        </CustomLink>
      </div>
    </DrawerFooter>
  </DrawerContent>
</Drawer>; */
}
