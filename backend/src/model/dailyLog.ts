import { InferSchemaType, Schema, Types, model } from "mongoose";


const dailyLogSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "User",
      },
    date: Date,
    total_calories_consumed: Number,
    total_carbohydrates_consumed: Number,
    total_proteins_consumed: Number,
    total_fats_consumed: Number,
    total_fiber_consumed: Number,
    total_sugar_consumed: Number,
    remaining_calories: Number,
  });

  type DailyLog = InferSchemaType<typeof dailyLogSchema>;

  export default model<DailyLog>("DailyLog", dailyLogSchema);