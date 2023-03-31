import { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const onChangeNum1 = (e) => {
    setNum1(e.target.value);
  };

  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };
  const checkNum = (n1, n2) => {
    if (n1 === "" || n2 === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (isNaN(n1) || isNaN(n2)) {
      alert("숫자를 입력해주세요.");
      return;
    }
  };

  const onClickAdd = () => {
    // if(문자를 입력한 경우)  alert (문자가 들어왔습니다.) return;
    // if (typeof parseInt(num1) !== Number) {
    //   console.log("숫자가 입력해주세요.");
    checkNum(num1, num2);

    setResult(parseInt(num1) + parseInt(num2));
  };

  const onClickSubtract = () => {
    checkNum(num1, num2);
    setResult(parseInt(num1) - parseInt(num2));
  };
  const onClickMultiply = () => {
    checkNum(num1, num2);
    setResult(parseInt(num1) * parseInt(num2));
  };
  const onClickDivide = () => {
    checkNum(num1, num2);
    setResult(parseInt(num1) / parseInt(num2));
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">
        Awesome한 계산기..로 바뀔 예정
      </h1>
      <div className="text-3xl font-black mb-4">{result}</div>
      <div className="mb-4">
        <input
          className="border-2 focus:outline-none focus:border-puple-400 rounded-lg px-4 py-2 text-xl"
          type="text"
          value={num1}
          onChange={onChangeNum1}
        />
        <input
          className="border-2 focus:outline-none focus:border-puple-400 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button
          onClick={onClickAdd}
          className="border-2 px-2 py-1 rounded-lg border-red-500 text-red-500 "
        >
          Add
        </button>
        <button
          onClick={onClickSubtract}
          className="border-2 px-2 py-1 rounded-lg border-blue-500 text-blue-500 ml-4"
        >
          Subtract
        </button>
        <button
          onClick={onClickMultiply}
          className="border-2 px-2 py-1 rounded-lg border-yellow-500 text-yellow-500 ml-4"
        >
          Multiply
        </button>
        <button
          onClick={onClickDivide}
          className="border-2 px-2 py-1 rounded-lg border-green-500 text-green-500 ml-4"
        >
          Divide
        </button>
      </div>
    </div>
  );
};

export default App;
