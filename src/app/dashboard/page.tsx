import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";

export default function Page() {
  return (
    <section className="min-h-screen bg-gray-900 flex gap-8">
      <Sidebar />
      <div className="flex-grow-[10]">
        <Navbar />
      </div>
    </section>
  );
}
