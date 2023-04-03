import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create_user_dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor (private usersService: UsersService) {}
    
    async login(userDto: CreateUserDto) {
        
    }

    
    async registration(userDto: CreateUserDto) {
        const candidate = await this.usersService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException('This email is exist', HttpStatus.BAD_REQUEST)
        }
        const user = await this.usersService.createUser({...userDto});
        return user;
    }
}
