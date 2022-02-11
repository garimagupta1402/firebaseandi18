import { Formik, Form, Field, ErrorMessage } from "formik";
import Schema from "./schema";
import { Button, Typography, useTheme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Register } from "../../redux/action";
import { useNavigate } from "react-router";


const useStyles = makeStyles((theme: any) =>
  createStyles({
    formcontainer: {
      width: "50%",
      height: "auto",
      backgroundColor: "#6b5b95",
      margin:'10% 25% '
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
  name: "",
  lastname: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const navigate = useNavigate()
  // const dispatch = useDispatch();
  //  console.log("Visited Fields", touched);

  const onSubmit = (values: any) => {
    console.log("Form data", values);
    Register(values);
    navigate('/login')
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
            <Typography className={classes.corp}>Sign Up!</Typography>
            <div>
              <Field
                className={classes.nameinput}
                type="text"
                placeholder="Name"
                name="name"
              />
              <ErrorMessage name="name">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <Field
                className={classes.nameinput}
                type="text"
                placeholder="Last Name"
                name="lastname"
              />
              <ErrorMessage name="lastname">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            
            <div>
              <Field
                type="email"
                name="email"
                className={classes.nameinput}
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <Field
                className={classes.nameinput}
                type="password"
                placeholder="Password"
                name="password"
              />
              <ErrorMessage name="password">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <Button className={classes.btn} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
