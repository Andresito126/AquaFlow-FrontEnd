import LayerFilter from "../../../../core/assets/icons/dashboard/icon-layer-filter.svg";

export default function LayerCard() {
  return (



      <div className="flex flex-col items-center justify-center bg-[#011521] p-6 rounded-xl w-1/3">
        <h2 className="text-lg font-bold mb-4">Capas del filtrador</h2>
        <div className="relative w-12 h-12">
       <img src={LayerFilter} alt="" />
        </div>
      </div>


  );
}
