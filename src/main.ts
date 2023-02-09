import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333, ()=>{
    console.log(`
    ################################################
    🛡️  NestJs Server listening on port: 3333 🛡️
    ################################################
  `);    
  });
    
}
bootstrap();
