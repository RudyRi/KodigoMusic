import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//import './App.css'
import { HomePage } from './Pages/HomePage'
import { LoginPage } from './Pages/LoginPage'
import { ProductsPage } from './Pages/ProductsPage'
import { Signin } from './components/SignIn'
import './CSS/main.css'

function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/SignIn', element: <Signin />},
    {path: '/login', element: <LoginPage />},
    {path: '/auth/products', element: <ProductsPage />}
  ])

  return (
    <>
      <RouterProvider router ={routes} />
    </>
  )
}

export default App
