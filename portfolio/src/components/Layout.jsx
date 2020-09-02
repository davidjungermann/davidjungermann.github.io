import React from "react";
import Fullpage, { FullPageSections } from "@ap.cx/react-fullpage";
import Start from "./Start";
import About from "./About";
import "../stylesheets/Layout.css";
import Projects from "./projects/Projects";
import GuestBook from "./guestbook/GuestBook";

export default function Layout() {
  return (
    <div className="">
      <Fullpage>
        <FullPageSections>
          <Start />
          <About />
          <Projects />
          <GuestBook />
        </FullPageSections>
      </Fullpage>
    </div>
  );
}
