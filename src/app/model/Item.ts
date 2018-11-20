export class Item{
    constructor(
        public id:Number,
        public name:String,
        public status:Status
    ){

    }
}
export enum Status{
    PROGRESS,
    COMPLETED,
    NEW
}