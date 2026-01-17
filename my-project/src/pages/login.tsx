import {
    FaUser,
    FaLock,
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
  } from "react-icons/fa";
  import { useState } from "react";
  import CreateTemplate from "./template";
  export default function Login() {
    const [showTemplate, setShowTemplate] = useState(false);
    if (showTemplate) {
      return <CreateTemplate />;
    }
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans">
        
        {/* Top Line */}
        <div className="h-[6px] w-full bg-[#D36B2C]" />
  
        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
  
          {/* Logo */}
          <img
            src="/logoipsum-329 1.png"
            alt="Logo"
            className="h-[60px] mb-12"
          />
  
          {/* Form */}
          <div className="w-full max-w-[360px] space-y-4">
  
            {/* Username */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[14px]" />
              <input
                type="text"
                placeholder="USERNAME"
                className="w-full h-[46px] pl-11 pr-4 bg-[#F4F7F4] border border-[#E5E7EB] text-[13px] tracking-wide focus:outline-none focus:border-[#D36B2C]"
              />
            </div>
  
            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[14px]" />
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full h-[46px] pl-11 pr-4 bg-[#F4F7F4] border border-[#E5E7EB] text-[13px] tracking-wide focus:outline-none focus:border-[#D36B2C]"
              />
            </div>
  
            {/* Error */}
            {/* <div className="flex items-center gap-3 bg-[#FDEAEA] text-[#C53030] text-[12px] px-4 h-[42px]">
              <span className="w-[6px] h-[6px] bg-[#C53030] rounded-full" />
              Invalid credentials. Please try again.
            </div> */}
  
            {/* Button */}
            <button className="w-full h-[46px] bg-[#D36B2C] text-white text-[13px] font-semibold tracking-wider hover:bg-[#B85A22] transition" onClick={() => {setShowTemplate(true);}}>
              SIGN IN
              
            </button>
  
            {/* Forgot */}
            <p className="text-center text-[11px] text-[#6B7280] cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>
  
          {/* Social Icons */}
          <div className="flex gap-5 mt-10">
            {[FaFacebookF, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <div
                key={i}
                className="w-[36px] h-[36px] rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#9CA3AF] hover:bg-[#D36B2C] hover:text-white transition cursor-pointer"
              >
                <Icon className="text-[14px]" />
              </div>
            ))}
          </div>
        </div>
  
        {/* Footer */}
        <footer className="text-[11px] text-[#9CA3AF] text-center pb-6">
          © Copyright Dyzx Innovate 2026. All rights reserved.
        </footer>
      </div>
    );
  }
  