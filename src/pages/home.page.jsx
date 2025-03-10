import { toast } from "sonner";
import { Button } from "@/components/ui/button";


const HomePage = () => {

  const ClickHandle = () => {
    toast.success("welcome to the demo project");
  };

  return (
    <main>
      <div className="text-left">
        <h1 className="p-5 text-4xl font-bold">Demo React project</h1>
        <p className="px-5 text-2xl "> Vite + Shadcn + Tailwind css + Redux + RTK Quary</p>
        <Button onClick={ClickHandle} className="mx-5 my-2"> Demo</Button>
      </div>
    </main>
  );
};

export default HomePage;
