import { UserGetDto } from "./UserGetDto";
import { UserToken } from "./user-token";

export class TokenWithUser{
    constructor(
        public userGetDto:UserGetDto,
        public userTokenState:UserToken
    ){

    }
}