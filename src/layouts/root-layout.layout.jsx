import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";



const RootLayout =  () => {
    return (  
        <>
            <Outlet /> {/* Outlet is used to show the components in the main.layout.jsx */}
            <Toaster /> {/* Add Toaster component for global notifications */}
            
        </>

    );
}

export default RootLayout;

// root-layout.layout.jsx use to wrap the main layout and show the components in the main layout.
