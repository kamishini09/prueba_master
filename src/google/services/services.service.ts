import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, firstValueFrom } from 'rxjs';
import { ErrorManager } from '../utils/error.manager';


@Injectable()
export class ReposirotyService {
    constructor(private readonly http: HttpService){}

   public async getReposTop(){
       try{
        const url = `https://api.github.com/users/google/repos?sort=stars&per_page=10`;
        const response = await firstValueFrom(this.http.get(url));
        return response.data;
       }catch(error){
        throw ErrorManager.createSignatureError(error.message);
       }
    }
}
