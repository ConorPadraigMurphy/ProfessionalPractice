import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export class About extends React.Component {
    render() {
        return (
            <div className="App" >
                <Card style={{ margin: '20px' }}>
                    <Card.Header><h3>About:</h3></Card.Header>
                    <Card.Body>This website was developed by Rohan and Conor for our Professional practice in IT assignment in our third year of computing in software development in ATU.</Card.Body>
                    <Card.Subtitle>Contact Us</Card.Subtitle>
                    <Card.Text>Please contact us through our Github if you would like to learn more about this project or have any questions.</Card.Text>
                    <Link to={'https://github.com/ConorPadraigMurphy/ProfessionalPractice'}>
                        <Button variant="success" type="submit" value="Submit" style={{ margin: "10px" }}>Check out our code at GitHub!</Button>
                    </Link>
                </Card>

                <Card style={{ margin: '20px' }}>
                    <Card.Header><h3>Our Goal:</h3></Card.Header>
                    <Card.Body>The goal of our project is to make a functional website that users can use to study for their driver’s theory test as well as do mock exams in preparation for their actual drivers theory test. Where users can take a mock theory test as well as study for the questions that come up that may come up on the test.</Card.Body>
                </Card>
                <Card style={{ margin: '20px' }}>
                    <Card.Header><h3>Tech behind the scene:</h3></Card.Header>
                    <Card.Body>This website created using MERN "MongoDB, ExpressJS, React and Node". We created our own server using express to handle the backend and MongoDB as our database. For testing we used Selenium IDE for front-end testing and Postman to test our API's that we created. All Tech are linked below if you wish to use or learn more about them.</Card.Body>
                    <div>
                        <Link to={'https://www.mongodb.com/'}>
                            <Button variant="success" type="submit" value="Submit" style={{ margin: "10px" }}>MongoDB</Button>
                        </Link>
                        <Link to={'https://react.dev/'}>
                            <Button variant="success" type="submit" value="Submit" style={{ margin: "10px" }}>React</Button>
                        </Link>
                        <Link to={'https://expressjs.com/'}>
                            <Button variant="success" type="submit" value="Submit" style={{ margin: "10px" }}>ExpressJS</Button>
                        </Link>
                        <Link to={'https://nodejs.org/en'}>
                            <Button variant="success" type="submit" value="Submit" style={{ margin: "10px" }}>Node</Button>
                        </Link>
                        <Link to={'https://www.selenium.dev/selenium-ide/'}>
                            <Button variant="success" type="submit" value="Submit" style={{ margin: "10px" }}>Selenium</Button>
                        </Link>
                        <Link to={'https://www.postman.com/'}>
                            <Button variant="success" type="submit" value="Submit" style={{ margin: "10px" }}>Postman</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        );
    }
}
