import { useNavigate } from 'react-router-dom';
import {
    FaPlus,
    FaEdit,
    FaTrash,
    FaChevronDown,
    FaUser,
  } from "react-icons/fa";
  
  export default function TemplateList() {
    const navigate = useNavigate();
    
    const handleUserClick = () => {
      navigate('/login');
    };
    return (
      <div className="min-h-screen bg-[#F3F4F6] flex">

        {/* Sidebar */}
        <aside className="w-[220px] bg-[#D36B2C] text-white flex flex-col">
          <div className="h-[60px] flex items-center px-6 font-bold text-lg">
            <img src="logoipsum-329 1.png" alt=""  height={60} width={60}/>
          </div>
  
          <nav className="flex-1 px-4 space-y-2 text-[13px]">
            <div className="font-semibold">Configurations</div>
            <div className="pl-3 text-[#FDE68A]">Templates</div>
  
            <div className="mt-4 font-semibold">Document Prep</div>
            <div className="pl-3">Products</div>
            <div className="pl-3">Applications</div>
            <div className="pl-3">Sequences</div>
          </nav>
        </aside>
  
        {/* Main */}
        <div className="flex-1 flex flex-col">
  
          {/* Top Workflow Bar */}
          <div className="h-[64px] bg-[#D36B2C] flex items-center justify-between px-6 text-white">
            <div className="flex items-center gap-8 text-[12px]">
              {[
                "Product Info",
                "Manage Document",
                "eCTD Submission",
                "Validation",
                "Dispatch",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white text-[#D36B2C] flex items-center justify-center text-[11px] font-bold">
                    {i + 1}
                  </div>
                  {step}
                </div>
              ))}
            </div>
  
            <div className="text-[12px] text-right" >
              <div 
                onClick={handleUserClick}
                className="cursor-pointer hover:opacity-80 inline-block"
              >
                <FaUser size={10} className="inline-block mr-1" />
              </div>
              <div className="font-semibold mt-1">Paul Rudd</div>
              <div className="opacity-80">Author</div>
              <div className="opacity-80">Last login: 23:05 UTC</div>
            </div>
          </div>
  
          {/* Content */}
          <div className="p-6">
  
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[16px] font-semibold text-[#111827]">
                Templates
              </h2>
  
              <button className="h-[32px] px-4 bg-[#D36B2C] text-white text-[12px] rounded flex items-center gap-2 hover:bg-[#B85A22]" >
                <FaPlus className="text-[10px]" />
                Create Template
              </button>
            </div>
  
            {/* Filters */}
            <div className="bg-white border border-[#D1D5DB] rounded p-4 mb-4 flex gap-4 text-[12px]">
              <div>
                <label className="block mb-1 text-[#6B7280]">Start Date</label>
                <input
                  type="date"
                  className="h-[32px] border border-[#D1D5DB] px-2 rounded"
                />
              </div>
  
              <div>
                <label className="block mb-1 text-[#6B7280]">End Date</label>
                <input
                  type="date"
                  className="h-[32px] border border-[#D1D5DB] px-2 rounded"
                />
              </div>
  
              <div>
                <label className="block mb-1 text-[#6B7280]">Region</label>
                <div className="relative">
                  <select className="h-[32px] border border-[#D1D5DB] px-2 pr-6 rounded appearance-none">
                    <option>Select</option>
                    <option>USA</option>
                    <option>Europe</option>
                  </select>
                  <FaChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px]" />
                </div>
              </div>
  
              <button className="h-[32px] px-4 bg-[#D36B2C] text-white text-[12px] rounded self-end">
                Search
              </button>
            </div>
  
            {/* Table */}
            <div className="bg-white border border-[#D1D5DB] rounded overflow-hidden">
  
              {/* Table Header */}
              <div className="grid grid-cols-6 bg-[#F9FAFB] text-[12px] font-semibold text-[#374151] border-b">
                {[
                  "Template ID",
                  "Template Name",
                  "Region",
                  "Modified By",
                  "Modified On",
                  "Actions",
                ].map((h) => (
                  <div key={h} className="px-3 py-2 border-r last:border-r-0">
                    {h}
                  </div>
                ))}
              </div>
  
              {/* Rows */}
              {[
                ["T01", "US-FDA-01", "USA"],
                ["T02", "US-FDA-02", "USA"],
                ["T03", "Europe-ESP-01", "Europe"],
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-6 text-[12px] border-b last:border-b-0"
                >
                  <div className="px-3 py-2">{row[0]}</div>
                  <div className="px-3 py-2">{row[1]}</div>
                  <div className="px-3 py-2">{row[2]}</div>
                  <div className="px-3 py-2">CuneSoft Support</div>
                  <div className="px-3 py-2">01-01-1970</div>
                  <div className="px-3 py-2 flex gap-3">
                    <FaEdit className="cursor-pointer" />
                    <FaTrash className="cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
  
            {/* Footer */}
            <div className="text-right text-[11px] text-[#6B7280] mt-2">
              1 - 3 of 3
            </div>
          </div>
        </div>
      </div>
    );
  }
  