
import { Module } from '@nestjs/common';
import { SampleUserController } from './sample-user.controller';
import { SampleUserService } from './sample-user.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SampleUserController],
  providers: [SampleUserService],
})
export class SampleUserModule {}
