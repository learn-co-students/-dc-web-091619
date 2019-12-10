import React from "react";
import { Link } from "react-router-dom";

const PaintingListItem = props => (
  <Link className="item" to={`/paintings/${props.painting.id}/edit`}>
    <div className="content">
      <h2>{props.painting.title}</h2>
      <em>
        {props.painting.artist.name}·{props.painting.date}
      </em>
    </div>
  </Link>
);

export default PaintingListItem;
