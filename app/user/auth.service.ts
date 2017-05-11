import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Logger } from "angular2-logger/core";

@Injectable()
export class AuthService{
    currentUser:IUser;
   
    constructor(private logger: Logger){
        this.logger.warn("AuthService created");
    }
    
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa',
        }
        this.logger.warn("currentUser:"+this.currentUser);
    }

    isAuthenticated(){
        this.logger.warn('Login auth:'+ !!this.currentUser);
        this.logger.warn("currentUser:"+this.currentUser);
        return Boolean(this.currentUser);
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName,
        this.currentUser.lastName = lastName
    }

    getCurrentUser():IUser{
        return this.currentUser;
    }
}