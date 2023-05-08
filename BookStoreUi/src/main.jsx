import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores';
import Footer from './components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<Provider store={store}>
					<Navbar>
						<App />	
					</Navbar>
					<Footer/>
				</Provider>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
);
