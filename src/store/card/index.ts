import { createSlice } from '@reduxjs/toolkit';

const getCard = ()=>{
    const card = localStorage.getItem("card")
    if(card) return JSON.parse(card)
    return null
}

export const cardSlice = createSlice({
  name: 'card',
  initialState: getCard() || [],
    reducers: {
            addCard: (state:any, action) => {

             const {title,image,price,id,stock} = action.payload
             console.log(stock);
             
              if (stock>0) {
                const book = state.findIndex((b:any)=>b.id==id) 
                console.log(book);
                
                 if(book>=0) {
                      state[book].quantity ++;
                      state[book].stock --;
                 }  
                 else  state.push({id,title,image,price,quantity:1,stock:stock-1});
                 localStorage.setItem("card",JSON.stringify(state))

              }
            else {
                alert("there no enough book that has this title")
            }
        },
        deleteItem:(state:any,action)=>{
            const {id} = action.payload
            state = state.filter((b:any)=>b.id!=id)
            localStorage.setItem("card",JSON.stringify(state))
          
                window.location.reload()
     
             
        },
        incrementQuantity:(state:any,action)=>{
            const {id,stock} = action.payload
            console.log("stock",stock);    

            
            if(stock>0){
                const book =state.findIndex((b:any)=>b.id==id)
                state[book].stock--;

                state[book].quantity ++;  
                localStorage.setItem("card",JSON.stringify(state))

            }
             else {
                alert("there no enough book that has this title")
            }
        },
        decrementQuantity:(state:any,action)=>{
            const {id} = action.payload
            const book =state.findIndex((b:any)=>b.id==id)
            if(state[book].quantity>1){
                state[book].quantity--; 
                state[book].stock++;
                localStorage.setItem("card",JSON.stringify(state))

            }  
            else  alert("the quantity must be positive")

        }
    }
}

);

// this is for dispatch
export const { addCard,decrementQuantity,incrementQuantity,deleteItem } = cardSlice.actions;

// this is for configureStore
export default cardSlice.reducer;