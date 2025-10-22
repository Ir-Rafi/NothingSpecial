import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./FrontPage";
import BirthdayPage from "./BirthdayPage";
import MessagePage from "./MessagePage/MessagePage";

export default function App() {
  return (
    <BrowserRouter basename="/NothingSpecial">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/message" element={<MessagePage />} /> {/* ✅ add this */}
      </Routes>
    </BrowserRouter>
  );
}
