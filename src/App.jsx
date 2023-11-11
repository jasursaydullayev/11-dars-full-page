  import { createBrowserRouter, RouterProvider  } from "react-router-dom"
  import RootLayout from "./layout/RootLayout"
  import Signup from "./components/SignUp"
  import Login from "./components/Login"
  import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
  function App() {
    const routes = createBrowserRouter([
      {
        path: '/',
        element: <RootLayout/>,
        children: [
          {
            index: true,
            element: <Home/>
          },
          {
            path: 'about',
            element: <About/>
          },
  
          {
            path: 'contact',
            element: <Contact/>
          },
          {
            path: 'signup',
            element: <Signup/>
          },
          {
            path: 'login',
            element: <Login/>
          },
        ]
      },
    ])
    return <RouterProvider router={routes}/>
  }

  export default App 