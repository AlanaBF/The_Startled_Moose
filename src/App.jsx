import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";

import { Home, AboutMe, Gallery, Contact, NotFound } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer/";
import "./assets/styles/pages.css"
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

const Root = () => {
  return (
    <div className="page-container">
      <div>
        <Header />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
