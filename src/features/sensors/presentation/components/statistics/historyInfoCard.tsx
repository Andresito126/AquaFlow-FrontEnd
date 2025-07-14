const HistoryInfoCard = () => {
  return (
    <div className=" ">
      <h2 className="text-lg font-bold mb-2">History data</h2>
      <p className="text-sm">
        Below, you can download a short history in an Excel or PDF file.
        <br />
        Next to this card, you can see the "normal" values for each sensor, so
        you can make a detailed comparison.
      </p>
      <ul className="text-sm mt-3 list-disc list-inside">
        <li>First, you must select a date range.</li>
        <li>Next, click the "Apply Filter" button.</li>
        <li>Finally, download the format you prefer.</li>
      </ul>
    </div>
  );
};

export default HistoryInfoCard;
