import "./header.css";

interface HeaderProps {
  text:string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <h3>{props.text}</h3>
      <div>{props.children}</div>
    </header>
  );
};

export default Header;