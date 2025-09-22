import type { InvestmentInput } from "../App";
import { calculateInvestmentResults, formatter } from "../utils/investment";

type TableResultProps = {
  input: InvestmentInput;
};

const TableResult = ({ input }: TableResultProps) => {
  const data = calculateInvestmentResults(input);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  // ! LOG
  console.log("Investment data", data);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Investment</th>
          <th>Investment Captial</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;

          const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableResult;
