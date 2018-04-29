import React from "react";
import styles from "./background.module.css";

console.log(styles);

const tileCount = 2048;

export default () => {

	const renderTiles = () => {
		const tiles = [];
		for(var i = 0; i < tileCount; i++) {
			tiles.push(<div className={styles.backgroundTile}></div>)
		}
		return tiles;
	}

	return (
			<div className={styles.background}>
				{renderTiles()}
			</div>
	);
}