import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';

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
		<RouterProvider router={ router }/>
	</React.StrictMode>,
)
