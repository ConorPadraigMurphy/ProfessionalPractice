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

import { TestPage } from "./componenets/TestPage";
import { RevisionPage } from "./componenets/RevisionPage";
import { About } from "./componenets/About";
import { HomePageContent } from "./componenets/HomePageContent";

function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Website Name</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/TestPage">Test</Nav.Link>
              <Nav.Link href="/RevisionPage">Revision</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<HomePageContent></HomePageContent>}></Route>
          <Route path='/TestPage' element={<TestPage></TestPage>}></Route>
          <Route path='/RevisionPage' element={<RevisionPage></RevisionPage>}></Route>
          <Route path='/About' element={<About></About>}></Route>
        </Routes>
        {/* <Header></Header>
    <Content></Content>
    <Footer></Footer> */}
      </div>
    </Router>
  );
}


export default App;
