import { useState } from "react";

// let noUseState = 0;

// noUseState = 1;
const App = () => {
  const [count, setCount] = useState(0);
  const onClickAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
    </div>
  );
};

// const onClickAdd = () => {
//   // noUseState = noUseState + 1;
//   console.log("Clicked!");
//   noUseState += 1;
// };

export default App;
