import Sidebar from "@/components/dashboard/sidebar";
import IChildren from "@/interfaces/children";

export default function DashboardLayout({ children }: IChildren) {
  return (
    <section className="min-h-screen bg-gray-900 flex gap-8">
      <Sidebar />
      <div className="flex-grow-[15]">{children}</div>
    </section>
  );
}
