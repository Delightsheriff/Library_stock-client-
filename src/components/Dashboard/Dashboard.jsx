import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "./Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="maincontainer">
        <ChakraProvider>
          <SidebarWithHeader />
        </ChakraProvider>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
