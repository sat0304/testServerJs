import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateTextDto } from './dto/create_text_dto';
import { TextsService } from './texts.service';

@Controller('texts')
export class TextsController {

    constructor (private textService: TextsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createText(@Body() dto:CreateTextDto,
                @UploadedFile() image) {
        this.textService.create(dto, image)
        return this.textService.create(dto, image)

    }
}
