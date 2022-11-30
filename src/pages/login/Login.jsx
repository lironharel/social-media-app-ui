import { Button } from "@mui/material";
import "./login.css";

export default function Login({ route, setRoute }) {
   const LoginForm = () => {
      return (
         <div className="loginForm">
            <input id="loginEmail" placeholder="Email" className="loginInput" />
            <input id="loginPassword" placeholder="Password" className="loginInput" />
            <Button
               className="loginBlueBtn"
               variant="contained"
               disableElevation
               onClick={() => setRoute('home')}
            >
               Log In
            </Button>
            <span className="loginForgotPassword">Forgot password?</span>
            <Button
               className="loginGreenBtn"
               variant="contained"
               disableElevation
               onClick={() => setRoute('register')}
            >
               Create new account
            </Button>
         </div>
      );
   };

   const RegisterForm = () => {
      return (
         <div className="registerForm">
            <input id="registerUsername" placeholder="Username" className="loginInput" />
            <input id="registerEmail" placeholder="Email" className="loginInput" />
            <input id="registerPassword" placeholder="Password" className="loginInput" />
            <input id="registerConfirmPassword" placeholder="Confirm Password" className="loginInput" />
            <Button
               className="loginBlueBtn"
               variant="contained"
               disableElevation
            >
               Sign Up
            </Button>
            <Button
               className="loginGreenBtn"
               variant="contained"
               disableElevation
               onClick={() => setRoute('login')}
            >
               Log into Account
            </Button>
         </div>
      );
   };

   return (
      <div className="login">
         <div className="loginWrapper">
            <div className="loginLogoDescContainer">
               <h1 className="loginLogo">EasySocial</h1>
               <span className="loginDescription">
                  Connect with friends and the world around you on EasySocial.
               </span>
            </div>
            {route === "login" 
            ? <LoginForm /> 
            : route === "register"
            ? <RegisterForm />
            : false}
         </div>
      </div>
   );
}
