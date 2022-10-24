import { Body, Controller, Logger, Post, Res, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlayerDTO } from './DTO/createPlayer.dto';
import { Response } from "express"
import { ValidateCreatePlayerPipe } from './pipe/validate-create-player.pipe';

@ApiTags("Player")
@Controller('player')
export class PlayersController {
    /**
     *
     */
    constructor() {}

    private readonly logger = new Logger(PlayersController.name)

    @UsePipes(new ValidateCreatePlayerPipe())
    @Post()
    async post(@Body() body: CreatePlayerDTO, @Res() res: Response){
        try {
            //console.log(body)
            return res.status(201).send({message: "Okk"})
        } catch (e) {
            this.logger.error(`[-] post: ${e.message}`)
        }
    }
}
