import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee, CoffeeSchema } from './entites/coffee.entity';
import { MongooseModule } from '@nestjs/mongoose/dist';
@Module({imports:[MongooseModule.forFeature([{
    name:Coffee.name,
    schema:CoffeeSchema,
}])], controllers:[CoffeesController],providers:[CoffeesService]})
export class CoffeesModule {}
