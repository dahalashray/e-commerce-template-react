import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Login = () => {
  return (
    <div className="entry-container">
        <Navbar />
        <div className="entry-wrapper">
            <h1 className="entry-title">LOGIN HERE</h1>
            <form className="entry-form">
                <input placeholder="username" className="entry-input" />
                <input placeholder="password" className="entry-input" />
                <button className="entry-button">Login</button>
                <a className="entry-link">FORGET PASSWORD?</a>
                <a className="entry-link">CREATE A NEW ACCOUNT?</a>
            </form>
        </div>
        <Footer />
  </div> 
  );
};

export default Login;
