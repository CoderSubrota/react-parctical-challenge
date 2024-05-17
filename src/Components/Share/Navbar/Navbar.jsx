import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>

            <div className="navbar navbarColor">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/pagination"> Pagination</NavLink></li>
                            <li> <NavLink to="/proggress-bar">Proggress Bar</NavLink></li>
                            <li>
                                <NavLink to="#">More link</NavLink>
                                <ul className="p-2">
                                    <li><NavLink to="/pagination"> Pagination</NavLink></li>
                                    <li> <NavLink to="/proggress-bar">Proggress Bar</NavLink></li>
                                    <li>    <NavLink to="/calculator">Calculator</NavLink></li>
                                </ul>
                            </li>
                            <li> <NavLink to="/proggress-bar">Proggress Bar</NavLink></li>
                            <li>    <NavLink to="/calculator">Calculator</NavLink></li>
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost text-xl" to="/">Home</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/pagination"> Pagination</NavLink></li>
                        <li> <NavLink to="/proggress-bar">Proggress Bar</NavLink></li>
                        <li>    <NavLink to="/calculator">Calculator</NavLink></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 navbarColor" style={{ fontSize: "13px" }}>
                                    <li>  <NavLink to="/shopping-proggress-bar"> Shopping Proggress</NavLink></li>
                                    <li>  <NavLink to="/search-products"> Search products</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li>    <NavLink to="/folder">Folder system</NavLink> </li>
                        <li> <NavLink to="/ToDoList">To do list</NavLink> </li>
                    </ul>
                </div>

            </div>

        </>)
}

export default Navbar;