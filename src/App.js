// Routes
import PublicRoutes from "./Routes/PublicRoutes";
import { GlobalProvider } from "./Contexts/GlobalContext";

function App() {
	return (
		<div className="App">
			<GlobalProvider>
				<PublicRoutes />
			</GlobalProvider>
		</div>
	);
}

export default App;
