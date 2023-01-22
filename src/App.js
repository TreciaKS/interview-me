// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import EmailSubmission from './components/EmailSubmission'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/EmailSubmission" element={<EmailSubmission />} />
      </Routes>
    </>
  );
}

export default App;
