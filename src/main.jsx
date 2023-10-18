import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home';
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path: "/",
				element: <Home/>,
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={ router }/>
		</AuthProvider>
	</React.StrictMode>,
)
