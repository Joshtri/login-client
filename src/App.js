import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import DataFacebak from "./components/DataFacebak";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{/* Protected routes */}
			<Route path="/" element={<ProtectedRoute element={Main} />} />
			<Route path="/Facebak" element={<ProtectedRoute element={DataFacebak} />} />

			{/* Public routes */}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />

			{/* Redirect to login by default if route not found */}
			<Route path="*" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
