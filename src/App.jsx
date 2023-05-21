import styles from "./style"
import { Navbar, Hero, Links, Sponsors, Footer} from "./components"

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
      <div className={'${styles.paddingX}'}>
        <div className={'$(styles.boxWidth}'}>
          <Navbar />
        </div>
      </div>

      <div className={'bg-primary ${styles.flexStart}'}>
        <div className={'$(styles.boxWidth}'}>
          <Hero />
        </div>
      </div>

      <div className={'bg-primary ${styles.flexStart}'}>
        <div className={'$(styles.boxWidth}'}>
          <Links />
        </div>
      </div>

      <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
        <div className={'$(styles.boxWidth}'}>
          <Sponsors />
          <Footer />
        </div>
      </div>
  </div>
);

export default App;
