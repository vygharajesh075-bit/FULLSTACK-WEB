import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <NavLink to="/dashboard">🏠 Dashboard</NavLink>
       

       \
       
        <NavLink to="/diary">📖 Diary</NavLink>
        <NavLink to="/movies">🎬 Movies</NavLink>
        <NavLink to="/ai">🤖 AI Assistant</NavLink>
        <Link to="/weather">🌦️ Weather</Link>
        <NavLink to="/study">📚 StudyHub</NavLink>
        <NavLink to="/todo">📝 Todo</NavLink>
      </div>

      <div className="nav-right">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}