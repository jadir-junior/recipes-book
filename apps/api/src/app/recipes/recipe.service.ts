import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
