import {Controller, Get, Query, Req} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('add')
    add(@Query('a') a,@Query('b') b ): Number {
    if (!a || !b) {
        return 0
    }
    const aNum = Number(a)
    const bNum = Number(b)
    return aNum + bNum
  }

    @Get('sub')
    subtract(@Query('a') a,@Query('b') b ): Number {
        if (!a || !b) {
            return 0
        }
        const aNum = Number(a)
        const bNum = Number(b)
        return aNum - bNum
    }

    @Get('mul')
    multiply(@Query('a') a,@Query('b') b ): Number {
        if (!a || !b) {
            return 0
        }
        const aNum = Number(a)
        const bNum = Number(b)
        return aNum * bNum
    }

    @Get('div')
    divide(@Query('a') a,@Query('b') b ): Number {
        if (!a || !b) {
            return 0
        }
        const aNum = Number(a)
        const bNum = Number(b)
        return aNum / bNum
    }

}
