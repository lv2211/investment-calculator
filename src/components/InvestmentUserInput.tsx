import type { InvestmentInput } from "../App";
import Input from "./Input";

type InvestmentUserInputProps = {
  userInput: InvestmentInput;
  handleChange: (inputIdentifier: string, newValue: number) => void;
};
const InvestmentUserInput = ({
  userInput,
  handleChange,
}: InvestmentUserInputProps) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          value={userInput.initialInvestment}
          onChange={(event) =>
            handleChange("initialInvestment", Number(event.target.value))
          }
        />
        <Input
          label="Annual Investment"
          value={userInput.annualInvestment}
          onChange={(event) =>
            handleChange("annualInvestment", Number(event.target.value))
          }
        />
        <Input
          label="Expected Return"
          value={userInput.expectedReturn}
          onChange={(event) =>
            handleChange("expectedReturn", Number(event.target.value))
          }
        />
        <Input
          label="Duration"
          value={userInput.duration}
          onChange={(event) =>
            handleChange("duration", Number(event.target.value))
          }
        />
      </div>
    </section>
  );
};

export default InvestmentUserInput;
