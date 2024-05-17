import { useEffect, useState } from "react";
import "./Pagination.css";
import ProgressBar from "../ProggressBar/ProggressBar";
const Pagination = () => {
    const [produts, setProducts] = useState([]);
    let [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        fetch(`https://dummyjson.com/products?limit=${100}`)
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            });

    }, [])
    if(loading===true){
        return (
            <>
            <ProgressBar></ProgressBar>
            </>
        );
    }
    return (

        <>
            <div className="products">
                {//(4*10 - 10) => 30 -> 40
                    produts?.slice(page * 10 - 10, page * 10).map((item, i) => {
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
      
           <div className="buttons">
           <button onClick={() => setPage(page - 1)} disabled={page===1?"disabled":""} className="prev">Prev</button>
          {
            [...Array(produts.length/10)].map((_,i)=>{
                return <>
                <button key={i+1} onClick={()=>setPage(i+1)} 
                className={page===i+1?"btn btn-info text-white mt-3":"pageNumber"}> {i+1} </button>
                </>
            })
          }
            <button onClick={() => setPage(page + 1)} disabled={page===10?"disabled":""} className="next">Next</button>
       
           </div>
        </>
    )
}

export default Pagination;