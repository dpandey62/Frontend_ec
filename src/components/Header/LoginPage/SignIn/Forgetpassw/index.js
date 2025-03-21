import { useContext, useEffect } from "react";
import { Mycontext } from "../../../../../pages/Home/Context";
import { Navigate } from "react-router-dom"; // Import Navigate
import { useState } from "react";
import axios from "axios"; // Change Axios to axios

const Forgetpassw = () => {
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
  }, [context]); // Added context as a dependency

  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/Forgetpassw',{email})
    .then(res=>{
      if(res.data.status ==="Success"){
          Navigate('/login')
        }
    }).catch(err =>console.log(err))
  } // Closing brace added for handleSubmit

  return (
    <div className="signcontainer flex items-center justify-center min-h-screen  p-5">
      <div className=" wrapper bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="title-text text-xl font-semibold text-center mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="forgcontainer">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            style={{ marginTop: "10px", width: "150px" }}>Reset Password
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-3">
          Remembered your password? <a href="/signin" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
}
export default Forgetpassw;
