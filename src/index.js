import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './BusinessLogic/routers/App';
import { Provider } from 'react-redux';
import { store } from './BusinessLogic/redux/store/store';
import './UI/assets/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
