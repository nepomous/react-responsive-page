import React from "react";
import { IconContext } from "react-icons/lib";

import { MdPlayCircleFilled } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Episodes.css";

interface EpisodeCardProps {
  cardTitle?: string;
  cardAuthor?: string;
  cardOccupation?: string;
  cardDuration?: string;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  cardTitle,
  cardAuthor,
  cardOccupation,
  cardDuration,
}) => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: "24px" }}>
      <Link to={"/sign-up"} className="episodes__container-card">
        <div className="episodes__container-cardInfo">
          <h4 className="episodes__container-cardTitle">{cardTitle}</h4>
          <h1 className="episodes__container-cardName">{cardAuthor}</h1>
          <p className="episodes__container-cardOccupation">
            {cardOccupation}
          </p>
          <div className="episodes__container-icons">
            <div className="icon">
              <MdPlayCircleFilled />
            </div>
            <div className="icon">
              <FiClock />
            </div>
          </div>
          {/* <Button buttonSize="btn--wide" buttonColor="primary">
            choose plan
          </Button> */}
        </div>
      </Link>
    </IconContext.Provider>
  );
};

export default EpisodeCard;
