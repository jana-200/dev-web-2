import "./Header.css";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <div>{props.children}</div>
    </header>
  );
};

export default Header;