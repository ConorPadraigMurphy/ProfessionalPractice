import React from "react";
//Import icons - FontAwesome
import { FaCar,FaTractor } from "react-icons/fa";
import { Link } from "react-router-dom";

export class HomePageContent extends React.Component {  

    render() {
        return (
            <div>
                <div  className="App" >
                    <div style={{  margin: '20px', background:'#D3D3D3', padding: '50px 50px 50px 50px', border: '2px solid #4a4a4a'}}>
                        <h2>Welcome to Driving 101</h2>
                        <p>Learn and do Mock Theory Test.</p>
                        <Link to={'/TestPage'} style={{ marginRight: "auto" }} className="btn btn-success">Start Test</Link>
                    </div>
                    <div style={{ margin: '20px', background:'#D3D3D3', padding: '50px 50px 50px 50px',border: '2px solid #4a4a4a' }}>
                        <h2>Book your driving theory</h2>
                        <p>Click below to book your theory test now with the RSA.</p>
                        <Link to={'https://theorytest.ie/book-your-theory-test/'} style={{ marginRight: "auto" }} className="btn btn-success">Book Test</Link>
                    </div>
                    <div style={{ margin: '20px', background:'#D3D3D3', padding: '50px 50px 50px 50px',border: '2px solid #4a4a4a' }}>
                        <h2>Vehicles Covered</h2>
                        <p> <FaCar/> B Car and light van</p>
                        <p><FaTractor/> W Tractor and works vehicle</p>
                    </div>
                </div>
            </div>
        );
    }
}