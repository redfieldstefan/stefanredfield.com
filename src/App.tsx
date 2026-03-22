import styles from "./App.module.css";
import { BioCarousel } from "./components/BioCarousel/BioCarousel";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Stefan
        <br /> Redfield
      </h1>
      <div className={styles.content}>
        <BioCarousel />
        <p>
          Current Passion Project:{" "}
          <a href="https://www.plottogarden.com">www.plottogarden.com</a>
        </p>
      </div>
    </div>
  );
}

export default App;
