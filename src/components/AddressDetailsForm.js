import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography } from "@material-ui/core";
import SelectField from "./SelectField";
import { useStyle } from "./styles";
import * as yup from "yup";

const cities = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "Poland",
  },
  {
    value: "2",
    label: "England",
  },
  {
    value: "3",
    label: "Senegal",
  },
];
const zipRegex = /^[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}$/;
const validationSchema = yup.object({
  addr1: yup.string().required("Address Line 1 is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  zip: yup
    .string()
    .required("Zipcode is required")
    .matches(zipRegex, "Invalid Zipcode(eg. XX-XXX)"),
});

export const AddressDetailsForm = ({ formData, setFormData, nextStep }) => {
  const [expended, setExpend] = useState(false);
  const classes = useStyle();
  const onhandleExpand = () => {
    setExpend(!expended);
  };
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Typography className={classes.title}>
              Input your address
            </Typography>
            {expended ? (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <Field
                    name="addr1"
                    label="Address Line 1 *"
                    margin="normal"
                    variant="outlined"
                    as={TextField}
                    error={touched.addr1 && errors.addr1}
                    helperText={touched.addr1 && errors.addr1}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Field
                    name="addr2"
                    label="Address Line 2"
                    margin="normal"
                    variant="outlined"
                    id="outlined-weight-helper-text"
                    as={TextField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4} sm={5}>
                  <Field
                    name="zip"
                    label="ZIP *"
                    
                    variant="outlined"
                    id="outlined-weight-helper-text"
                    as={TextField}
                    error={touched.zip && errors.zip}
                    helperText={touched.zip && errors.zip}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={8} sm={7}>
                  <Field
                    name="city"
                    label="City *"
                    variant="outlined"
                    id="outlined-weight-helper-text"
                    as={TextField}
                    error={touched.city && errors.city}
                    helperText={touched.city && errors.city}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <SelectField
                    name="county"
                    label="Country *"
                    margin="normal"
                    variant="outlined"
                    as={TextField}
                    id="outlined-weight-helper-text"
                    error={touched.country && errors.country}
                    helperText={touched.country && errors.country}
                    fullWidth
                    data={cities}
                  />
                </Grid>

                <Grid className={classes.button}>
                  <Button
                    className={classes.buttonC}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() => nextStep()}
                    disabled={
                      !validationSchema.isValid ||
                      (Object.keys(touched).length === 0 &&
                        touched.constructor === Object)
                    }
                  >
                    <span className={classes.icon}> Next</span>
                    <span className={classes.icon}> &gt;</span>
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <>
                <Grid item xs={12} sm={12}>
                  <Field
                    type="text"
                    name="addresses"
                    label="Enter your Adress"
                    margin="normal"
                    variant="outlined"
                    id="outlined-weight-helper-text"
                    as={TextField}
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs className={classes.button}>
                  <Button
                    className={classes.buttonB}
                    onClick={onhandleExpand}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    <h2> I want to do this manually </h2>
                  </Button>
                </Grid>
              </>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

AddressDetailsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
