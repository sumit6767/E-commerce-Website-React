import { useReducer } from "react";
import { Auth } from "./Auth";

const reduceFunction  = (state,action)=>{
    if(action.type==="add"){
        state.item.push(action.item)
        const totalAmount = state.totalAmount + action.item.amount*action.item.price
        return {item:[...state.item],totalAmount:totalAmount}
    }
}

const Provider = (props)=>{
    const [cart ,dispatch] = useReducer(reduceFunction,{
        item:[],
        totalAmount:0,
    });
    const cartText = {
        items:cart.item,
        totalAmount:+cart.totalAmount,
        addItemHandler : addItemHandler,
        deleteItemHandler:deleteItemHandler 
    }
    function addItemHandler(item) {
        dispatch({type:"add",item:item})
    };
    function deleteItemHandler(id ){};

    return(
        <Auth.Provider value={cartText}>
            {props.children}
        </Auth.Provider>
    )
}

export default Provider