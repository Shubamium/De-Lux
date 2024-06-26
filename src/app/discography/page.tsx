import React from "react";
import "./discography.scss";
import { fetchData } from "../db/db";
import DSelector from "./dSelector/DSelector";
type Props = {};

export default async function DiscographyPage({}: Props) {
  const discographyData = await fetchData<any>(`
		*[_type == "discography"]
	`);

  console.log(discographyData[0].discography);

  const allSongs: any[] = [];
  discographyData.forEach((category: any) => {
    allSongs.push(...category.discography);
  });
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

        <DSelector allSongs={allSongs} allCategories={discographyData} />
      </section>
    </main>
  );
}
