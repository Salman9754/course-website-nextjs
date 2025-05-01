"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">All Courses</HoveredLink>
            <HoveredLink href="/individual">AI and ML</HoveredLink>
            <HoveredLink href="/team">Mobile Dev</HoveredLink>
            <HoveredLink href="/enterprise">web Dev </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
