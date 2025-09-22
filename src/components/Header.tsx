import logoImage from "../assets/investment-calculator-logo.png";

const Header = ({ headerTitle }: { headerTitle: string }) => {
  return (
    <div id="header">
      <img src={logoImage} alt="Alt Logo" />
      <h1>{headerTitle}</h1>
    </div>
  );
};

export default Header;
