import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className=" relative w-full h-screen flex flex-col overflow-x-hidden items-center background">
      <h1 className="bg-white rounded-lg w-11/12  font-bold text-center mt-[40px] px-10 py-2 text-4xl">RANDOM GIFs</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );

}
