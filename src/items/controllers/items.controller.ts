import { Get, Controller, Put, Post, Body, Param, Delete, Res } from '@nestjs/common';
import { ItemModel } from '../models/items.model';
import { ItemService } from '../services/item.service';
import { ApiImplicitBody, ApiImplicitParam, ApiModelProperty } from '@nestjs/swagger';

@Controller('items')
export class ItemsController {
  constructor(private readonly service: ItemService) {

  }

  @Post()
  async create(@Body() model: ItemModel) {
    return await this.service.create(model);
  }

  @Get()
  async get(): Promise<ItemModel[]> {
    return await this.service.get();
  }

  @ApiImplicitParam({ name: 'id' })
  @Get(':id')
  async show(@Param('id') id): Promise<ItemModel> {
    console.log(id);
    return await this.service.show(id);
  }

  @ApiImplicitParam({ name: 'id' })
  @Put(':id')
  async update(@Param('id') id, @Body() model: ItemModel) {
    await this.service.update(id, model);
    return await this.service.show(id);
  }

// {"name": "New Brander2", "price" : 40, "brand": "Brand1"}

  @ApiImplicitParam({ name: 'id' })
  @Delete(':id')
  async remove(@Param('id') id, @Res() res) {
    await this.service.remove(id).catch((e) => {
      return e;
    });
    return res.send({
      message: 'Successfully deleted',
    });
  }
}
