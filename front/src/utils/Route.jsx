import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import Spinner from "../components/Spinner";
const Home = lazy(() => import("../pages/Home"));

const Classification = lazy(() => import("../pages/Classification"));
const Category = lazy(() => import("../pages/Category"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Product = lazy(() => import("../pages/Product"));
const Shoppincart = lazy(() => import("../pages/Shoppincart"));
const Favorites = lazy(() => import("../pages/Favorites"));
const Payment = lazy(() => import("../pages/Payment"));
const Test = lazy(() => import("../pages/Test"));
const Test1 = lazy(() => import("../pages/Test1"));

const Approutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:classificationId" element={<Classification />} />
        <Route path="/:classificationId/:categoryId" element={<Category />} />
        <Route path="/style/:sku_code" element={<Product />} />
        <Route path="/shopping_cart" element={<Shoppincart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/order/checkout" element={<Payment />} >
          <Route index element={<Payment />} />
        </Route>
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test1" element={<Test1 />} />
      </Routes>
    </Suspense>

  );
};


export default Approutes
