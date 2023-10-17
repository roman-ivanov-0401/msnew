import { Module } from '@nestjs/common';
import { PodcasterController } from './podcaster.controller';
import { PodcasterService } from './podcaster.service';

@Module({
  controllers: [PodcasterController],
  providers: [PodcasterService]
})
export class PodcasterModule {}
