import { ConstantsService } from './constants.service';
import { LoginInterface } from './../model/login.interface';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class HttpService {
    accessToken:string;

    constructor(private http:HttpClient,private constants:ConstantsService){

    }
    login(request:LoginInterface){
        console.log(this.constants.login);
 return this.http.post(this.constants.login,request, { observe: 'response' });


    }
    set token(token:string) {
this.accessToken=token;
        
    }
    get token(){
        return this.accessToken;
    }

//Create Horse
    postData(url,body){
        
 return this.http.post(url,body, { observe: 'response' });
 }

//List Horse
 getData(url){
     return this.http.get(url,{ observe: 'response' });
 }

    getHorse(horseId:string){
    const getUrl=`${this.constants.horseUrl}/${horseId}`;
    return this.http.get(getUrl,{ observe: 'response' });
  }

 deleteData(horseId:string){
     const delUrl=(`${this.constants.horseUrl}/${horseId}`);
     return this.http.delete(delUrl,{ observe: 'response' });
 }
}
