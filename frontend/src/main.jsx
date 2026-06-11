import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './stores/store.js'

import './index.css'
import App from './app/App.jsx'
import HomePage from './app/routes/Home.jsx'
import AuthenticationPage from './app/routes/Authentication.jsx'
import CategoryPreview from './app/routes/CategoryPreview.jsx'
import ErrorPage from './app/routes/ErrorPage.jsx'
import Category from './app/routes/Category.jsx'
import ProductPage from './app/routes/ProductPage.jsx'
import Checkout from './app/routes/Checkout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/authentication',
        element: <AuthenticationPage />
      },
      {
        path: '/categories/:categoryId/:productId',
        element: <ProductPage />
      },
      {
        path: '/categories/:categoryId',
        element: <Category />
      },
      {
        path: '/categories',
        element: <CategoryPreview />,
        children: [
          {
            path: ':categoryId',
            element: <Category />
          }
        ]
      },
      {
        path: '/products/:productId',
        element: <ProductPage />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
