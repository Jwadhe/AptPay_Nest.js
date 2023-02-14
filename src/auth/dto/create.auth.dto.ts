import { ApiProperty } from "@nestjs/swagger";
import { } from "class-validator"


export class CreateAuthDto {
@ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  mobile: number;

  result: string;

//   @ApiProperty({ required: false, default: true })
//   isEnabled?: boolean = true;

}