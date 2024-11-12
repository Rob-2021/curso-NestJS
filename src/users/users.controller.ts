import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUser(): string {
        return 'retorna todos los usuarios';
    }
}
