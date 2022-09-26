import logo from '../icons/logo.svg'

const styles = {
  maxWidth: "200px",
}

const Logo = (props) => (
  <img
    alt="Logo"
    src={logo}
    {...props}
    style={styles}
  />
);

export default Logo;
