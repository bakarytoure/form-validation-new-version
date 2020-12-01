import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography } from "@material-ui/core";
import * as yup from "yup";
import DatePickerField from "./DatePicker";
import { useStyle } from "./styles";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const validationSchema = yup.object({
  username: yup.string().required("Name is required"),
  password: yup
    .string()
    .required("Password is Required")
    .matches(
      passwordRegex,
      "Invalid password(eg. 8 characters, min.one upper case,one lower case, one number and one special character)"
    ),
  email: yup
    .string()
    .required("E-mail is required")
    .matches(emailRegex, "Invalid E-mail."),
});

export const UserDetailsForm = ({ formData, setFormData, nextStep }) => {
  const classes = useStyle();
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
              Create your account
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Field
                  name="username"
                  label="Name *"
                  margin="normal"
                  variant="outlined"
                  as={TextField}
                  error={touched.username && errors.username}
                  helperText={touched.username && errors.username}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Field
                  name="email"
                  label="Email *"
                  margin="normal"
                  variant="outlined"
                  as={TextField}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Field
                  name="password"
                  label="Password *"
                  margin="normal"
                  variant="outlined"
                  as={TextField}
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <span className={classes.birthday}>Birthday</span>
                <DatePickerField
                  id="date-picker-dialog"
                  name="datepic"
                  inputVariant="outlined"
                  label="mm/dd/yyyy"
                  format="MM/dd/yyyy"
                  views={["month", "day", "year"]}
                  minDate={new Date()}
                  maxDate={new Date("12/31/2050")}
                  fullWidth
                />
              </Grid>
              <Grid className={classes.button}>
                <Button
                  disabled={
                    !validationSchema.isValid ||
                    (Object.keys(touched).length === 0 &&
                      touched.constructor === Object)
                  }
                  className={classes.buttonC}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  <span className={classes.icon}> Next</span>
                  <span className={classes.icon}> &gt;</span>
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

UserDetailsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
