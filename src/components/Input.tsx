type InputProps = {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type="number" required value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
