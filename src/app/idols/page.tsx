import React from "react";
import "./idols.scss";
import { fetchData, urlFor } from "../db/db";
type Props = {};

export default async function IdolPage({}: Props) {
  const idolData = await fetchData<any>(`*[_type == "idols"]`);

  console.log(idolData);
  return (
    <main id="page_idols">
      <section id="idols-head">
        <div className="styled-title">
          {" "}
          <h2>IDOLS</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea{" "}
        </p>
      </section>

      <section id="idols-list">
        {idolData.map((idol: any) => {
          return (
            <div className="idol-card" key={"idol" + idol._id}>
              <div className="idol-img-container">
                <img
                  src={urlFor(idol.idol_image).url()}
                  alt="idol-img"
                  className="idol-img"
                />
              </div>
              <h2>- {idol.name} -</h2>
              <p>{idol.description}</p>
              <img src="/decors/idol_decor.svg" alt="" className="idol-decor" />
            </div>
          );
        })}
        {/* <div className="idol-card">
          <div className="idol-img-container">
            <img src="/" alt="idol-img" className="idol-img" />
          </div>
          <h2>- Name -</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{" "}
          </p>
          <img src="/decors/idol_decor.svg" alt="" className="idol-decor" />
        </div> */}
      </section>
    </main>
  );
}
