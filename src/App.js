import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("0");
  const [diff, setDiff] = useState("0");

  function handleInput(event) {
    // Untuk validasi input masuk hanya numerik
    // Replace untuk hapus titik
    if (event >= 0) {
      setValue(event.replace(".", ""));
    }
  }

  function onSubmit() {
    var res = "";
    for (var i = value.length - 1; i >= 0; i--) {
      //Jika angka terakhir 0, akan di skip
      if (i === value.length - 1 && value[i] === "0") {
        continue;
      }
      res += value[i];
    }

    var dif = res - value;
    if (dif < 0) {
      dif = -dif;
    }

    // Set Value
    setResult(res);
    setDiff(dif);
  }

  return (
    <div className="App">
      <div>
        {/* Dibuat type text agar 'e' tidak bisa masuk */}
        Number:{" "}
        <input
          type="text"
          value={value}
          onChange={(event) => handleInput(event.target.value)}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
      <div>
        Result: {diff} , {result}
      </div>
    </div>
  );
}
