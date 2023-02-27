import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import { UserAuthContectProvider } from './context/userAuthContext';

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContectProvider>
            <Routes>
              <Route path="/home" element={<ProtectedRoute>
                <Home/>
              </ProtectedRoute>}>
              </Route>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContectProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;