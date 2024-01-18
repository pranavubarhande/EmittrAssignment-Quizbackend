import { Body, Controller, Get, UseGuards } from "@nestjs/common";
import { Post } from "@nestjs/common/decorators";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { UserDto } from "src/dto/user.dto";
import { UserService } from "./user.service";

@Controller("user")
@UseGuards(JwtAuthGuard)
export class UserController{
    constructor(private userService:UserService){}

    @Post('getuserbymail')
    getUserByMail(@Body() dto:UserDto){
        console.log(dto);
        
        return this.userService.getUserByMail(dto);
    }
}