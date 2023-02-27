import Navbar from "../Navbar/Navbar";

import { Theme } from "../../types/Interfaces";
import styles from "./HubbleDetailsPage.module.scss";
import useHubblePicture from "../../hooks/useHubblePicture";
import useAstrologicalSign from "../../hooks/useAstrologicalSign";
import useHubbleAIPrompt from "../../hooks/useHubbleAIPrompt";

export default function HubbleDetailsPage({
  lightTheme,
  setLightTheme,
}: Theme) {
  setLightTheme(true);
  const pathParts = window.location.href.split("/").pop();
  const birthDate = `${pathParts}`.replaceAll("-", " ");
  const { picture } = useHubblePicture(birthDate);
  const { signName } = useAstrologicalSign(birthDate);
  const { personalizedText, loading } = useHubbleAIPrompt({
    birthDate: birthDate,
    signName: signName,
    pictureName: picture?.Name,
    pictureCaption: picture?.Caption,
  });

  const testMarkup = picture ? (
    <section>
      <p>{picture.Date}</p>
      <h3>{picture.Name}</h3>
      <p>{picture.Caption}</p>
      <h4>
        {loading ? "ChatGPT is cooking, let him cook..." : personalizedText}
      </h4>
      <img
        src={`https://imagine.gsfc.nasa.gov/hst_bday/images/${picture.Image}`}
        alt="Hubble pic"
      />
    </section>
  ) : null;

  return (
    <>
      <Navbar lightTheme={lightTheme} />
      <section className={styles.Header}>
        <h5>Hello little {signName},</h5>
        <h1>Discover Your Birthday's Cosmic Connection!</h1>
        <h3>
          Explore the cosmos on your special day with Hubble's birthday photos!
          Our AI-generated content is personalized and full of fun references to
          astrology. Discover your cosmic connection with OpenAI and get ready
          to blast off into the stars!
        </h3>
        <h6>{signName === "Virgo" ? "Virgos are toxic js" : ""}</h6>
      </section>
      {testMarkup}
    </>
  );
}
