import { Routes, Route } from 'react-router-dom';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';


function App() {

	return (
		<div>
			<Header />
			<main id="main">
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
