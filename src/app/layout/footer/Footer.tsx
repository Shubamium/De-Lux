import React from "react";
import "./footer.scss";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <img
        src="/decors/card-deck-bottom_l.png"
        alt=""
        className="decor_deck footer l"
      />
      <footer id="main_footer">
        <div className="left-side">
          <p>De♧LUX OFFICIAL WEBSITE</p>
          <div className="socials">
            <a
              href="https://www.youtube.com/channel/UCCvsIQTHvkHaid0TJORSWuQ"
              className="btn btn-social"
            >
              <FaYoutube />
            </a>
            <a href="https://x.com/deluxidols" className="btn btn-social">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/deluxidols/"
              className="btn btn-social"
            >
              <FaInstagram />
            </a>
            <a
              href="https://bsky.app/profile/delux.bsky.social"
              className="btn btn-social"
            >
              <FaBluesky />
            </a>
          </div>
        </div>
        <div className="right-side">
          <a target="_blank" href="https://twitter.com/Shubamium2">
            Built and Designed by <b>SHUBAMIUM</b>
          </a>
        </div>
      </footer>
      <img
        src="/decors/card-deck-bottom_r.png"
        alt=""
        className="decor_deck footer r"
      />
    </>
  );
}
