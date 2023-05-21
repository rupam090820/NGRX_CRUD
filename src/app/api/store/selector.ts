import { createFeature,createFeatureSelector, createSelector } from "@ngrx/store";
import { ListInterface, StoreInterface } from "./ListInterface";

export const ApiAlllListSelector=createFeatureSelector<StoreInterface>('ApiReducer')

export const ApiListSelector=createSelector(ApiAlllListSelector,(state=>{
    return state.AllList
}))
export const ApiSIngleUserList=createSelector(ApiAlllListSelector,(state=>{
    return state.SingleDataList
}))