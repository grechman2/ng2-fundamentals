import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AuthService{
    currentUser:IUser;
   
    constructor(private http: Http){
    }
    
    loginUser(userName: string, password: string){
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        
        let loginInfo = { 
            username: userName, 
            password: password 
        };
        
        return this.http.post('/api/login', JSON.stringify(loginInfo), options).do(resp => {
            if(resp){
                this.currentUser = <IUser> resp.json().user
            }
        }).catch(error => {
            return Observable.of(false);
        });
    }

    isAuthenticated(){
        return Boolean(this.currentUser);
    }

    checkAuthenticationStatus(){
        return this.http.get('/api/currentIdentity')
           .map((resp:any) => {
               if(resp._body){
                   return resp.json();
               }else{
                   return {};
               }
           }).do(currentUser => {
               if(!!currentUser.userName){
                   this.currentUser = currentUser;
               }
           }).subscribe();
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName,
        this.currentUser.lastName = lastName

        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        
        return this.http.put(`/api/users/${this.currentUser.id}`, 
                JSON.stringify(this.currentUser), options);
    }

    getCurrentUser():IUser{
        return this.currentUser;
    }

    logout(){
        this.currentUser = undefined;

        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post('/api/logout', 
                JSON.stringify({}), options);
    }
}