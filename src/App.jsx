import Navbar from "./components/Navbar";
import ChangeName from "./components/ChangeName";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container pt-10 mx-auto">
        <div className="flex justify-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-300 to-red-400">
            Hello, world!
          </h1>
        </div>
        <div className="mt-20 flex justify-center">
          <ChangeName />
        </div>
      </div>
    </div>
  );
};

export default App;
