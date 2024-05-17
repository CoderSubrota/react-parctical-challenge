import { createBrowserRouter } from "react-router-dom";
import FolderTree from "../Pages/FolderTree/FolderTree";
import ToDoList from "../Pages/ToDoList/ToDoList";
import Home from "../Pages/Home/Home";
import Calcu from "../Pages/Calculator/Calcu";
import ProgressBar from "../Pages/ProggressBar/ProggressBar";
import ShoppingProgress from "../Pages/ShoppingProgress/ShoppingProgress/ShoppingProgress";
import MainLayOut from "../MainLayOut/MainLayOut";
import Pagination from "../Pages/Pagination/Pagination";
import SearchProducts from "../Pages/Pagination/SearchPage";
import Candidates from "../Pages/LocalStorage/Candidates";
import SearchData from "../Pages/LocalStorage/SearchData";
import JobSeekers from "../Pages/LocalStorage/JobSeekers";

const routers = createBrowserRouter([
{
    path:"/",element:<MainLayOut></MainLayOut>,children:
      [
         {
            path:"/",
            element:<Home></Home>
         },
         {
            path:"/folder",
            element:<FolderTree></FolderTree>
         },
         {
            path:"/ToDoList",
            element:<ToDoList></ToDoList>
         },
         {
           path:"/calculator",
           element:<Calcu></Calcu>
        },
        {
           path:"/proggress-bar",
           element:<ProgressBar></ProgressBar>
        },
        {
           path:"/shopping-proggress-bar",
           element:<ShoppingProgress></ShoppingProgress>
        },
        {
         path:"/pagination",
         element:<Pagination></Pagination>
      },
        {
         path:"/search-products",
         element:<SearchProducts></SearchProducts>
      },
      {
         path:"/candidates",
         element:<Candidates></Candidates>
      },
      {
         path:"/job-seekers",
         element:<JobSeekers></JobSeekers>
      },
      {
         path:"/all-users",
         element:<SearchData></SearchData>
      },      {
         path:"*",
         element:<div>
            <h2 style={{ fontSize: "28px", color: "white", textAlign: "center", margin: "16% 0px", color: "lime" }}> Sorry!! no route found here!!</h2>
         </div>
      },

        ]
   
}
]);

export default routers;