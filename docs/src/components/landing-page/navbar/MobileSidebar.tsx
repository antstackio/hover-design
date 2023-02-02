import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileSidebarIconStyles,
  mobileSideBarLinkStyles,
  mobileSidebarStyles
} from "./mobile-sidebar.styles.css";
import { Hamburger } from "../icons/Hamburger";
import { Flex, UnstyledButton } from "@hover-design/react";
import { navbarStyles, unstyledLinkStyles } from "./navbar.styles.css";
import HoverLogo from "@site/static/img/hover_logo_letters.svg";
import { Close } from "../icons/Close";
import { navbarLinks } from "./navbar.data";

const MobileSidebar = () => {
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  return (
    <div className={mobileSidebarIconStyles}>
      <UnstyledButton
        onClick={() => {
          setIsSideBarActive(true);
        }}
      >
        <Hamburger />
      </UnstyledButton>
      {/*Note: Issue with React types of 17 and 18 clashing, need to wait till Docsaurus is moved to 18 TODO  */}
      {/*@ts-ignore */}
      <AnimatePresence>
        {isSideBarActive && (
          <motion.div
            className={mobileSidebarStyles}
            initial={{ transform: "translate(100vw, 0px)" }}
            animate={{ transform: "translate(0px, 0px)" }}
            exit={{ transform: "translate(100vw, 0px)" }}
          >
            <Flex className={navbarStyles} flexDirection="column" gap={"90px"}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <a className={unstyledLinkStyles} href={"/"}>
                  <HoverLogo />
                </a>
                <UnstyledButton
                  onClick={() => {
                    setIsSideBarActive(false);
                  }}
                >
                  <Close />
                </UnstyledButton>
              </Flex>
              <Flex flexDirection="column" gap={"12px"}>
                {navbarLinks.map((link) => (
                  <p key={link.label} className={mobileSideBarLinkStyles}>
                    <a className={unstyledLinkStyles} href={link.href}>
                      {link.label}
                    </a>
                  </p>
                ))}
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { MobileSidebar };
