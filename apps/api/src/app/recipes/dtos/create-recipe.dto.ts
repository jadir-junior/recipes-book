export class CreateRecipeDto {
  title: string;
  ingredients: string;
  tags?: string;
  imageUrl: string;
  cookingTime?: number;
  prepTime?: number;
  steps?: string;
  rating: number;
}
