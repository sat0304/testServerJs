// Контроллер обеспечивает управление маршрутизацией потоков данных
// между БД и браузером
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create_user_dto';

@Controller('users')
export class UsersController {

    constructor (private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @Get('/:id')
    getByValue(@Param('id') id: number) {
        return this.usersService.getId(id);
    }
}
