import { Injectable } from '@angular/core';
import * as hash from 'js-sha512';

@Injectable()
export class LoginService {
    generateHash(password:string){
return hash.sha512(password);
    }
}