import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { authServiceFactory } from './services/authService';
import { comicsServiceFactory } from './services/comicsService';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Logout } from './components/Logout/Logout';
import { Page404 } from './components/Page404/Page404';


function App() {
	// users state
	const [auth, setAuth] = useState({});
	const [comics, setComics] = useState([]);
	const navigate = useNavigate();
	const authService = authServiceFactory(auth.accessToken);
	const comicsService = comicsServiceFactory(auth.accessToken);

	useEffect(() => {
        comicsService.getAll()
            .then(result => {
                setComics(result)
            })
    }, []);

	const onLoginSubmit = async (data) => {
		const result = await authService.login(data);
		setAuth(result);

		navigate('/catalog');
	};

	const onRegisterSubmit = async (values) => {
		const { confirmPassword, ...registerData } = values;

        if (confirmPassword !== registerData.password) {
			alert("Passwords don't match!");
            return;
        }

		const result = await authService.register(registerData);
		setAuth(result);

		navigate('/catalog');
	};

	const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

	const onCreateSubmit = async (data) => {
        const newComics = await comicsService.create(data);

        setComics(state => [...state, newComics]);

        navigate('/catalog');
    };

	const contextValues = {
		onLoginSubmit,
		onRegisterSubmit,
		onLogout,
		onCreateSubmit,
		comics,
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
						<Route path='*' element={<Page404 />} />
					</Routes>
				</main>
				<Footer />
			</>
		</AuthContext.Provider>
	);
}

export default App;
