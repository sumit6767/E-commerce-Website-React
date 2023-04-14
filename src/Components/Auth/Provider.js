import { useReducer } from "react";
import { Auth } from "./Auth";

const reduceFunction  = (state,action)=>{
    if(action.type==="add"){
        let flag = false;
        for(let itemN of state.item){
            if(itemN.id===action.item.id){
                itemN.amount =itemN.amount+ +action.item.amount;
                flag = true;
                break;
            }
        }
        if(state.item.length===0 || !flag){
            state.item.push(action.item)
        }
        console.log(state.item)
        const totalAmount = state.totalAmount + action.item.amount*action.item.price
        return {item:[...state.item],totalAmount:totalAmount}
    }
    else if(action.type==="remove"){
        let totalAmount = state.totalAmount;
        for(let itemN in state.item){
            if(state.item[itemN].id===action.id){
                state.item[itemN].amount =+state.item[itemN].amount - 1;
                totalAmount = totalAmount - state.item[itemN].price
                if(state.item[itemN].amount===0){
                    state.item.splice(itemN,1);
                }
                break;
            }
        }
        
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
    function deleteItemHandler(id ){
        dispatch({type:"remove",id:id})
    };

    return(
        <Auth.Provider value={cartText}>
            {props.children}
        </Auth.Provider>
    )
}

export default Provider