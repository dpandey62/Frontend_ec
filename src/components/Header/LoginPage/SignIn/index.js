import { useContext, useEffect } from "react";
import { Mycontext } from "../../../../pages/Home/Context";
import "./signin.css";
import { useState } from "react";

import axios from "axios";
//import { FaUser, FaLock } from "react-icons/fa";
import { FaGoogle, FaFacebookF, FaPinterest, FaLinkedinIn } from "react-icons/fa";
//import { Link } from "react-router-dom";


const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "https://backend-ecommerce-git-main-dpandey62s-projects.vercel.app";
const SignIn = () => {
  const context = useContext(Mycontext); 

  useEffect(() => {
    if (context?.setisHeaderFooterShow) {
      context.setisHeaderFooterShow(false); // Hide header/footer on mount
    }

    return () => {
      if (context?.setisHeaderFooterShow) {
        context.setisHeaderFooterShow(true); // Show header/footer on unmount
      }
    };
  }, [context]); 


  // State for Login and Signup
//  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


 // const [email, setEmail] = useState("");
  //const [error, setError] = useState("");
 // const [isValid, setIsValid] = useState(false);
 // const [password, setPassword] = useState("");
 // const [confirmPassword, setConfirmPassword] = useState("");
  //const [passwordError, setPasswordError] = useState("");
 // const [loading, setLoading] = useState(false);
  //const handleLoginClick = () => setActiveTab("login");
  //const handleSignupClick = () => setActiveTab("signup");

  // ✅ Handle Login API Call
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/api/Users/login`, { email, password });
      console.log("Login Success:", res.data);
      localStorage.setItem("token", res.data.token); // Store JWT token
      alert("Login successful!");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
    setLoading(false);
  };

  // // ✅ Handle Signup API Call
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(`${API_BASE_URL}/api/Users/create-account`, { email, password });
      console.log("Signup Success:", res.data);
      alert("Signup successful! Please log in.");
      setActiveTab("login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed!");
    }
    setLoading(false);
  };

// Track whether we're on "login" or "signup"
const [activeTab, setActiveTab] = useState("login");

const handleLoginClick = () => {
  setActiveTab("login");
};

const handleSignupClick = () => {
  setActiveTab("signup");
};


const validateEmail = (email) => {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!email) {
    setError("Email is required");
  } else if (!gmailRegex.test(email)) {
    setError("Enter a valid Gmail address (example@gmail.com)");
  } else {
    setError("");
  }
};


// NEW MAI CODE 

  // Email Validation (Only Gmail)
  // const validateEmail = (email) => {
  //   const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  //   if (!email) {
  //     setError("Email is required");
  //     setIsValid(false);
  //   } else if (!gmailRegex.test(email)) {
  //     setError("Enter a valid Gmail address (example@gmail.com)");
  //     setIsValid(false);
  //   } else {
  //     setError("");
  //     setIsValid(true);
  //   }
  // };

  // Password Validation
  // const validatePasswords = () => {
  //   if (password !== confirmPassword) {
  //     setPasswordError("Passwords do not match");
  //     return false;
  //   } else if (password.length < 6) {
  //     setPasswordError("Password must be at least 6 characters");
  //     return false;
  //   } else {
  //     setPasswordError("");
  //     return true;
  //   }
  // };

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   if (!isValid || !validatePasswords()) {
  //     alert("Please fix errors before submitting.");
  //     return;
  //   }

  //   setLoading(true);
  //   // Simulating API request (Replace with actual signup logic)
  //   setTimeout(() => {
  //     alert("Signup Successful! 🎉");
  //     setLoading(false);
  //   }, 2000);
  // };

  return (
   
   <div className="signcontainer">
    <div className="wrapper">
      <span className="title-text">{activeTab === "login" ? "Login Form" : "Signup Form"}</span>
      <div className="form-container">
        {/* The slider buttons */}
        <div className="slide-controls">
          <button
            className={`slide login ${activeTab === "login" ? "active" : ""}`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={`slide signup ${activeTab === "signup" ? "active" : ""}`}
            onClick={handleSignupClick}
          >
            Signup
          </button>
          {/* Move slider-tab based on activeTab */}
          <div
            className="slider-tab"
            style={{ left: activeTab === "signup" ? "50%" : "0%" }}
          ></div>
        </div>

        {/* Forms container - slides horizontally depending on activeTab */}
        <div className={`form-inner ${activeTab === "signup" ? "signup-active" : ""}`}>
         { error && <p className="error-text">{error}</p>}
          {/* LOGIN FORM */}
          {activeTab === "login" && (
          <form className="login"onSubmit={handleLogin}>
            <div className="field">
              <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="pass-link">
              <a href="/Forgetpassw">Forgot password?</a>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value={loading ? "Logging in..." : "Login"} disabled={loading} />
            </div>
            <div className="signup-link">
              Not a member?{" "}
              <a href="#!" onClick={handleSignupClick}>
                Signup now
              </a>
            </div>
          </form>
          )}
          {/* SIGNUP FORM */}
         
           {activeTab === "signup" && (
           
           <form className="signup"onSubmit={handleSignup}>
            <div className="field">
              <input type="email" placeholder="Email Address"  value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => validateEmail(email)} />
              {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
  
            </div> 
            <div className="field">
              <input type="password" placeholder="Password" rrequired value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
               {/* {passwordError && <p style={{ color: "red", fontSize: "12px" }}>{passwordError}</p>} */}
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value={loading ? "Signing up..." : "Signup"} disabled={loading} />
            </div>
          </form>
          )} 
        </div>
      </div>

      <div className=" social-login flex justify-center gap-4">
                   <a href="https://www.google.co.in/" target="_blank"rel="noopener noreferrer" className="social-icons p-2 rounded-full">
                <button className="  social-icons p-2 rounded-full"><FaGoogle /></button></a>
                <a href="https://www.facebook.com/" target="_blank"rel="noopener noreferrer" className="social-icons p-2 rounded-full">
                <button className=" social-icons p-2  rounded-full "><FaFacebookF /></button></a>
                <button className="social-icons p-2  rounded-full "><FaPinterest /></button>
                <a href="https://in.linkedin.com/"target="_blank"rel="noopener noreferrer"className="social-icons p-2 rounded-full">
                  <button className="social-icons p-2 rounded-full"><FaLinkedinIn /> </button></a>
              </div>
      </div>

    </div>

   
      );
    }
    
  
    


export default SignIn;
