import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";



export const Register = (values : any) => {
  console.log(values);
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      console.log(values.name, values.lastname);
      //dm = `${values.name} ${values.lastname} `;
      const user = userCredential.user;
      console.log("user", userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const SignIn = (values: any) => {
  console.log(values);
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      const user = userCredential.user;
       auth.currentUser?.getIdToken().then((token) => {
         localStorage.setItem("accessToken", JSON.stringify(token));
       });
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return false;
    });
};
// export const register = (user) => {
//   return (dispatch) => {
//     createUserWithEmailAndPassword(dbAuth, user.email, user.password).then(
//       (userData) => {
//         updateProfile(dbAuth.currentUser, {
//           displayName: user.name,
//         })
//           .then(() => {
//             set(ref(database, `Users/${userData.user.uid}`), {
//               name: user.name,
//               email: user.email,
//               uid: userData.user.uid,
//               createdAt: +new Date(),
//             });
//           })
//           .then(() => {
//             dbAuth.currentUser.getIdToken().then((token) => {
//               console.log(token);
//               localStorage.setItem("userToken", JSON.stringify(token));
//             });



//             const userDetails = {
//               name: user.name,
//               email: user.email,
//               uid: userData.user.uid,
//             };

//             dispatch({
//               type: USER_LOGIN_SUCCESS,
//               payLoad: { user: userDetails },
//             });
//           })
//           .catch((err) => {
//             dispatch({
//               type: USER_LOGIN_FAILURE,
//               payLoad: { err },
//             });
//           });
//       }
//     );
//   };
// };

// export const signIn = ({ email, password }) => {
//   return (dispatch) => {
//     signInWithEmailAndPassword(dbAuth, email, password)
//       .then((userData) => {
//         const dbRef = ref(database, `Users/${userData.user.uid}`);
//         onValue(dbRef, (snapshot) => {
//           const userData = snapshot.val();

//           dbAuth.currentUser.getIdToken().then((token) => {
//             localStorage.setItem("userToken", JSON.stringify(token));
//           });

//           dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payLoad: { user: userData },
//           });
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         // dispatch({
//         //   type: USER_LOGIN_FAILURE,
//         //   payLoad: { error },
//         // });
//       });
//   };
// };

// export const Logout = () => {
//   return (dispatch) => {
//     dbAuth
//       .signOut()
//       .then(() => {
//         localStorage.clear();
//         dispatch({
//           type: USER_LOGOUT_SUCCESS,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
