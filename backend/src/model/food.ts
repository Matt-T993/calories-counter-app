import { InferSchemaType, Schema, model } from "mongoose";

const foodSchema = new Schema({
    food_name: String,
    serving_size: String,
    calories: Number,
    carbohydrates: Number,
    proteins: Number,
    fats: Number,
    fiber: Number,
    sugar: Number,
    category: String,
    brand: String,
    createdAt: Date,
    updatedAt: Date,
  },{timestamps: true});

  type Food = InferSchemaType<typeof foodSchema>;

  export default model<Food>("Food", foodSchema);
  