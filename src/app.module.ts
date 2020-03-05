import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { SeedModule } from './seed/seeds.module';

@Module({
  imports: [
    ItemsModule,
    SeedModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/shoes',
      }),
    }),
  ],
})
export class AppModule {
}
