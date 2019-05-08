
import { Injectable } from '@angular/core';

@Injectable()

export class ConstantsService {
    private baseUrl="http://dev.api.staller.show";
    private loginUrl="/v1/users/login";
    private addHorseUrl="/v1/horses";
    

    get login() {
return this.baseUrl+this.loginUrl;
    }

    get horseUrl() {
        return this.baseUrl+this.addHorseUrl;
            }
    
}


