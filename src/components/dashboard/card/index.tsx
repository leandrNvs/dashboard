import { BiGlobe } from "react-icons/bi";

export default function Card() {
  return (
    <div className="text-white bg-gray-800 p-4 rounded-lg flex gap-3 flex-1">
      <BiGlobe className="text-3xl" />
      <div className="flex flex-col gap-3">
        <h4 className="mt-0">Total users</h4>
        <span className="text-3xl font-semibold">10.928</span>
        <span className="flex gap-1 text-xs">
          <span className="text-green-500">12%</span>
          more than previous week
        </span>
      </div>
    </div>
  );
}
