import "../../assets/styles/components.css";
import Illustration from "../../assets/images/Illustration14.jpeg";
import Portrait from "../../assets/images/JanniePortrait2.jpeg"
import Fragment from "../../assets/images/JannieFragmentations11.jpeg"

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutCard">
          <div className="intro-container">
            <p>
              {" "}
              I offer Book Illustrations, Personalized Artwork, Mosaic
              Creations and more.
            </p>
            <p>Take a look at my gallery for inspiration and ideas. 

            <br/>Contact me for more information<br/></p>
            <div className="art-div">
                <p>Illustrations</p>
                <img src={Illustration} className="illustration-image"></img>
              <p>Portraits</p>
                <img src={Portrait} className="portrait-image"></img>
  
    
              <p>Fragmented Mosaic Art</p>
                <img src={Fragment} className="fragment-image"></img>
 
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
