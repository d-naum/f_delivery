import { Test, TestingModule } from '@nestjs/testing';
import { PassHashService } from './pass-hash.service';

describe('PassHashService', () => {
  let service: PassHashService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassHashService],
    }).compile();

    service = module.get<PassHashService>(PassHashService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
