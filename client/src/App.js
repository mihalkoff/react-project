import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { authServiceFactory } from './services/authService';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Logout } from './components/Logout/Logout';


function App() {
	// users state
	const [auth, setAuth] = useState({});
	const navigate = useNavigate();
	const authService = authServiceFactory(auth.accessToken);


	const onLoginSubmit = async (data) => {
		const result = await authService.login(data);
		setAuth(result);

		navigate('/');
	};

	const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

	const contextValues = {
		onLoginSubmit,
		onLogout,
		userId: auth._id,
		token: auth.accessToken,
		userEmail: auth.email,
	};

	return (
		<AuthContext.Provider value={contextValues}>
			<>
				<Header />
				<main id="main">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/logout' element={<Logout />} />
						<Route path='/catalog' element={<Catalog />} />
						<Route path='/create' element={<Create />} />
						<Route path='/catalog/:id' element={<Details />} />
					</Routes>
				</main>
				<Footer />
			</>
		</AuthContext.Provider>
	);
}

export default App;
