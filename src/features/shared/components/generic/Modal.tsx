import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#011521a6] bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose} 
    >
      <div
        className="bg-white dark:bg-[#0f1418] p-6 rounded-lg w-[90%] max-w-md relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-lg font-bold"
          aria-label="Cerrar modal"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};
