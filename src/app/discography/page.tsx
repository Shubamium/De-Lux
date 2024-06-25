import React from "react";
import "./discography.scss";
type Props = {};

export default function DiscographyPage({}: Props) {
  return (
    <main id="page_discography">
      <section id="discography">
        <div className="head">
          <div className="styled-title">
            <h2>DISCOGRAPHY</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea{" "}
          </p>
        </div>

        <div className="category-list">
          <button className="btn btn-category"> ALL SONGS</button>
          <button className="btn btn-category"> CATEGORY TWO</button>
          <button className="btn btn-category"> CATEGORY Three</button>
          <button className="btn btn-category"> CATEGORY Four</button>
        </div>

        <div className="disco-list">
          <div className="disco-card">
            <div className="yt-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bxP1n05FF0E?si=jKkgKd5ff4E_89g9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="disco-info">
              <h2>Some Detail to It</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex{" "}
              </p>
            </div>
          </div>

          <div className="disco-card">
            <div className="yt-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bxP1n05FF0E?si=jKkgKd5ff4E_89g9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="disco-info">
              <h2>Some Detail to It</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex{" "}
              </p>
            </div>
          </div>

          <div className="disco-card">
            <div className="yt-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bxP1n05FF0E?si=jKkgKd5ff4E_89g9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="disco-info">
              <h2>Some Detail to It</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex{" "}
              </p>
            </div>
          </div>

          <div className="disco-card">
            <div className="yt-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bxP1n05FF0E?si=jKkgKd5ff4E_89g9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="disco-info">
              <h2>Some Detail to It</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
