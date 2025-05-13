import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from '../pages/Movies';
import DefaultLayout from "../layouts/DefaultLayout";
import MovieReviews from "../components/MovieReviews";


export default function App() {


  return <div>

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<div>homepage</div>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>


  </div>

};

