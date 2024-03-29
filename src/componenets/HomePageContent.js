import React from "react";
//Import icons - FontAwesome
import { FaCar, FaTractor } from "react-icons/fa";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';


export class HomePageContent extends React.Component {

    constructor() {
        super();
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            amount: 0,
            questionAmount: 0
        }
    }

    //When submit button is pressed
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.questionAmount}`);
        this.setState({
            amount: 0
        })

    }

    onChangeAmount(e) {
        this.setState({
            amount: e.target.questionAmount
        })
    }

    handleRadioButton(questionAmount) {
        this.setState({
            questionAmount: questionAmount
        });
        localStorage.questionAmount = questionAmount;
        console.log(localStorage.questionAmount);
    }

    render() {
        return (
            <div>
                <div className="App" >
                    <div style={{ margin: '20px', background: '#D3D3D3', padding: '50px 50px 50px 50px', border: '2px solid #4a4a4a' }}>
                        <h2>Welcome to Driving 101</h2>
                        <p>Learn and do Mock Theory Test.</p>
                        {/* <Link to={'/TestPage'} style={{ marginRight: "auto" }} className="btn btn-success">Start Test</Link> */}

                        <Popup trigger={<Button variant="success"> Start Test </Button>} modal>
                            <Card style={{ width: '99%' }} >
                                <Card.Body>
                                    <Card.Title>Question Amount:</Card.Title>
                                    <Card.Text>Please choose how many questions you would like the test to have:</Card.Text>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="radio" id="amount5" name="amount" checked={this.state.questionAmount === 5} onChange={() => this.handleRadioButton(5)} required />
                                            <label for="amount5">5 Questions</label>
                                            <br></br>
                                            <input type="radio" id="amount15" name="amount" checked={this.state.questionAmount === 15} onChange={() => this.handleRadioButton(15)} required />
                                            <label for="amount15">15 Questions</label>
                                            <br></br>
                                            <input type="radio" id="amount20" name="amount" checked={this.state.questionAmount === 20} onChange={() => this.handleRadioButton(20)} required />
                                            <label for="amount20">20 Questions</label>
                                            <br></br>
                                        </div>
                                        <Link to={{ pathname: '/testpage', state: { questionAmount: this.state.questionAmount } }}>
                                            <Button variant="success" type="submit" value="Submit" style={{ margin: "10px" }}>Start</Button>
                                        </Link>
                                        <br></br>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Popup>

                    </div>
                    <div style={{ margin: '20px', background: '#D3D3D3', padding: '50px 50px 50px 50px', border: '2px solid #4a4a4a' }}>
                        <h2>Book your driving theory</h2>
                        <p>Click below to book your theory test now with the RSA.</p>
                        <Link to={'https://theorytest.ie/book-your-theory-test/'} style={{ marginRight: "auto" }} className="btn btn-success">Book Test</Link>
                    </div>
                    <div style={{ margin: '20px', background: '#D3D3D3', padding: '50px 50px 50px 50px', border: '2px solid #4a4a4a' }}>
                        <h2>Vehicles Covered</h2>
                        <p> <FaCar /> B Car and light van</p>
                        <p><FaTractor /> W Tractor and works vehicle</p>
                    </div>
                </div>
            </div>
        );
    }
}