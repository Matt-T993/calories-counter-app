import { InferSchemaType, Schema, Types, model } from "mongoose";


const mealSchema = new Schema({
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    meal_name: String,
    date: Date,
    meal_type: String,
    total_calories: Number,
    total_carbohydrates: Number,
    total_proteins: Number,
    total_fats: Number,
    total_fiber: Number,
    total_sugar: Number,
  },{timestamps: true});

  type Meal = InferSchemaType<typeof mealSchema>;

  export default model<Meal>("Meal", mealSchema);
  