import { Module } from '@nestjs/common';
import { RepoController } from './controllers/controllers.controller';
import { ReposirotyService } from './services/services.service';
import { HttpModule } from '@nestjs/axios';


@Module({  
  imports: [HttpModule],
  controllers: [RepoController],
  providers: [ReposirotyService]
})
export class GoogleModule {}
