import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "./Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="maincontainer">
        <ChakraProvider>
          <SidebarWithHeader>
            <main>
              <Outlet />
            </main>
          </SidebarWithHeader>
        </ChakraProvider>
      </div>
    </>
  );
}

export default Dashboard;
