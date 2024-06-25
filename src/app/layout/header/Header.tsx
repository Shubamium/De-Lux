import React from "react";
import "./header.scss";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <img
        src="/decors/card-deck.svg"
        alt=""
        className="decor_card-deck top l"
      />
      <header id="main_header">
        <h1 hidden={true}>DeLux Official Website</h1>

        <img src="./graphics/club.png" alt="" className="decor_header-clover" />
        <nav className="header-nav">
          <Link className="btn btn-header-nav selected" href="/">
            <span>Home</span>
          </Link>
          <Link className="btn btn-header-nav" href="/idols">
            <span>Idols</span>
          </Link>
          <Link className="btn btn-header-nav" href="/staffs">
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
          <Link className="btn btn-header-nav" href="/discography">
            <span>DISCOGRAPHY</span>
          </Link>
          <Link className="btn btn-header-nav" href="/credits">
            <span>CREDITS</span>
          </Link>
        </nav>

        <img
          src="./graphics/club.png"
          alt=""
          className="decor_header-clover right"
        />
      </header>
      <img
        src="/decors/card-deck.svg"
        alt=""
        className="decor_card-deck top r"
      />
    </>
  );
}
