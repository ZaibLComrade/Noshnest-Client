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
import PrivateRoute from "./PrivateRoute";
import BrandsProvider from './providers/BrandsProvider';
import ProductPage from './components/brand/ProductsPage';
import ProductDetails from './components/brand/ProductDetails';
import ProductUpdate from './components/brand/ProductUpdate';
import Cart from './components/Cart';

const server = "http://localhost:5000";

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
				element: <PrivateRoute><Cart/></PrivateRoute>,
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

// Banner Img links
// https://i.postimg.cc/tJmJVcvn/alessandro-d-antonio-qy4vrr2qi3-M-unsplash-min-min.jpg
// https://i.postimg.cc/tTps0WVJ/lucas-santos-JKa-KXJOIde-M-unsplash-min.jpg
// https://i.postimg.cc/sX4Z1wR5/maximilian-bruck-4-SKd-Rc-Y13j4-unsplash-min-min.jpg

