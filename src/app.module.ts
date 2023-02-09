import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import configuration  from '../config/configuration'


@Module({
  imports: [AuthModule,
     MongooseModule.forRoot('mongodb://localhost/AptPay_Nest'),
     ConfigModule.forRoot({
      envFilePath: '.development.env',
      ignoreEnvFile: true,
      isGlobal: true,
      load: [configuration],
    }),
  ],
  

})
export class AppModule {}
