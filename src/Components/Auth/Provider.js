import { useState } from "react";
import { Auth } from "./Auth";

const Provider = (props)=>{
    const [cart ,setCartContext] = useState({
        items:[],
        totalAmount:0,
        addItemHandler:addItemHandler,
        deleteItemHandler:deleteItemHandler
    });

    function addItemHandler(item) {
        setCartContext(prev=>{
            prev.items.push(item);
            return {...prev};
        })
    };
    function deleteItemHandler(id ){};

    return(
        <Auth.Provider value={cart}>
            {props.children}
        </Auth.Provider>
    )
}

export default Provider