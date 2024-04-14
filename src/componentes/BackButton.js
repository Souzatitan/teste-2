import './BackButton.css'
import { Link } from 'react-router-dom';

function BackButton() {

    const redirectPage = () => {
        window.location.replace('https://google.com/');
    }

    return (
        <span className="register-box-back">
            <p onClick={redirectPage}>Voltar</p>
        </span>
    )
}

export default BackButton