import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/login/Signup";
import ForgottenForm from "./components/login/Forgotten";
import Login from "./components/login/login";
import MessageModal from "./components/messages/MessageModal";

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<ForgottenForm />} path="/forgotten" />
      <Route element={<MessageModal />} path="/message" />
    </Routes>
  );
}

export default App;
