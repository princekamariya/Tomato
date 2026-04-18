import { Schema, model, type InferSchemaType } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        image: { type: String, default: "" },
        role: { type: String, trim: true, default: null },
    },
    { timestamps: true },
);

export type UserAttrs = InferSchemaType<typeof userSchema>;

export const User = model<UserAttrs>("User", userSchema);
