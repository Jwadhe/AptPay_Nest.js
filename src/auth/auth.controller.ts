import { Body, Controller, ForbiddenException, Post, HttpStatus, Res, HttpException, ValidationPipe } from '@nestjs/common';
import { password } from 'src/utils/bcrypt';
import { serialize } from 'v8';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create.auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
  async signup(@Res() res, @Body(ValidationPipe) createauthdto : CreateAuthDto ) {
        
            const user = await this.authService.signup(createauthdto, createauthdto.password)
            console.log(user, 'mil gaya');
            
            return res.status(HttpStatus.OK).json({
                message: "User has been created successfully",
                user
            })
    
    }

    @Post('signin')
    signin(@Body() createauthdto : CreateAuthDto) {
        try{
            
            console.log(createauthdto)
            return this.authService.signin(createauthdto, createauthdto.password)
        }
        catch(error){
            throw new ForbiddenException
        }
        
    }
}
