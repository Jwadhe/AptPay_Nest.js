import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type AuthDocument = Auth & Document;


@Schema()
export class Auth {

    @Prop()
    email: string;

    @Prop()
    firstname: string

    @Prop()
    lastname: string

    @Prop()
    password: string

    @Prop()
    mobile: number

}
export const AuthSchema = SchemaFactory.createForClass(Auth)