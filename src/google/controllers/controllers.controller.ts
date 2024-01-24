import { Controller, Get } from '@nestjs/common';
import { ReposirotyService } from '../services/services.service';

@Controller('api')
export class RepoController {
    constructor(private serviceGoogle: ReposirotyService){}

    @Get('top10')
    async getRepositoryTopGoogle(){
        return await this.serviceGoogle.getReposTop();
    }


}
