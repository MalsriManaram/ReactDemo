import { Outlet } from "react-router";
import Navigation from "@/components/Navigation";


const MainLayout =  () => {
    return (  
        <>

            <Navigation /> {/* Navigation component */}
            <Outlet /> {/* Outlet is used to show the components in the main layout. */}
        </>

    );
}

export default MainLayout;

// main.layout.jsx use to wrap the components and show the components in the main layout.