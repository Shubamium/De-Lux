import React from "react";
import "./credits.scss";
import { fetchData, urlFor } from "../db/db";
type Props = {};

export default async function Credits({}: Props) {
  const creditData = await fetchData<any>(`
		*[_type == "credits"]
	`);
  const description = await fetchData<any>(`
		*[_type == "general" && preset == "main"][0]{
			'desc': page_descriptions.credits_desc
		}
	`);
  // console.log(creditData);
  return (
    <main id="credits_page">
      <section id="credit-head">
        <div className="styled-title">
          <h2>CREDITS</h2>
        </div>
        <p>{description.desc}</p>
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
