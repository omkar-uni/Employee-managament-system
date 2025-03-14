import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const submitHandler = (e)=>{
        e.preventDefault();
        handleLogin(email,password)
        setEmail('');
        setPassword('');
  }





  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="border-green-500 border-2 h-[500px] w-[400px] flex justify-center items-center gap-3 rounded-3xl flex-col">
        <h1 className="text-3xl mb-14">Log In</h1>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}  className="flex flex-col gap-8 items-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required
            type="email"
            placeholder="Enter your email"
            className="text-white border-2 border-green-500 outline-none rounded-full placeholder:text-gray-400 px-4 py-3 text-2xl"
          />
          <input
           value={password}
           onChange={(e)=>{
             setPassword(e.target.value)
           }}
            required
            type="password"
            placeholder="Enter your password"
            className="text-white border-2 border-green-500 outline-none rounded-full placeholder:text-gray-400 px-4 py-3 text-2xl"
          />
          <button  className="text-white border-2 bg-green-500 outline-none placeholed rounded-full w-[150px] px-3 py-2 text-2xl hover:bg-green-600">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
