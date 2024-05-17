import { createContext, useContext } from "react"

const MyContext = createContext() ;

const Context = () => {
    const data = "Hello world";
    return (
        <>
        <MyContext.Provider value={data}>
           <ChildrenComponet></ChildrenComponet>
        </MyContext.Provider>
        </>
    )
}


function ChildrenComponet () {
 const value = useContext(MyContext);
 console.log(value) ;
}
export default Context;