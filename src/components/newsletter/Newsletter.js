import './newsletter.css'
import { Send } from '@material-ui/icons'

const Newsletter = () => {
    return (
        <div className="nl-container">
            <h1 className="nl-title">Newsletter</h1>
            <div className="nl-desc">Stayed updated for brand new products.</div>
            <div className="nl-input">
                <input className="nl-email" placeholder="Your email" />
                <button className="nl-button">
                    <Send />
                </button>
            </div>
        </div>
    )
}

export default Newsletter
