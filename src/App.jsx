import styles from "./style";
import { Navbar } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* Start Nav Bar Section */}
        <Navbar />
      </div>
    </div>
    <div className={` bg-primary  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>Heror</div>
    </div>
    <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        content
        {/* Content  */}
      </div>
    </div>
  </div>
);

export default App;
