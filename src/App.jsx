import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import ChatScreen from "./components/ChatScreen";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        >
          <Route index element={<Home />} />
          <Route path="chat" element={<ChatScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}
