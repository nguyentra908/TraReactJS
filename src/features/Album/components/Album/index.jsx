import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Album.propTypes = {
  album: PropTypes.object,
};
Album.defaulProps = {
  album: "",
};
function Album(props) {
  const { album } = props;
  return (
    <div className="album">
      <div className="album__thumbnai">
        <img src={album.thumbnailUrl} alt="" />
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default Album;
