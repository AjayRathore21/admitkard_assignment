import { useEffect, useRef } from "react";
import styles from "./css/signin.module.css";
import ReactIntlTelInput from "react-intl-tel-input-v2";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "https://cdn.skypack.dev/intl-tel-input@18.0.3";
import MobileInput from "./MobilInput";

function App() {
  const inputRef = useRef(null);

  

  return (
    <div className={styles.container}>
      <header className={styles.header}>AdmitKard</header>
      <div className={`${styles.greeting} ${styles.center}`}>
        <span>Welcome Back!</span>
        <br />
        <span style={{ opacity: ".5" }}>Please sing in to your Account</span>
      </div>

      <div className={styles.input}>
        <MobileInput />
      </div>
    </div>
  );
}

export default App;
