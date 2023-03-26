import { Routes, Route } from 'react-router-dom';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header.js/Header";
import { Home } from './components/Home/Home';


function App() {

	return (
		<div>
			<Header />
			<main id="main">
				<Home />
			</main>
			<Footer />
		</div>
	);
}

export default App;
