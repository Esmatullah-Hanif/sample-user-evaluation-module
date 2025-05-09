import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { SampleUserService } from "./sample-user.service";
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";

@ApiTags("Users")
@ApiBearerAuth()
@Controller("register")
export class SampleUserController {
  constructor(private readonly sampleUserService: SampleUserService) {}

  @Post()
  @ApiOperation({ summary: "Register a new user" })
  @ApiResponse({ status: 201, description: "User registered successfully" })
  @ApiResponse({ status: 400, description: "Invalid input data" })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.sampleUserService.register(createUserDto);
  }
}
