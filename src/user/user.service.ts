import { Injectable } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService{
    constructor(private prisma:PrismaService){}

    async getUserByMail(dto:UserDto){
        console.log(dto);
        
        const user = await this.prisma.user.findFirst({
            where:{
                email:dto.email
            }
        })
        delete user.hash;
        return user;
    }
}