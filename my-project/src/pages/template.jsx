import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateTemplate() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleCreateStructure = () => {
    if (!name.trim()) {
      setError('Please enter a name');
      return;
    }
    setError('');
    navigate('/templatelist');
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center">

      {/* Dialog */}
      <div className="w-[860px] h-[560px] bg-white rounded shadow relative flex flex-col">

        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E5E7EB]">
          <h2 className="text-[18px] font-semibold text-[#111827]">
            Create Template
          </h2>
        </div>

        {/* Body */}
        <div className="flex-1 px-6 py-5 overflow-hidden">

          {/* Top Form */}
          <div className="flex items-end gap-6">

            {/* Name */}
            <div className="flex flex-col gap-2 w-[260px]">
              <label className="text-[13px] text-[#6B7280]">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[40px] px-3 border border-[#D1D5DB] rounded text-[13px] bg-white focus:outline-none focus:ring-2 focus:ring-[#D36B2C] focus:border-[#D36B2C]"
                placeholder="Enter template name"
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>

            {/* Region */}
            <div className="flex flex-col gap-2 w-[200px]">
              <label className="text-[13px] text-[#6B7280]">Region</label>
              <select className="h-[40px] px-3 border border-[#D1D5DB] rounded text-[13px] bg-white focus:outline-none">
                <option>Uk</option>
                <option>Usa</option>
                <option>India</option>
              </select>
            </div>

            {/* Create Structure */}
            <button 
              className="h-[40px] px-5 bg-[#D36B2C] text-white text-[13px] font-semibold rounded flex items-center gap-2 hover:bg-[#B85A22] transition"
              onClick={handleCreateStructure}
            >
              <FaPlus className="text-[12px]" />
              Create Structure
            </button>
          </div>

          {/* Center Canvas */}
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center gap-4">

              

              <img src="add-folder 2.png" alt="" className="text-[12px]" />

             

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#E5E7EB] flex justify-end gap-3">

          <button className="h-[36px] px-4 bg-[#D36B2C] text-white text-[13px] rounded flex items-center gap-2 hover:bg-[#B85A22]">
            Modify Template
          </button>

          <button className="h-[36px] px-4 bg-[#D36B2C] text-white text-[13px] rounded hover:bg-[#B85A22]">
            ✓ Save
          </button>

          <button className="h-[36px] px-4 bg-[#E5E7EB] text-[#374151] text-[13px] rounded hover:bg-[#D1D5DB]">
            ✕ Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
