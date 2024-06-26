import React from "react";
import "./credits.scss";
import { fetchData, urlFor } from "../db/db";
type Props = {};

export default async function Credits({}: Props) {
  const creditData = await fetchData<any>(`
		*[_type == "credits"]
	`);
  console.log(creditData);
  return (
    <main id="credits_page">
      <section id="credit-head">
        <div className="styled-title">
          <h2>CREDITS</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section id="credit-list">
        <div className="confine">
          {creditData.map((credit: any) => {
            return (
              <a
                href={credit.link}
                target="_blank"
                className="credit-card"
                key={credit._key}
              >
                <div className="image-part">
                  <img
                    src={urlFor(credit.image).url()}
                    alt=""
                    className="credit-img"
                  />
                  <img
                    src="/decors/mdi-crown.svg"
                    alt=""
                    className="decor_crown"
                  />
                </div>
                <div className="credit-info">
                  <h2>
                    <img src="/graphics/club.png" alt="" />
                    <span>{credit.name}</span>
                    <img src="/graphics/club.png" alt="" />
                  </h2>
                  <p>{credit.title}</p>
                </div>
              </a>
            );
          })}
          {/* <a href="#" target="_blank" className="credit-card">
            <div className="image-part">
              <img src="/" alt="" className="credit-img" />
              <img src="/decors/mdi-crown.svg" alt="" className="decor_crown" />
            </div>
            <div className="credit-info">
              <h2>
                <img src="/graphics/club.png" alt="" />
                <span>Name Here</span>
                <img src="/graphics/club.png" alt="" />
              </h2>
              <p>title or role</p>
            </div>
          </a>
          <a href="#" target="_blank" className="credit-card">
            <div className="image-part">
              <img src="/" alt="" className="credit-img" />
              <img src="/decors/mdi-crown.svg" alt="" className="decor_crown" />
            </div>
            <div className="credit-info">
              <h2>
                <img src="/graphics/club.png" alt="" />
                <span>Name Here</span>
                <img src="/graphics/club.png" alt="" />
              </h2>
              <p>title or role</p>
            </div>
          </a>
          <a href="#" target="_blank" className="credit-card">
            <div className="image-part">
              <img src="/" alt="" className="credit-img" />
              <img src="/decors/mdi-crown.svg" alt="" className="decor_crown" />
            </div>
            <div className="credit-info">
              <h2>
                <img src="/graphics/club.png" alt="" />
                <span>Name Here</span>
                <img src="/graphics/club.png" alt="" />
              </h2>
              <p>title or role</p>
            </div>
          </a>
          <a href="#" target="_blank" className="credit-card">
            <div className="image-part">
              <img src="/" alt="" className="credit-img" />
              <img src="/decors/mdi-crown.svg" alt="" className="decor_crown" />
            </div>
            <div className="credit-info">
              <h2>
                <img src="/graphics/club.png" alt="" />
                <span>Name Here</span>
                <img src="/graphics/club.png" alt="" />
              </h2>
              <p>title or role</p>
            </div>
          </a> */}
        </div>
      </section>
    </main>
  );
}
