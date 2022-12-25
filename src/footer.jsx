import react from "react";

function footer(){

    const currentyear= new Date().getFullYear();

    return <footer>
        <p>Copyright &#169; {currentyear} </p>
    </footer>
};

export default footer;