export class ReturnRecipeDto {
  id: string;
  title: string;
  ingredients: string;
  tags?: string;
  imageUrl: string;
  cookingTime?: number;
  propTime?: number;
  steps?: string;
  rating: number;
}
