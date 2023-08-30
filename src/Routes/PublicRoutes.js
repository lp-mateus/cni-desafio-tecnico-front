import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import PageWelcome from "../Pages/PageWelcome";
import PageDashboard from "../Pages/PageDashboard";

const PublicRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageWelcome />} />
				<Route path="/dashboard" element={<PageDashboard />} />
				<Route path="*" element={<h1>404 - PAGE NOT FOUND</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default PublicRoutes;
