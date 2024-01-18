import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{
                    url : "postgresql://postgres:pranav@localhost:5432/emitrrdb?schema=public"
                }
            }
        })
    }
    
}