import {
  Controller,
  Get,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { SeedsService } from './seeds.service';

@Controller('seeds')
export class SeedsController {
  constructor(
    private seedsService: SeedsService,
  ) {
  }

  @Get()
  async seeds(@Res() res: Response, @Req() req: Request) {
    this.seedsService.seed();
    return res.send({
      message: 'Database Seeding',
    });
  }
}

