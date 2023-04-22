import { LOREM_IPSUM_TEXT } from "../Constants";
import { useState } from "react";

const Section = ({
  title,
  description,
  showDescription,
  setShowDescription,
}) => {
  console.log(showDescription);
  return (
    <div className="border border-black border-spacing-3 p-2 m-2">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">{title}</h1>
        {showDescription ? (
          <button
            className="underline cursor-pointer"
            onClick={() => setShowDescription(false)}
          >
            Hide
          </button>
        ) : (
          <button
            className="underline cursor-pointer"
            onClick={() => setShowDescription(true)}
          >
            Show
          </button>
        )}
      </div>

      <p>{showDescription ? description : ""}</p>
    </div>
  );
};

const Instamart = () => {
  // const [showDescription, setShowDescription] = useState({
  //   showAbout: true,
  //   showTeam: false,
  //   showCareers: false,
  // });

  const [isVisibleSection, setIsVisibleSection] = useState("about");

  return (
    <>
      <h1 className="font-bold text-3xl"> Instamart </h1>
      <Section
        title="About Instamart"
        description={LOREM_IPSUM_TEXT}
        showDescription={isVisibleSection === "about"}
        setShowDescription={(res) => {
          res ? setIsVisibleSection("about") : setIsVisibleSection("");
        }}
      ></Section>
      <Section
        title="Team Instamart"
        description={LOREM_IPSUM_TEXT}
        showDescription={isVisibleSection === "team"}
        setShowDescription={(res) => {
          res ? setIsVisibleSection("team") : setIsVisibleSection("");
        }}
      ></Section>
      <Section
        title="Careers Instamart"
        description={LOREM_IPSUM_TEXT}
        showDescription={isVisibleSection === "careers"}
        setShowDescription={(res) => {
          res ? setIsVisibleSection("careers") : setIsVisibleSection("");
        }}
      ></Section>
    </>
  );
};

export default Instamart;
