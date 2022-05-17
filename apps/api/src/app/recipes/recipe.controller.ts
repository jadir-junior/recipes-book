import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateRecipeDto } from './dtos/create-recipe.dto';
import { RecipeService } from './recipe.service';
import { ReturnRecipeDto } from './dtos/return-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  findAll(): Promise<ReturnRecipeDto[]> {
    return this.recipeService.findAll();
  }

  @Post()
  async create(
    @Body() createRecipeDto: CreateRecipeDto
  ): Promise<ReturnRecipeDto> {
    return this.recipeService.create(createRecipeDto);
  }
}
