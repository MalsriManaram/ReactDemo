import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/root-layout.layout";
import MainLayout from "./layouts/main.layout";
import HomePage from "./pages/home.page";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}> 
          <Route element={<MainLayout />} > 
            <Route path="/" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
