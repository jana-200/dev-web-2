import './footer.css';

interface FooterProps{ 
    theme: "light" | "dark";
    handleThemeChange: () => void;
}

const Footer = ({theme, handleThemeChange}: FooterProps) => {

    return (
        <footer className="footer">
      <button
        onClick={handleThemeChange}
        style={{ backgroundColor: theme === "dark" ? "" : "#333" }}
      >
        {theme === "light" ? "switch to dark mode" : "switch to light mode"}
      </button>
    </footer>
    );
};

export default Footer;