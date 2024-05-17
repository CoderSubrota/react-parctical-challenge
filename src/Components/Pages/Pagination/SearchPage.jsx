import { useEffect, useState } from "react";
import "./Pagination.css";
import ProgressBar from "../ProggressBar/ProggressBar";
const SearchProducts = () => {
    const [produts, setProducts] = useState([]);
    let [input, setInput] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        fetch(`https://dummyjson.com/products/search?q=${input}`)
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            });

    }, [input]);

    if (loading === true) {
        return (
            <>
                <ProgressBar></ProgressBar>
            </>
        )
    }

    return (

        <>

            <form autoComplete="off" style={{ width: "75%", margin: "auto", paddingTop: "100px" }}>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" onChange={(e) => setInput(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </form>
            {
                produts.length === 0 && <h2
                    style={{ fontSize: "32px", color: "white", textAlign: "center", height: "100vh", marginTop: "25px" }}>
                    Product not found !!
                </h2>
            }
            <div className="products" style={{ margin: "0px 5px" }}>
                {//(4*10 - 10) => 30 -> 40
                    produts?.map((item, i) => {
                        return (<>
                            <div className="product" key={i}>
                                <img src={item?.images[0]} alt={item?.brand} id="productImage" />
                                <p>brand : {item?.brand}</p>
                                <p>category : {item?.category}</p>
                                <p>description : {item?.description}</p>
                                <p>Price: ${item?.discountPercentage}</p>

                            </div>
                        </>)
                    })
                }
            </div>
        </>
    )
}

export default SearchProducts;