import { fetchData, urlFor } from "./db/db";
import "./home.scss";
export default async function Home() {
  const homeData = await fetchData<any>(
    `*[_type == "general" && preset == "main"][0]{
			...,
			home_banner{
				banner_type,
				'src': src.asset->url
			}
		}`
  );

  console.log("homeData", homeData.home_banner.src);
  return (
    <main id="page_home">
      <section id="animated-hero">
        {homeData.home_banner.banner_type == "image" ? (
          <img src={homeData.home_banner.src} alt="" />
        ) : (
          <video
            src={homeData.home_banner.src}
            autoPlay={true}
            loop
            muted
            className="video"
          ></video>
        )}
      </section>

      <section id="about-section">
        <div className="about-panel">
          <img src="/graphics/main_logo.png" alt="" className="about-logo" />
          <img
            src={urlFor(homeData.about.banner).url()}
            alt=""
            className="about-banner"
          />
          <p>{homeData.about.description}</p>

          <img src="/graphics/irene.gif" alt="" className="side-idol l " />
          <img src="/graphics/caspy.gif" alt="" className="side-idol r" />
        </div>
      </section>
    </main>
  );
}
