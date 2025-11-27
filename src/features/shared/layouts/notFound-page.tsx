import ThemeToggleButton from "../components/generic/ThemeToggleButton";
import { useTheme } from "../hooks/useTheme";


export const NotFoundPage = () => {

    const {theme, toggleTheme} = useTheme();
    
    return (
        <>
      
    <div className="text-center mt-16">
        <p className="text-7xl font-semibold">404!</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">¡ Página no encontrada !</h1>
        <p className="mt-6 text-lg font-medium sm:text-xl/8">Una disculpa, esta ruta de la web es inexistente. <br /> Prueba otra ruta volviendo atrás. </p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a href="\dashboard" className="shadow-lg dark:bg-[#011521] border-1 rounded-[20px] dark:border-[#105B85] hover:bg-[#3F8DB4]  border-[#CBD5E1] px-3.5 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ">Regresa al inicio</a>
    </div>
    <div className="fixed top-4 right-4 z-10 grid min-h-full place-items-cente px-6 py-24 sm:py-32 lg:px-8" >
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </div>
  </div>

        </>
    );
};