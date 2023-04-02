import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProfileDto } from './dto/create_profile_dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor (private profileService: ProfileService) {}

    @Post()
    create(@Body() profileDto: CreateProfileDto) {
        return this.profileService.createProfile(profileDto);
    }

    @Get('/:login')
    getByValue(@Param('login') login: string) {
        return this.profileService.getLogin(login);
    }
}
