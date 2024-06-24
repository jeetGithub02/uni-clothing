import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    items:[]
}
export const bagSlicer=createSlice({
    name:"myBag",
    initialState,
    reducers:{
        addToBag:(state,action)=>{
           let item= state.items.find(item=> item.id===action.payload.id);
           if(item){
                state.items.map(it=>{
                    if(it.id==action.payload.id){ it.qnt = it.qnt+1 }
                })
           }else{
            state.items.push({...action.payload , qnt:1})
           }
        },
        removeItem:(state,action)=>{
            console.log(action.payload)
           state.items= state.items.filter(item=> item.id !== action.payload)
        }
    }
});

export const {addToBag, removeItem}=bagSlicer.actions;
export default bagSlicer.reducer;

