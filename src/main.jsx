import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import App from './App'
import Details from './Details';
import './index.css'
import 'remixicon/fonts/remixicon.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App/>} />
				<Route path=":CCA"element={<Details/>} />
			</Routes>
    </Router>
  </React.StrictMode>
)
