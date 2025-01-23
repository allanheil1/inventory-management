"use client";
import { Menu as MenuIcon } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-green-200">
      {/* top logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">allanheil</h1>
      </div>
      <button
        className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
        onClick={() => {}}
      >
        <MenuIcon className="w-4 h-4" />
      </button>
      {/* links */}
      <div className="flex-grow mt-8">{/* links here*/}</div>
      {/* footer */}
      <div>
        <p className="text-center text-xs text-gray-800">
          &copy; 2024 allanheil
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
