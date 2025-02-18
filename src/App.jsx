import { Button } from "./components/ui/button";


function App() {
  const ClickHandle = () => {
    alert("Demo button clicked");
  };

  return (
    <>
    <div className="text-left">
      <h1 className="p-5 text-4xl font-bold">Demo React project</h1>
      <p className="px-5 text-2xl "> Vite + Shadcn + Tailwind css</p>
      <Button onClick={ClickHandle} className="mx-5 my-2"> Demo</Button>
    </div>

    </>
  );
};

export default App
