import styles from "./style";
import { Navbar, Hero, Stats } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* Start Nav Bar Section */}
        <Navbar />
      </div>
    </div>
    <div className={` bg-primary  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
      </div>
    </div>
  </div>
);

export default App;
