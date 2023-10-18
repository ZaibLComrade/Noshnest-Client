import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home';
import AuthProvider from "./providers/AuthProvider";
import RegisterForm from './components/register/RegisterForm';
import LoginForm from "./components/login/LoginForm";
import NotFound from './NotFound';
import AddProduct from './components/AddProduct';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path: "/*",
				element: <NotFound/>
			}, {
				path: "/",
				element: <Home/>,
			}, {
				path: "/register",
				element: <RegisterForm/>,
			}, {
				path: "/login",
				element: <LoginForm/>,
			}, {
				path: "/new",
				element: <AddProduct/>,
			},
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
