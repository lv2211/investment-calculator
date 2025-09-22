import { useState } from "react";
import Header from "./components/Header";
import InvestmentUserInput from "./components/InvestmentUserInput";
import TableResult from "./components/TableResult";

export type InvestmentInput = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

function App() {
  const [userInput, setUserInput] = useState<InvestmentInput>({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  const handleChange = (inputIdentifier: string, newValue: number) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: newValue,
      };
    });
  };
  return (
    <>
      <Header headerTitle="Investment Calculator" />
      <InvestmentUserInput userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <TableResult input={userInput} />}
    </>
  );
}

export default App;
