"use client";
import React, { useState } from "react";

type Props = {
  allSongs: any[];
  allCategories: any[];
};

export default function DSelector({ allSongs, allCategories }: Props) {
  const [activeCat, setActiveCat] = useState(0);

  return (
    <>
      <div className="category-list">
        <button
          className={`btn btn-category ${activeCat === 0 ? "selected" : ""}`}
          onClick={() => {
            setActiveCat(0);
          }}
        >
          {" "}
          ALL SONGS
        </button>
        {allCategories.map((category: any, index: number) => {
          return (
            <button
              key={index}
              className={`btn btn-category ${activeCat === index + 1 ? "selected" : ""}`}
              onClick={() => {
                setActiveCat(index + 1);
              }}
            >
              {category.category_name}
            </button>
          );
        })}
      </div>
      <div className="disco-list">
        {activeCat === 0 &&
          allSongs.map((song: any, index: number) => {
            return (
              <div className="disco-card" key={song._key}>
                <div className="yt-embed">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${song.video_id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="disco-info">
                  <h2>{song.title}</h2>
                  <p>{song.description}</p>
                </div>
              </div>
            );
          })}

        {activeCat != 0 &&
          allCategories[activeCat - 1].discography.map(
            (song: any, index: number) => {
              return (
                <div className="disco-card" key={song._key}>
                  <div className="yt-embed">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${song.video_id}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="disco-info">
                    <h2>{song.title}</h2>
                    <p>{song.description}</p>
                  </div>
                </div>
              );
            }
          )}

        {/* <div className="disco-card">
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
        </div> */}
      </div>
    </>
  );
}
