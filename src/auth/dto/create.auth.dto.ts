import { ApiProperty } from "@nestjs/swagger";


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

//   @ApiProperty({ required: false, default: true })
//   isEnabled?: boolean = true;

}