import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNavBar from "./exam/MainNavBar";
import Home from "./exam/Home";
import BookRegistration from "./exam/BookRegistration";
import BookList from "./exam/BookList";
import ApiDemo from "./exam/ApiDemo";

function App() {
  return (
    <BrowserRouter>

      <MainNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<BookRegistration />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/api" element={<ApiDemo />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;