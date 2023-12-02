import { useEffect,useState } from 'react';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
//css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
//pages
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import Menu from './Pages/Menu/Menu';
import Chefs from './Pages/Chefs/Chefs';
import Reservation from './Pages/Reservation/Reservation';
import Blog from './Pages/Blog/Blog';
import Contacts from './Pages/Contacts/Contacts';
import NoteFound from './Pages/NoteFound/NoteFound';

//fetchdata

import {BASE_URL} from "./API/FetchData"
import ErrorPage from './Pages/ErrorPage/ErrorPage';


//https://www.themealdb.com/api/json/v1/1/search.php
//http://preview.themeforest.net/item/recibo-restaurant-food-html-template/full_screen_preview/23758795?_ga=2.179540516.1075771267.1699347164-1510974352.1698574155
function App() {
 const [mealsCategories, setMealsCategories] = useState([''])
 
 //categories
 const fetchCategories = async() =>{
  try {
    const res = await fetch(`${BASE_URL}/categories.php`);
    const data = await res.json();
  setMealsCategories(data.categories)
  console.log(data)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  fetchCategories()

  
}, [])
//console.log(meals)

//createRoutes
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} errorElement={<ErrorPage/>}>
          <Route index path="/" element={<Home mealsCategories={mealsCategories}/>}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/chefs" element={<Chefs/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*"  element={<NoteFound/>}/>
      </Route>
  )
)



  return (
   
    <RouterProvider router={routes}/>
   
  )
}

export default App
