import { Module } from '@nestjs/common';
import { ItemsController } from './controllers/items.controller';
import { ItemService } from './services/item.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './schemas/item.schema';
import { ShoesSchema } from '../seed/shoes';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Shoes', schema: ShoesSchema }])],
  controllers: [ItemsController],
  providers: [ItemService],
})

export class ItemsModule {}
