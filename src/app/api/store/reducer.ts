import { createReducer, on } from "@ngrx/store";
import { AddList, AllListAction, StoreSingleData, UpdateSingleUser, deleteAction } from "./action";
import { state } from "@angular/animations";
import { ListInterface, StoreInterface } from "./ListInterface";

// when set initialState thats mean we assign value here,so thats why we use type assertion for set the value type
export const initialState: StoreInterface = {
    name:<string> '',
    email:<string> '',
    id:<number|string> '',
   
    AllList:<ListInterface[]>[], // here use type assertion for seting type of blank arrayofObject
    SingleDataList:<ListInterface> {}
}

export const AllListReducer = createReducer(initialState,
    on(AllListAction, (state, { AllList }) => {
        // console.log(state);
        //console.log(AllList)
        return {
            ...state,
            AllList: AllList
        }
    }),
    on(AddList, (state, { FormData }) => {
        //  console.log(state);
        //console.log(state.AllList)
        return {
            ...state,
            AllList: [...state.AllList, FormData]
        }
    }
    ),
    on(StoreSingleData, (state, { SingleUserData }) => {
        //console.log(state)
        //console.log(SingleUserData)

        return {
            ...state,
            SingleDataList: SingleUserData
        }
    }),
    on(UpdateSingleUser, (state, { userdata, index }) => {
        //console.log(state.SingleDataList)
        // console.log(index);
        //console.log({userdata});
        let a = localStorage.getItem('index')
        //console.log(a)
        //let dupArray=[...state.AllList] //process 1 for copy 
        let dupArray = JSON.parse(JSON.stringify(state.AllList))  //process 2 for copy 
        console.log(dupArray);
        dupArray.splice(index, 1, userdata)

        return {
            ...state,
            AllList: dupArray
        }
    }),
    on(deleteAction, (state, { index }) => {
        console.log(index);
        let dupArray = [...state.AllList];
        dupArray.splice(index, 1)
        return {
            ...state,
            AllList: dupArray
        }
    })
)
