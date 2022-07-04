import './entry.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Register = () => {
  return (
    <div className="entry-container">
        <Navbar />
        <div className="entry-wrapper">
            <h1 className="entry-title">REGISTER HERE</h1>
            <form className="entry-form">
                <input placeholder="first name" className="entry-input" />
                <input placeholder="last name" className="entry-input" />
                <input placeholder="email" className="entry-input" />
                <input placeholder="username" className="entry-input" />
                <input placeholder="password" className="entry-input" />
                <input placeholder="confirm password" className="entry-input" />
                <div className="agreement">
                    By creating an account, I hereby consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY.</b>
                </div>
                <button className="entry-button">Create</button>
            </form>
        </div>
        <Footer />
  </div>    
  );
};

export default Register;
