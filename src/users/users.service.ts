//Файл сервиса содержит вспомогательные для маршрутизации
//методы класса, результат которых используется в контроллере.
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create_user_dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    async createUser(dto:CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }
// include функция подключает к вызову все связанные записи в других моделях.
    async getAllUsers() {
        const users = await this.userRepository.findAll({include: { all: true}});
        return users;

    }

    async getId( id: number ) {
        const user = await this.userRepository.findOne({where:{id}});
        return user;
    }

    async getUserByEmail( email: string ) {
        const user = await this.userRepository.findOne({where:{email}});
        return user;
    }

}
