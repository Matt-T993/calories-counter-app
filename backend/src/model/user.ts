import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
  
    profile_picture: String,
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    age: Number,
    weight: Number,
    height: Number,
    daily_calorie_goal: Number,
    activity_level: String,
   
  }, {timestamps: true});

  type User = InferSchemaType<typeof userSchema>;

  export default model<User>("User", userSchema);