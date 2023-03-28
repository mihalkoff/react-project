import { Routes, Route } from 'react-router-dom';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';


function App() {

	return (
		<div>
			<Header />
			<main id="main">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
