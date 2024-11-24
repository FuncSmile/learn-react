import Button from "./components/elements/Button";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4">
      <Button color={"red-500"} colorHov={"red-700"}></Button>
      <Button color={"sky-500"} colorHov={"sky-700"}></Button>
    </div>
  );
}

export default App;
