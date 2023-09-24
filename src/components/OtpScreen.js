import { useEffect } from "react";
import styles from "./css/otp.module.css";
import OtpInput from "./OtpInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function OtpScreen(props) {
  useEffect(() => {
    if (props.state.otp) {
      // console.log(props,'at 9 %%%%%%5')
      toast.success(`Your OTP is: ${props.state.otp} `, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [props.state.phoneNumber]);

  // console.log(props.state,'at 16 ')
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>AdmitKard</header>
        <div className={`${styles.greeting} ${styles.center}`}>
          <span>please Veryfiy Your Mobile Number</span>
          <br />
          <br />
          <span style={{ opacity: ".5" }}>Please sing in to your Account</span>
        </div>

        {/* <div className={styles.input}> */}
        {/* <PhoneInput
          inputStyle={{ width: "100%" }}
          country={"in"}
          enableSearch={true}
        /> */}
        <OtpInput state={props.state} setState = {props.setState} />
        <ToastContainer />

        {/* </div> */}
        {/* <div className={styles.footer}>
        <span style={{ opacity: ".6", fontSize: "1.1rem" }}>
          We will send You One Time SMS Messgae.Charges may apply
        </span>
        <br />

        <button className={styles.button}>Submit</button>
      </div> */}
      </div>
    </>
  );
}
