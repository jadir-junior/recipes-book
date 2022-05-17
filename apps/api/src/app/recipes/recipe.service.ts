import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRecipeDto } from './dtos/create-recipe.dto';
import { Recipe } from './recipe.entity';
import { RecipeRepositoty } from './recipe.repository';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(RecipeRepositoty)
    private recipeRepository: RecipeRepositoty
  ) {}

  findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipeRepository.createRecipe(createRecipeDto);
  }
}
