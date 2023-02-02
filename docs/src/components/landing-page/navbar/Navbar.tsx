import React from "react";
import {
  hideLinkOnMobileStyle,
  navbarLinkStyles,
  navbarStyles,
  unstyledLinkStyles
} from "./navbar.styles.css";
import HoverLogo from "@site/static/img/hover_logo_letters.svg";
import GithubLogo from "@site/static/logos/github.svg";
import { Flex } from "@hover-design/react";
import { navbarLinks } from "./navbar.data";
import { MobileSidebar } from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className={navbarStyles}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <a className={unstyledLinkStyles} href={"/"}>
          <HoverLogo />
        </a>
        <Flex gap={"55px"}>
          {navbarLinks.map((link) => (
            <a
              key={link.label}
              className={`${navbarLinkStyles} ${hideLinkOnMobileStyle}`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </Flex>
        <a
          className={`${unstyledLinkStyles} ${hideLinkOnMobileStyle}`}
          href={"https://github.com/antstackio/hover-design"}
          target="_blank"
        >
          <GithubLogo />
        </a>
        <MobileSidebar />
      </Flex>
    </nav>
  );
};

export { Navbar };
