import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        click me!
      </button>
    );
  }
}

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button></Button>
    </div>
  );
}

export default App;
