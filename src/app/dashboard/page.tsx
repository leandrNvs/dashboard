import Card from "@/components/dashboard/card";
import Navbar from "@/components/dashboard/navbar";
import Table from "@/components/dashboard/table";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="w-[75%]">
        <div className="flex gap-3 mt-4">
          <Card />
          <Card />
          <Card />
        </div>
        <Table />
      </div>
    </>
  );
}
