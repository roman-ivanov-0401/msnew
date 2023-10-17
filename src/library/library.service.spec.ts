import { Test, TestingModule } from '@nestjs/testing';
import { LibraryService } from './library.service';

describe('Library', () => {
  let provider: LibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryService],
    }).compile();

    provider = module.get<LibraryService>(LibraryService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
