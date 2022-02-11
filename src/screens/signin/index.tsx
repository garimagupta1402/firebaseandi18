import { Formik, Form, Field, ErrorMessage } from "formik";
import Schema from "./schema";
import { Button, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { SignIn } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    formcontainer: {
      width: "50%",
      height: "auto",
      backgroundColor: "#6b5b95 ",
      margin: "15% 25% !important",
    },
    nameinput: {
      width: "70%",
      height: "50px",
      border: "none",
      outline: " none",
      borderBottom: "1px solid #445366",
      fontSize: "1em !important",
      fontWeight: "300",
      paddingBottom: "10px",
      marginTop: "10px",
      marginBottom: "20px",
    },
    corp: {
      fontSize: "48px !important",
      // fontWeight: "bold !important",
      fontFamily: "remote-alt",
      marginTop: "2rem !important",
    },
    btn: {
      backgroundColor: "#131216 !important",
      color: "white !important",
      border: "none !important",
      outline: "none !important",
      borderRadius: "25px !important",
      padding: "15px 70px !important",
      fontSize: " 0.8em !important",
      fontWeight: " 500 !important",
      margin: "20px 0px !important",
      width: "50%",
      height: "5em",
    },
  })
);
const initialValues = {
  email: "",
  password: "",
};

export default function Login(props: any) {
  const classes = useStyles();
  const navigate = useNavigate();
  const onSubmit = (values: any) => {
    console.log("Submitted", values);
    const res = SignIn(values);
    navigate('/dashboard')
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema.validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div className={classes.formcontainer}>
            <Typography className={classes.corp}>Login!</Typography>

            <Field
              type="email"
              name="email"
              className={classes.nameinput}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>

            <Field
              className={classes.nameinput}
              type="password"
              placeholder="Password"
              name="password"
              // onChange={handleChange}
              // value={values.password}
              // onBlur={handleBlur}
            />
            <ErrorMessage name="password">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
            <Button className={classes.btn} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
