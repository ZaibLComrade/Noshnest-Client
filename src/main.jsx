import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import AuthProvider from "./providers/AuthProvider";
import RegisterPage from './components/register/RegisterPage';
import LoginPage from "./components/login/LoginPage";
import NotFound from './NotFound';
import AddProduct from './components/AddProduct';
import PrivateRoute from "./PrivateRoute";
import BrandsProvider from './providers/BrandsProvider';
import ProductPage from './components/brand/ProductsPage';
import ProductDetails from './components/brand/ProductDetails';
import ProductUpdate from './components/brand/ProductUpdate';
import Cart from './components/Cart';

const server = "https://noshnest-server.vercel.app";

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
				element: <RegisterPage/>,
			}, {
				path: "/login",
				element: <LoginPage/>,
			}, {
				path: "/products/new",
				element: <PrivateRoute>
					<BrandsProvider>
						<AddProduct/>
					</BrandsProvider>
				</PrivateRoute>,
			}, {
				path: "/products/:brand",
				element: <ProductPage/>,
				loader: ({ params }) => fetch(`${server}/products/brands/${params.brand}`)
			}, {
				path: "/products/details/:id",
				element: <PrivateRoute><ProductDetails/></PrivateRoute>,
				loader: ({ params }) => fetch(`${server}/products/details/${params.id}`),
			}, {
				path: "/products/update/:id",
				element: <PrivateRoute>
					<BrandsProvider>
						<ProductUpdate/>
					</BrandsProvider>
				</PrivateRoute>,
				loader: ({ params }) => fetch(`${server}/products/details/${params.id}`),
			}, {
				path: "/cart/:id",
				element: <Cart/>,
				loader: ({ params }) => fetch(`${server}/cart/${params.id}`)
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
