// css
import '../assets/css/App.css';
// router components
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import components
import HomePage from "../pages/HomePage";
import PropListingsPage from '../pages/PropListingsPage';
import PropDescPage from '../pages/PropDescPage';

// at the end of development replace all API base URL with following:
// https://relax-inn-api.herokuapp.com/

const App = () => {
	return (
		// setting up router
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="properties" element={<PropListingsPage />}/>
				<Route path='properties/:id' element={<PropDescPage/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;