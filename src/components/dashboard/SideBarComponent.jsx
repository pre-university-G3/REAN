import React from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function SideBarComponent() {
  return (
    <Sidebar className="h-screen fixed" aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/dashboard" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem href="#" icon={HiInbox} label="3">
            Inbox
          </SidebarItem>
          <SidebarItem href="#" icon={HiShoppingBag}>
            Courses
          </SidebarItem>
          <SidebarItem href="#" icon={HiArrowSmRight}>
            Create Admin
          </SidebarItem>
          <SidebarItem href="#" icon={HiTable}>
            Log Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
