import Card from "@/components/dashboard/card";
import Navbar from "@/components/dashboard/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex gap-3 mt-4 flex-grow-[1]">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex-grow-[2]"></div>
      </div>
    </>
  );
}
