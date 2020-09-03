import React, { useState, useEffect } from "react";
import Fullpage, { FullPageSections } from "@ap.cx/react-fullpage";
import Start from "./Start";
import About from "./About";
import "../stylesheets/Layout.css";
import Projects from "./projects/Projects";
import GuestBook from "./guestbook/GuestBook";

export default function Layout() {
  const [isDesktop, setDesktop] = useState(
    window.innerWidth > 900 && window.innerHeight > 500
  );

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900 && window.innerHeight > 500);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="">
      <Fullpage>
        <FullPageSections>
          <Start />
          <About />
          <Projects isDesktop={isDesktop} />
          <GuestBook isDesktop={isDesktop}/>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}
