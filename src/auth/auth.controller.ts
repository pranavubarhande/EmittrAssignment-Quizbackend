import { Controller, Post, Body } from '@nestjs/common';

import { AuthDto } from "src/dto/auth.dto";
import { UserDto } from "src/dto/user.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController{
    constructor(private authService:AuthService){}

    @Post('signin')
    signin(@Body() dto:AuthDto){
        return this.authService.signin(dto);
    }

    @Post('signup')
    signup(@Body() dto:UserDto){
        return this.authService.signup(dto);
    }
}