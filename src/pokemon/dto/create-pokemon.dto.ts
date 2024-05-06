import { IsIn, IsInt, IsNumber, IsPositive, IsString, MIN, Min, MinLength, min } from "class-validator"

export class CreatePokemonDto {

    @IsInt()
    @Min(1)
    @IsPositive()
    no: number

    @IsString()
    @MinLength(1)
    name: string
}
