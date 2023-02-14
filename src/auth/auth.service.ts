import { Injectable, HttpStatus, HttpException, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from 'src/schema/auth.schema';
import { CreateAuthDto } from './dto/create.auth.dto';
// import { hash, bcrypt, password} from '../utils/bcrypt'
import * as bcrypt from 'bcrypt';
import { BinaryLike, randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt)

@Injectable()
export class AuthService {
    
    constructor (
        @InjectModel(Auth.name) private authModle: Model<AuthDocument>
        ) { }

  async signup(createauthdto : CreateAuthDto, password: BinaryLike): Promise<Auth> {
    const users = await this.authModle.findOne({email: createauthdto?.email})
    
    if (users) {
        throw new BadRequestException('This email already exists');
      }

    // Hash the user password:
    // Genrate the salt
      const salt = randomBytes(8).toString('hex');

      //Hash the salt and the password together
      const hash = (await scrypt(password, salt, 32)) as Buffer

      // Join the Hash result and salt together
      const result = salt + '.' + hash.toString('hex')

        let user = await this.authModle.create({
          ...createauthdto,
          password: result
        })
        return user.save();      
        
    }

    async signin(createauthdto : CreateAuthDto, password: BinaryLike): Promise<Auth>{
        const user = await this.authModle.findOne({email:createauthdto?.email})
        console.log(user, 'user mil gaya ');

        if(!user){
          throw new NotFoundException('user not found!');
        }

        const [salt, storedHash] = user.password.split('.')

        const hash = (await scrypt(password, salt, 32)) as Buffer 

        if(storedHash !== hash.toString('hex')){
          throw new BadRequestException('Wrong password')
        }
        return user
    }
}
