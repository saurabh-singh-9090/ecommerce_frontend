import React from 'react';
import Menu from './Menu';
import "../styles.css";
import { Link } from 'react-router-dom';


const Base = ({
    //props [values passed to props are default values]
    title = "My Title",
    description = "My Description",
    className = "text-white p-4",
    children //it refers to JSX embedded apart from the Base component in other Components
}) => {
    return (
        <div>
        <Menu/>
        <div className="container-fluid">
            <div className="title text-white text-center">
                 <h2 className="display-5">{title}</h2>
                 <p className="lead">{description}</p>
            </div>
              <div className={className}>{children}</div>
        </div>
        <footer className="footerColor   py-1">
             <div className="container-fluid text-center py-3">
                 <h4>Got any questions,feel free to reach out !!</h4>
                 <Link to={"/contact"} className="btn btn-primary btn-lg">Contact Us</Link>
             </div>
             <div className="container">
                 <span className="text-muted">© 2022 saurabhsingh.com</span>
             </div>

        </footer>
    </div>
    );
}

export default Base;
