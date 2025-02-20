import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentage, setPercentage] = useState("0");
  const [percentageSec, setPercentageSec] = useState("0");

  return (
    <>
      <Bill bill={bill} onSetBill={setBill} />

      <SelectPercentage percentage={percentage} onSelect={setPercentage}>
        How did you like the service?
      </SelectPercentage>

      <SelectPercentage percentage={percentageSec} onSelect={setPercentageSec}>
        How did your friend like the service?
      </SelectPercentage>

      <Pay bill={bill} percentage={percentage} percentageSec={percentageSec} />

      <Reset
        setBill={setBill}
        setPercentage={setPercentage}
        setPercentageSec={setPercentageSec}
        bill={bill}
      />
    </>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill ?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={percentage} onChange={(e) => onSelect(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Okay (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </div>
  );
}

function Pay({ bill, percentage, percentageSec }) {
  const tip = (((Number(percentage) + Number(percentageSec)) / 2) * bill) / 100;
  const pay = bill + tip;

  return  bill ? <h3>You Pay ${pay}$ ({bill} + {tip}$ tip)</h3> : null;
}

function Reset({ setPercentage, setPercentageSec, setBill, bill }) {
  function resetInputes() {
    setBill(0);
    setPercentage("0");
    setPercentageSec("0");
  }

  return bill ? <button onClick={resetInputes}>Reset</button> : null;
}
