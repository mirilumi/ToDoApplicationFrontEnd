export class UserGetDto{
    constructor(
        public email:String,
        public firstName :String,
        public lastName :String,
        public phoneNumber :String,
        public username :String,
        public id:Number,
    ){

    }
}