import React, { useState } from "react";
import { UserDetailsForm } from "./UserDetailsForm";
import { AddressDetailsForm } from "./AddressDetailsForm";
import { Success } from "./Success";
export const MainForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    city: "",
    birthday: "",
    password: "",
    datepicker: "",
    addr1: "",
    addr2: "",
    country: "",
    zip: "",
    addresses: "",
  });
  const nextStep = () => setStep((prev) => prev + 1);

  switch (step) {
    case 1:
      return (
        <UserDetailsForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <AddressDetailsForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );

    default:
      return <Success />;
  }
};
