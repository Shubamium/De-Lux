import "./home.scss";
export default function Home() {
  return (
    <main id="page_home">
      <section id="animated-hero">
        <img src="/graphics/main_banner-placeholder.png" alt="" />
        {/* <video src=""></video> */}
      </section>

      <section id="about-section">
        <div className="about-panel">
          <img src="/graphics/main_logo.png" alt="" className="about-logo" />
          <img
            src="/graphics/mini_banner.png"
            alt=""
            className="about-banner"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <img src="/graphics/irene.gif" alt="" className="side-idol l " />
          <img src="/graphics/caspy.gif" alt="" className="side-idol r" />
        </div>
      </section>
    </main>
  );
}
