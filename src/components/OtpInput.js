import React, { Component, ReactDOM } from "react";
import styles from "./css/otpinput.module.css";

class OtpInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value1, event) {
    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.otpContainer}>
          <div >
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              className={styles.otpInput}
              value={this.state.otp1}
              onKeyPress={this.keyPressed}
              onChange={(e) => this.handleChange("otp1", e)}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className={styles.otpInput}
              value={this.state.otp2}
              onChange={(e) => this.handleChange("otp2", e)}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className={styles.otpInput}
              value={this.state.otp3}
              onChange={(e) => this.handleChange("otp3", e)}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp4"
              type="text"
              autoComplete="off"
              className={styles.otpInput}
              value={this.state.otp4}
              onChange={(e) => this.handleChange("otp4", e)}
              tabIndex="4"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />

            <input
              name="otp5"
              type="text"
              autoComplete="off"
              className={styles.otpInput}
              onChange={(e) => this.handleChange("otp5", e)}
              tabIndex="5"
              maxLength="1"
              onKeyUp={(e) => this.inputfocus(e)}
            />
          </div>

          <div className={styles.msg} >
            <span>Don't recevie the code?</span>
            <span style={{color:'darkorange'}}>Resend</span>
          </div>

          <button  className={styles.button}> Veryfiy</button>
        </div>
      </form>
    );
  }
}

export default OtpInput;
