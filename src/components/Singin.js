import styles from "./css/signin.module.css";
// import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function Signin(props) {
  // const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log(phoneNumber, "inside signin at 10");
    fetch(`http://localhost:8000/${props.state.phoneNumber}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        props.setState({ ...props.state, otp: data.otp });

        navigate("/otp");
      });
  };

  const handleChange = (value) => {
    props.setState({ ...props.state, phoneNumber: value });
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
          value={props.state.phoneNumber}
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
      </div>
    </div>
  );
}

export default Signin;
