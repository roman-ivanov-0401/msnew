import { Module } from '@nestjs/common';
import { RadioController } from './radio.controller';
import { RadioService } from './radio.service';

@Module({
  controllers: [RadioController],
  providers: [RadioService]
})
export class RadioModule {}
