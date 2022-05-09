import { Controller, Get } from '@nestjs/common';

import { RecipeService } from './recipe.service';
import { ReturnRecipeDto } from './dtos/return-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  async findAll(): Promise<ReturnRecipeDto[]> {
    return await this.recipeService.findAll();
  }
}
