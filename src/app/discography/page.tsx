import React from "react";
import "./discography.scss";
import { fetchData } from "../db/db";
import DSelector from "./dSelector/DSelector";
type Props = {};

export default async function DiscographyPage({}: Props) {
  const discographyData = await fetchData<any>(`
		*[_type == "discography"]
	`);

  // console.log(discographyData[0].discography);
  const description = await fetchData<any>(`
		*[_type == "general" && preset == "main"][0]{
			'desc': page_descriptions.discography_desc
		}
	`);
  const allSongs: any[] = [];
  if (discographyData !== undefined) {
    discographyData.forEach((category: any) => {
      if (category.discography) {
        allSongs.push(...category.discography);
      }
    });
  }
  return (
    <main id="page_discography">
      <section id="discography">
        <div className="head">
          <div className="styled-title">
            <h2>DISCOGRAPHY</h2>
          </div>
          <p>{description.desc}</p>
        </div>

        {discographyData !== undefined && (
          <DSelector allSongs={allSongs} allCategories={discographyData} />
        )}
      </section>
    </main>
  );
}
