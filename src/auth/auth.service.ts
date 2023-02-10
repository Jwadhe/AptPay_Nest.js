import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from 'src/schema/auth.schema';

import { CreateAuthDto } from './dto/create.auth.dto';

@Injectable()
export class AuthService {
    
    constructor (@InjectModel(Auth.name) private authModle: Model<AuthDocument>) { }

  async signup(createauthdto : CreateAuthDto) {
    let user = await this.authModle.create(createauthdto)

        return user.save();
        return 'Hello I am a Signup'
    }

    signin() {
        return 'Hello I am signin'
    }
}
