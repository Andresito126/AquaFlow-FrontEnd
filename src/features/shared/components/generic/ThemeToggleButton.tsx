import React from "react";

interface Props {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const ThemeToggleButton: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <div
      className="fixed bottom-6 right-6 bg-[#011521] dark:bg-[#CBD5E1] border border-[#CBD5E1] dark:border-[#105B85] rounded-full p-3 shadow-lg cursor-pointer transition duration-300 hover:bg-[#105B85] dark:hover:bg-[#022f43] active:scale-95"
      title="Cambiar tema"
      onClick={toggleTheme}
    >
      <button className="text-xl focus:outline-none select-none">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeToggleButton;
