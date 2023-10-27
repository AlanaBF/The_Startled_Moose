import "../../assets/styles/components.css";
import Illustration from "../../assets/images/JannieIllustrations.jpg";
import Portrait from "../../assets/images/JanniePortrait2.jpeg"
import Fragment from "../../assets/images/JannieFragmentations11.jpeg"
function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutCard">
          <div className="intro-container">
            <h1>
              {" "}
              Create Memories and Stories: Personalized Artwork, Mosaic
              Creations, and Illustrations.
            </h1>
            <div className="art-div">
              <div className="">
                <h3>Illustrations</h3>
                <img src={Illustration} className="illustration-image"></img>
              </div>
              <div className="">
              <h3>Portraits</h3>
                <img src={Portrait} className="portrait-image"></img>
              </div>
              <div className="">
              <h3>Fragmented Mosaic Art</h3>
                <img src={Fragment} className="fragment-image"></img>
              </div>
            </div>
            <p>
              Share your vision via email, and I&apos;ll provide a personalised
              quote. Whether it&apos;s a cherished pet portrait, mosaic-inspired
              artwork, or illustrations for your storytelling, I&apos;m here to
              bring your ideas to life.
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
