
import prof from './prof.jpeg'
import './Home.css'
import { useNavigate } from 'react-router-dom'; 
import logo from './mainlogo.png'
import { useEffect } from 'react';


const Home: React.FC = () => {
    const router = useNavigate();
    const about = () =>{
        router('/about');
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container">
            <div className="image-container">
                <img src={logo} alt="first" className="image initial" />
                <img src={prof} alt="second" className="image transformed"/>
            </div>
            <h1>Harry Schlechter</h1>
            <hr></hr>
            <h2 className="bio">Software engineer with a diverse background in full-stack development, a B.S. in Computer Science & Psychology, and a passion for science, healthcare, and helping others</h2>
            <button className="learn" onClick={about}>Learn More</button>
        </div>
    )
};

export default Home;