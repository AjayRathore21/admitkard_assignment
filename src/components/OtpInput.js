import React from "react";
import styles from "./css/otpinput.module.css";

class OtpInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      number: this.props.state.phoneNumber,
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

    fetch("http://localhost:8000/opt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
        // You can add more headers if necessary
      },
      body: JSON.stringify(this.state), // Convert the object to JSON format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response JSON
      })
      .then((data) => {
        // Handle the response data
        console.log("Response data:", data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
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
      if (next < 4) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.otpContainer}>
          <div>
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
          </div>

          <div className={styles.msg}>
            <span>Don't recevie the code?</span>
            <span style={{ color: "darkorange" }}>Resend</span>
          </div>

          <button className={styles.button}> Veryfiy</button>
        </div>
      </form>
    );
  }
}

export default OtpInput;
