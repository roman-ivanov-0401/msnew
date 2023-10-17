import { Test, TestingModule } from '@nestjs/testing';
import { PodcasterService } from './podcaster.service';

describe('PodcasterService', () => {
  let service: PodcasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PodcasterService],
    }).compile();

    service = module.get<PodcasterService>(PodcasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
