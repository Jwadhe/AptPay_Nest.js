import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from 'src/schema/auth.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports : [MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }])],
  controllers: [AuthController],
  providers: [AuthService],  
})

export class AuthModule {}
