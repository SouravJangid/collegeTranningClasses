// import { useState } from "react";

function App(p) {
  // let [num, setNum] = useState(0);
  //   function show(n,m){
  //       num=n+m;
  //     setNum(num);
  //   }

  const calculate = (operation) => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num1 / num2;
        break;
      default:
        break;
    }
    document.getElementById("result").innerText = `Result: ${result}`;
  };

  return (
    <>
      <h1 style={{ color: "#333", fontSize: "24px", textAlign: "center" }}>Calculator</h1>
      <br />
      <label style={{ fontWeight: "bold" }}>First Number:</label>
      <input
        type="number"
        id="num1"
        placeholder="Enter first number"
        style={{ marginLeft: "10px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <br />
      <br />
      <label style={{ fontWeight: "bold" }}>Second Number:</label>
      <input
        type="number"
        id="num2"
        placeholder="Enter second number"
        style={{ marginLeft: "10px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <br />
      <br />
      <div
        id="result"
        style={{
          fontWeight: "bold",
          marginTop: "10px",
          color: "#000",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        Result:
      </div>
      <br />
      <hr />
      <br />
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => calculate("add")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
        <button
          onClick={() => calculate("subtract")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Subtract
        </button>
        <button
          onClick={() => calculate("multiply")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Multiply
        </button>
        <button
          onClick={() => calculate("divide")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF9800",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Divide
        </button>
      </div>
    </>
  );
}

export default App;
