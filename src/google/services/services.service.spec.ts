import { Test, TestingModule } from '@nestjs/testing';
import { ReposirotyService } from './services.service';

describe('ServicesService', () => {
  let service: ReposirotyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReposirotyService],
    }).compile();

    service = module.get<ReposirotyService>(ReposirotyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
