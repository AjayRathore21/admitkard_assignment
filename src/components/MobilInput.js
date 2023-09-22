import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import styles from "./css/mobileinput.css";

export default function MobileInput() {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      inputStyle={{ width: "600px" }}
      country={"in"}
      enableSearch={true}
      value={phone}
      onChange={(phone) => setPhone(phone)}
    />
  );
}
