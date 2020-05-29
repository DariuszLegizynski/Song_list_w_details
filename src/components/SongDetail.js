import React from "react";
import { useSelector } from "react-redux";

const SongDetail = ({ song }) => {
	song = useSelector((state) => state.selectedSong);

	if (!song) {
		return <div>Select a song</div>;
	}
	return <div>{song.title}</div>;
};

export default SongDetail;
