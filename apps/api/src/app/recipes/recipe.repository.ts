import { EntityRepository, Repository } from 'typeorm';

import { CreateRecipeDto } from './dtos/create-recipe.dto';
import { InternalServerErrorException } from '@nestjs/common';
import { Recipe } from './recipe.entity';

@EntityRepository(Recipe)
export class RecipeRepositoty extends Repository<Recipe> {
  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const {
      title,
      imageUrl,
      ingredients,
      rating,
      cookingTime,
      prepTime,
      steps,
      tags,
    } = createRecipeDto;

    const recipe = this.create();
    recipe.title = title;
    recipe.imageUrl = imageUrl;
    recipe.ingredients = ingredients;
    recipe.rating = rating;
    recipe.cookingTime = cookingTime;
    recipe.prepTime = prepTime;
    recipe.steps = steps;
    recipe.tags = tags;

    try {
      return await recipe.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
