import { createAction, props } from "@ngrx/store";
import { ListInterface, StoreInterface } from "./ListInterface";
export const AllListAction = createAction('AllListData [API get METHODE]', props<{ AllList: ListInterface[] }>())
export const AddList = createAction('add new list', props<{ FormData: ListInterface }>())
export const StoreSingleData = createAction('Add details of individual users data', props<{ SingleUserData: ListInterface }>())
export const UpdateSingleUser = createAction('update single user list', props<{ userdata: ListInterface, index: number }>())
export const deleteAction = createAction('delete singleUserList', props<{ index: number }>())
