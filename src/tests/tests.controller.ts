import { Body, Controller, Get, ParseIntPipe, UseGuards } from "@nestjs/common";
import { Param, Post, Query } from "@nestjs/common/decorators";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { UserDto } from "src/dto/user.dto";
import { UserTestDto } from "src/dto/userTest.dto";
import { TestsService } from "./tests.service";

@Controller("tests")
@UseGuards(JwtAuthGuard)
export class TestsController{
    constructor(private testsService:TestsService){}

    @Get('getalltests')
    getUserByMail(){
        return this.testsService.getAllTests();
    }

    @Post('submitUserTest')
    submitUserTest(@Body() dto: UserTestDto){
        return this.testsService.createUserTest(dto);
    }

    @Get('getTestSummary')
    getTestSummary(@Query("userId", ParseIntPipe) userId: number){
        
        return this.testsService.getTestSummary((userId));
    }

    @Get('getTestHistory')
    getTestHistory(@Query("userId", ParseIntPipe) userId: number){
        return this.testsService.getTestHistory(userId);
    }

    @Get('getTestLeaderBoard/:subject')
    getTestLeaderBoard(@Param("subject") subject: string){
        return this.testsService.getTestLeaderBoard(subject);
    }
}