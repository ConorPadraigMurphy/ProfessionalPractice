import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { RevisionPage } from "./componenets/RevisionPage";
import { About } from "./componenets/About";
import { HomePageContent } from "./componenets/HomePageContent";
import {TestPage} from "./componenets/TestPage";
import {LeaderboardPage} from "./componenets/LeaderboardPage";
import Results from "./componenets/Results";
//Import icons - FontAwesome
import { FaHome, FaClock,FaBookOpen,FaQuestionCircle, FaMedal } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Driving 101</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/"><FaHome/> Home</Nav.Link>
              <Nav.Link href="/TestPage"><FaClock/> Test</Nav.Link>
              <Nav.Link href="/RevisionPage"><FaBookOpen/> Revision</Nav.Link>
              <Nav.Link href="/LeaderboardPage"><FaMedal/> LeaderboardPage</Nav.Link>
              <Nav.Link href="/About"><FaQuestionCircle/> About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<HomePageContent></HomePageContent>}></Route>
          <Route path='/TestPage' element={<TestPage></TestPage>}></Route>
          <Route path='/RevisionPage' element={<RevisionPage></RevisionPage>}></Route>
          <Route path='/LeaderboardPage' element={<LeaderboardPage></LeaderboardPage>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/TestPage/Results' element={<Results></Results>}></Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
