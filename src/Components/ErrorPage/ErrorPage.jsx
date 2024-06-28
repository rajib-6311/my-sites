import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
        <h1 className="  text-8xl text-center font-extrabold mt-40">Oops!!!</h1>
        <h1 className="  text-8xl text-center font-extrabold mt-4">404</h1>
    <Link to='/'><button className="btn btn-warning ml-[600px] mt-36">Go Home</button></Link>
</div>
    );
};

export default ErrorPage;