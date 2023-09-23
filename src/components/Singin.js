import styles from "./css/signin.module.css";
import { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClick = () => {
    toast.success('Your OTP', {
        position: toast.POSITION.TOP_CENTER
    });
    console.log(phoneNumber, "inside signin at 10");
  };

  const handleChange = (value) => { 
    setPhoneNumber(value);
  };

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
          onChange={handleChange}
          value={phoneNumber}
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

        <button onClick={handleClick} className={styles.button}>
          Submit
        </button>
        <ToastContainer/>
      </div>
    </div>
  );
}

export default Signin;
