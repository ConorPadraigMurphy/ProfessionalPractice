import React from "react";
import Card from 'react-bootstrap/Card';
import drivingSigns from '../Images/DrivingSigns.png'

export class RevisionPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Driving Test Revision</h2>
                <p>Welcome to the Driving 101 revision page! Here you can find resources to help you prepare for your driving test.</p>
                <ul>
                    <Card style={{ width: '98%' }}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Rules of the Road</Card.Title>
                            <Card.Text>
                                The rules of the road apply to all road users, including drivers, pedestrians, cyclists, and horse riders. It's important to have a good understanding of these rules to ensure safe and responsible road use.
                                <br /><br />
                                This guide aims to promote good driving practice and courtesy on the road, based on a road safety perspective. It's not the law itself, but rather an interpretation of it. If you have any questions or concerns, consult the original legislation or ask a law enforcement officer.
                                <br /><br />
                                The guide covers many maneuvers that are commonly involved in road crashes and provides clear, concise explanations of how the law applies to all road users. It uses "must" and "must not" to highlight legal requirements and "should" and "should not" to offer guidance for situations where no legal rule exists.
                                <br /><br />
                                The guide also provides illustrations and descriptions of traffic lights, road markings, and signs used to regulate traffic.
                                <br /><br />
                                As a road user, you play a vital role in preventing accidents. Practicing good driving skills and following the rules of the road will make policies and regulations more effective, ensuring a positive impact on your life and the lives of others.
                                <br /><br />
                                It's important to note that a difference of just 5 km/h in your speed can mean the difference between life and death for vulnerable road users like pedestrians. According to research from RoSPA UK and NRH Ireland, 9 out of 10 pedestrians hit by a car at 60 km/h will be killed, compared to just 1 out of 10 at 30 km/h.
                                <br /><br />
                                All road users, but especially drivers, are expected to have good concentration, the ability to act responsibly, the ability to foresee and react to hazards, and a good level of driving control and expertise.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body style={{ width: '98%' }}>
                            <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Traffic Signs and Signals</Card.Title>
                            <Card.Img style={{ width: 500, height: 350 }} variant="top" src={drivingSigns}/>
                            <Card.Text style={{ fontSize: '16px' }}>
                                On a general note, road signs are divided into four broad aspects: regulatory road signs, warning road signs, information road signs, and motorway road signs. Some of these signs in the warning category are explained as follows:
                                <ul >
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ fontSize: '18px' }}>Dangerous corner:</strong> Road configurations can be unpredictable. The road sign for a dangerous corner is in the form of a right angle pointer, usually pointing in the direction to which the bend in question heads. This sign will help road users have an idea of which side of the road the bend is tilted to and how sharp it is. Whenever you see a warning sign of this nature, it is best to reduce your speed and pay more attention to the road.
                                    </li>
                                    <li style={{ marginBottom: '15px' }}>
                                        <strong style={{ fontSize: '18px' }}>Roundabout ahead:</strong> Roundabouts are an integral part of roads in many countries. The warning sign for a roundabout usually comes in the form of three round pointers that give them a general look of a circle of the same diameter. Once you see this, you should have it in mind that you are approaching a major roundabout. Therefore, it is expected that you reduce your speed and anticipate the situation you are going to encounter when you get to the roundabout.
                                    </li>
                                    <li>
                                        <strong style={{ fontSize: '18px' }}>Mini roundabout:</strong> This is quite different from the type of roundabout earlier described, and the size of a roundabout is very important to the attitude of the driver plying the road. A mini-roundabout warning sign has a dot in the middle, then surrounded by three curved lines towing the same diameter, making it look like a circle with three broken lines. However, the curved lines have small arrows or pointers as described in the main roundabout warning sign. Once you see this, you can expect to meet a not-so-busy roundabout. However, you still want to be careful and reduce your speed as you approach it.
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </ul>
                
            </div>
        );
    }
}
