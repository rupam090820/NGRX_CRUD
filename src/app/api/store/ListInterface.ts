export interface ListInterface{
    id?:number,
    name:string,
    email:string
}

export interface StoreInterface{
    name:string,
    email:string,
    id?:string|number,
    AllList:ListInterface[],
    SingleDataList?:{}
}