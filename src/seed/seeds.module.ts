import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { ShoesSchema } from './shoes';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Shoes', schema: ShoesSchema }])],
  providers: [SeedsService, Logger],
  controllers: [SeedsController],
})
export class SeedModule {
}
