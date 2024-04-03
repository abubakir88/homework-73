import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Students from "./components/Students";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Read from "./components/Read";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import Teachers from "./components/Teachers";
import AddTeach from "./components/AddTeach";
import ReadTeach from "./components/ReadTeach";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "./components/Auth";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <Router>
      <div>
        <AuthProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Students />
                </RequireAuth>
              }
            />
            <Route
              path="/posts"
              element={
                <RequireAuth>
                  <Posts />
                </RequireAuth>
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/Add" element={<Add />} />
            <Route path="/Edit/:id" element={<Edit />} />
            <Route path="/Read/:id" element={<Read />} />
            <Route path="/students" element={<Students />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/AddTeach" element={<AddTeach />} />
            <Route path="/ReadTeach/:id" element={<ReadTeach />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
