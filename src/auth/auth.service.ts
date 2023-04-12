import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create_user_dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor (private usersService: UsersService) {}
    
    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        return user;
    }

    
    async registration(userDto: CreateUserDto) {
        const candidate = await this.usersService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException('This email is exist', HttpStatus.BAD_REQUEST)
        }
        const user = await this.usersService.createUser({...userDto});
        return user;
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.usersService.getUserByEmail(userDto.email);
        if (user && (userDto.password == user.password)) {
            return user; 
        }
        throw new UnauthorizedException('Password is wrong')
    }
}
