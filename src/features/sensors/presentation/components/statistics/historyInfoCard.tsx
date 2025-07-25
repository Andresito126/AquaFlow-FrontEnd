const HistoryInfoCard = () => {
  return (
    <div className=" ">
      <h2 className="text-lg font-bold mb-2">Datos historicos</h2>
      <p className="text-sm">
 A continuación, puede descargar un breve historial en formato Excel o PDF.
        <br />
        Junto a esta tarjeta, puede ver los valores "normales" de cada sensor para realizar una comparación detallada.
      </p>
      <ul className="text-sm mt-3 list-disc list-inside">
        <li>1.-Primero, debe seleccionar un rango de fechas.</li>
        <li>2.-A continuación, haga clic en el botón "Aplicar filtro".</li>
        <li>3.-Por último, descargue el formato que prefiera.</li>
      </ul>
    </div>
  );
};

export default HistoryInfoCard;
