import { Test, TestingModule } from '@nestjs/testing';
import { PodcasterController } from './podcaster.controller';

describe('PodcasterController', () => {
  let controller: PodcasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PodcasterController],
    }).compile();

    controller = module.get<PodcasterController>(PodcasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
