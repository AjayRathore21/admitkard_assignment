import styles from './css/otp.module.css'
import OtpInput from './OtpInput';

export default function OtpScreen() {
  return <>
  <div className={styles.container}>
      <header className={styles.header}>AdmitKard</header>
      <div className={`${styles.greeting} ${styles.center}`}>
        <span>please Veryfiy Your Mobile Number</span>
        <br />
        <br/>
        <span style={{ opacity: ".5", }}>Please sing in to your Account</span>
      </div>

      {/* <div className={styles.input}> */}
        {/* <PhoneInput
          inputStyle={{ width: "100%" }}
          country={"in"}
          enableSearch={true}
        /> */}
        <OtpInput/>

      {/* </div> */}
      {/* <div className={styles.footer}>
        <span style={{ opacity: ".6", fontSize: "1.1rem" }}>
          We will send You One Time SMS Messgae.Charges may apply
        </span>
        <br />

        <button className={styles.button}>Submit</button>
      </div> */}
    </div>
  </>;
}
