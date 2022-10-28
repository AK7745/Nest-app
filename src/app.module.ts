import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://Abdullahkhan:K_khpz-5MaFahKw@cluster0.djcgmq9.mongodb.net/Coffee"), CoffeesModule],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
