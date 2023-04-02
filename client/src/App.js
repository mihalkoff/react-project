import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import * as authService from './services/authService';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';


function App() {
	// users state
	const [auth, setAuth] = useState({});

	const navigate = useNavigate();

	const onLoginSubmit = async (data) => {
		const result = await authService.login(data);
		setAuth(result);

		navigate('/');
	};

	const context = {
		onLoginSubmit,
		userId: auth._id,
		token: auth.accessToken,
		userEmail: auth.email,
	};

	return (
		<AuthContext.Provider value={context}>
			<div>
				<Header />
				<main id="main">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/catalog' element={<Catalog />} />
						<Route path='/create' element={<Create />} />
						<Route path='/catalog/:id' element={<Details />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</AuthContext.Provider>
	);
}

export default App;
