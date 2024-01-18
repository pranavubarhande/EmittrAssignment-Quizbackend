import { Injectable } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";
import { UserTestDto } from "src/dto/userTest.dto";
import { PrismaService } from "src/prisma/prisma.service";
import english from '../quizes/english'
import hindi from "../quizes/hindi"
import { Prisma } from "@prisma/client";
@Injectable()
export class TestsService{
    constructor(private prisma:PrismaService){}
    

    async getAllTests(){
        return {english, hindi}
    }
    async createUserTest(dto: UserTestDto){
        console.log(dto);
        
        const user = await this.prisma.user.findFirst({
            where:{
                id:dto.userId
            }
        });
        const test = this.prisma.testSubmission.create({
            data: {
                answers:dto.answers,
                userId:dto.userId,
                subject:dto.subject,
                score:dto.score
            }
        })

        return test;
    }
    async getTestSummary(userId:number){
        const tests = await this.prisma.testSubmission.findMany({
            where:{
                userId:userId
            }
        })
        console.log(tests);
        
        const totalTests = tests.length;
        const totalScore = tests.reduce((sum, test) => sum + (test.score || 0), 0);
        const averageScore = totalTests > 0 ? totalScore / totalTests : 0;

        return {
            totalTests,
            averageScore,
        };
    }
    async getTestHistory(userId:number){
        const tests = await this.prisma.testSubmission.findMany({
            where:{
                userId:userId
            }
        })
        return tests;
    }
    async getTestLeaderBoard(subject:string){
        const tests = await this.prisma.testSubmission.findMany({
            where:{
                subject:subject
            },
            select:{
                id:true,
                user:true,
                score:true
            },
            
        })
        tests.sort((a, b) => b.score - a.score);
        return tests;
    }
}