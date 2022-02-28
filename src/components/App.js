// router components
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import components
import HomePage from "../pages/HomePage";

const App = () => {
	return (
		// setting up router
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;