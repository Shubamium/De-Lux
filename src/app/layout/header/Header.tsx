"use client";
import React, { useEffect, useState } from "react";
import "./header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
type Props = {};

export default function Header({}: Props) {
  const path = usePathname();
  const [showNav, setShowNav] = useState(false);
  const [fsNav, setFsNav] = useState(false);
  const isPath = (check: string) => {
    if (path.includes(check)) {
      return "selected";
    } else {
      return "";
    }
  };
  const sm = useMediaQuery({
    query: "(max-width: 550px)",
  });

  useEffect(() => {
    if (path === "/") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    const scrollEv = (ev: Event) => {
      const scrollY = window.scrollY;
      // show offset for header
      if (path === "/") {
        if (scrollY > (sm ? 10 : 300)) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      } else {
        setShowNav(true);
      }
    };
    window.addEventListener("scroll", scrollEv);

    return () => {
      window.removeEventListener("scroll", scrollEv);
    };
  }, [path]);
  return (
    <>
      <img
        src="/decors/card-deck.svg"
        alt=""
        className="decor_card-deck top l"
      />
      <header id="main_header" className={showNav ? "show" : ""}>
        <h1 hidden={true}>DeLux Official Website</h1>

        <img src="./graphics/club.png" alt="" className="decor_header-clover" />
        <nav className="header-nav">
          <Link
            className={`btn btn-header-nav ${path === "/" ? "selected" : ""}`}
            href="/"
          >
            <span>Home</span>
          </Link>
          <Link
            className={`btn btn-header-nav ${isPath("/idols")}`}
            href="/idols"
          >
            <span>Idols</span>
          </Link>
          <Link
            className={`btn btn-header-nav ${isPath("/staffs")}`}
            href="/staffs"
          >
            <span>Staff</span>
          </Link>
        </nav>
        <div className="logo">
          <img
            src="./graphics/main_logo.png"
            alt="delux-main-logo"
            className="main_logo"
          />
        </div>
        <nav className="header-nav">
          <Link
            className={`btn btn-header-nav ${isPath("/discography")}`}
            href="/discography"
          >
            <span>DISCOGRAPHY</span>
          </Link>
          <Link
            className={`btn btn-header-nav ${isPath("/credits")}`}
            href="/credits"
          >
            <span>CREDITS</span>
          </Link>
          <div
            className={`btn btn-header-nav menu `}
            onClick={() => {
              setFsNav(true);
            }}
          >
            <GiHamburgerMenu />
          </div>
        </nav>

        <img
          src="./graphics/club.png"
          alt=""
          className="decor_header-clover right"
        />
      </header>
      <div
        className={`fsnavhead ${fsNav ? "show" : "hid"}`}
        onClick={() => {
          setFsNav(false);
        }}
      >
        <Link
          className={`btn btn-header-nav ${path === "/" ? "selected" : ""}`}
          href="/"
        >
          <span>Home</span>
        </Link>
        <Link
          className={`btn btn-header-nav ${isPath("/idols")}`}
          href="/idols"
        >
          <span>Idols</span>
        </Link>
        <Link
          className={`btn btn-header-nav ${isPath("/staffs")}`}
          href="/staffs"
        >
          <span>Staff</span>
        </Link>
        <Link
          className={`btn btn-header-nav ${isPath("/discography")}`}
          href="/discography"
        >
          <span>DISCOGRAPHY</span>
        </Link>
        <Link
          className={`btn btn-header-nav ${isPath("/credits")}`}
          href="/credits"
        >
          <span>CREDITS</span>
        </Link>
        <Link
          className={`btn btn-header-nav ${isPath("/credits")}`}
          href="/credits"
        >
          <span>CLOSE</span>
        </Link>
      </div>
      <img
        src="/decors/card-deck.svg"
        alt=""
        className="decor_card-deck top r"
      />
    </>
  );
}
