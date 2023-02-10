import { Body, Controller, ForbiddenException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create.auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(@Body() createauthdto : CreateAuthDto ) {
        try{
            console.log(createauthdto)
            return this.authService.signup(createauthdto)

        }catch(error){
            throw new ForbiddenException          
        }     
    }

    @Post('signin')
    signin() {
        return this.authService.signin()
    }
}
