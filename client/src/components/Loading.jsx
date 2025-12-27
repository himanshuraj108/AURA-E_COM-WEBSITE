import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="w-12 h-12 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Loading;
