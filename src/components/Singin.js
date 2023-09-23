import styles from "./css/signin.module.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function Signin() {
//   const inputRef = useRef(null);

  return (
    <div className={styles.container}>
      <header className={styles.header}>AdmitKard</header>
      <div className={`${styles.greeting} ${styles.center}`}>
        <span>Welcome Back!</span>
        <br />
        <span style={{ opacity: ".5" }}>Please sing in to your Account</span>
      </div>

      <div className={styles.input}>
        <PhoneInput
          inputStyle={{ width: "100%" }}
          country={"in"}
          enableSearch={true}
        />
      </div>
      <div className={styles.footer}>
        <span style={{ opacity: ".6", fontSize: "1.1rem" }}>
          We will send You One Time SMS Messgae.Charges may apply
        </span>
        <br />

        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
}

export default Signin;
