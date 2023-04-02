import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create_profile_dto';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {

    constructor(@InjectModel(Profile) private profileRepository: typeof Profile) {
    }

    async createProfile(dto:CreateProfileDto) {
        const profile = await this.profileRepository.create(dto);
        return profile;
    }

    async getLogin(login: string) {
        const profile = await this.profileRepository.findOne({where:{login}});
        return profile;

    }
}
