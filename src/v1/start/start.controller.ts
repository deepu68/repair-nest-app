import { Controller, Get, Param, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { StartService } from './start.service';

@Controller('start')
export class StartController {
  constructor(private readonly startService: StartService) {}

  @Get(':name')
  @UsePipes(ValidationPipe)
  getHello(@Param('name') name: string, @Req() request: Request): string {
    console.log(request?.ip);
    return this.startService.getHello(name);
  }
}
