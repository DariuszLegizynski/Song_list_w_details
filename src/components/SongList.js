import React from "react";
import { useSelector } from "react-redux";

const SongList = () => {
	const renderSongList = () => {
		return songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary">Select</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	};

	const songs = useSelector((state) => state.songs);

	return <div className="ui divided list">{renderSongList()}</div>;
};

// const mapStateToProps = (state) => {
// 	return { songs: state.songs };
// };

export default SongList;
