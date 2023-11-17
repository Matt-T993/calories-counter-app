import { InferSchemaType, Schema, Types, model } from "mongoose"


const exerciseSchema = new Schema({
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    exercise_name: {
      type: String,
      required: true,
    },
    duration_in_minute: {
      type: Number,
      required: true,
      validate: {
        validator: (value: number) => value >= 0,
        message: "duration must be a non-negative number"
      }
    },
    date: {
      type: Date,
  
    },
    calories_burned: {
      type: Number,
      validate: {
        validator: (value: number) => value >= 0,
        message: "Calories burned must be a non-negative number"
      }
    },
  });

  type Exercise = InferSchemaType<typeof exerciseSchema>;

  export default model<Exercise>("Exercise", exerciseSchema)