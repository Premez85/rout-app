import {useNavigate} from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }
    return <>
        <h1>Home Page</h1>
        <button onClick={navigateHandler}>Navigate</button>
    </>

}

export default Home;