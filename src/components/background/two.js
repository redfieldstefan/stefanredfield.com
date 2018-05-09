import React, {Component} from "react";
import styles from "./background.module.css";

const tileCount = 512;

export default class Background extends Component {

  constructor() {
    super();

    this.state = {
      rows: [this.renderRow(this.renderTiles), this.renderRow(this.renderTiles), this.renderRow(this.renderTiles), this.renderRow(this.renderTiles)]
    }
  }

  componentDidMount () {
    this.state.rows.forEach((row) => {
      const newRow = () => <row className={styles.row, styles.fire}/>
      setTimeout(() => {
        console.log("hm?")
        this.setState({
          rows: [...this.state.rows, newRow]
        })
      }, 2000)
    })
  }

  renderTiles () {
    const tiles = [];
    for(var i = 0; i < tileCount; i++) {
      tiles.push(<div className={styles.tile}></div>)
    }
    return tiles;
  }

  renderRow (renderTiles) {
    return (
      <div className={styles.row}>
        {renderTiles()}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.background}>
        {
          this.state.rows.map((row) => row)
        }
      </div>
    );
  }

}
