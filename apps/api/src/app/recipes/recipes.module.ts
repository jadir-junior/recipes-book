import { Module } from '@nestjs/common';
import { RecipeRepositoty } from './recipe.repository';
import { RecipeService } from './recipe.service';
import { RecipesController } from './recipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeRepositoty])],
  providers: [RecipeService],
  controllers: [RecipesController],
})
export class RecipesModule {}
