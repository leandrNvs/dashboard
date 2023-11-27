import IChildren from "@/interfaces/children";
import Image from "next/image";
import {
  BiSolidCog,
  BiSolidDashboard,
  BiSolidExit,
  BiSolidGroup,
  BiSolidHelpCircle,
  BiSolidReport,
  BiSolidShoppingBag,
  BiTransfer,
} from "react-icons/bi";
import ListLink from "../listlink";

interface ISidebarSection extends IChildren {
  title: string;
}

const SidebarSection = ({ title, children }: ISidebarSection) => {
  return (
    <div className="my-4 text-white">
      <h3>{title}</h3>
      <ul className="pt-2">{children}</ul>
    </div>
  );
};

export default function Sidebar() {
  return (
    <aside className="flex-grow-[2] bg-gray-800 p-5">
      <div className="flex items-center gap-4 text-white">
        <img
          src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="rounded-full h-16 w-16"
        />
        <div className="flex flex-col">
          <h2 className="font-bold">User 1</h2>
          <span className="text-xs">Administrador</span>
        </div>
      </div>
      <SidebarSection title="Pages">
        <ListLink
          href="/dashboard"
          text="Dashboard"
          Icon={<BiSolidDashboard />}
        />
        <ListLink href="/users" text="Users" Icon={<BiSolidDashboard />} />
        <ListLink
          href="/products"
          text="Products"
          Icon={<BiSolidShoppingBag />}
        />
        <ListLink
          href="/transactions"
          text="Transactions"
          Icon={<BiTransfer />}
        />
      </SidebarSection>
      <SidebarSection title="Pages">
        <ListLink
          href="/revenue"
          text="Revenue"
          Icon={<BiSolidShoppingBag />}
        />
        <ListLink href="/reports" text="Reports" Icon={<BiSolidReport />} />
        <ListLink href="/teams" text="Teams" Icon={<BiSolidGroup />} />
      </SidebarSection>
      <SidebarSection title="Pages">
        <ListLink href="/settings" text="Settings" Icon={<BiSolidCog />} />
        <ListLink href="/help" text="Help" Icon={<BiSolidHelpCircle />} />
        <ListLink href="/logout" text="Logout" Icon={<BiSolidExit />} />
      </SidebarSection>
    </aside>
  );
}
