import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategy/local.strategy';
import { RefreshTokensModule } from '../refresh-tokens/refresh-tokens.module';
import { ConfigModule } from '@nestjs/config';
import { JwtRefreshTokenStrategy } from './strategy/jwtRefreshToken.strategy';
@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtRefreshTokenStrategy],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    RefreshTokensModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: `${process.env.JWT_ACCESS_SECRET}`,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
