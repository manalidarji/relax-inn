// css
import '../assets/css/App.css';
// router components
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import components
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import LogoutPage from '../pages/LogoutPage';
import PropListingsPage from '../pages/PropListingsPage';
import PropDescPage from '../pages/PropDescPage';
import PropTypePage from '../pages/PropTypePage';
import NotFound404 from '../pages/NotFound404';

const App = () => {
	return (
		// setting up router
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />}/>
				<Route path='signup' element={<SignUpPage />} />
				<Route path='login' element={<LoginPage/>} />
				<Route path='dashboard' element={<DashboardPage/>}/>
				<Route path='logout' element={<LogoutPage />} />
				<Route path='properties' element={<PropListingsPage />}/>
				<Route path='properties/:id' element={<PropDescPage/>} />
				<Route path='propertyTypes/:type' element={<PropTypePage />}/>
				<Route path='*' element={<NotFound404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;