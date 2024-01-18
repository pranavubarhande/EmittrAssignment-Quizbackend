import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports:[PassportModule,
        JwtModule.register({
            secret:'pranavsecretkey',
            signOptions:{expiresIn:'24h'}
        })
    ],
    controllers:[AuthController],
    providers:[AuthService, LocalStrategy, JwtAuthGuard],
    exports:[AuthService]
})

export class AuthModule {}