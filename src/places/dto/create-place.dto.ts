import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator"

export class CreatePlaceDto {
    @IsString()
    name:String

    @IsString()
    description:String

    @IsNumber()
    lat:Number

    @IsNumber()
    lon:Number
}
