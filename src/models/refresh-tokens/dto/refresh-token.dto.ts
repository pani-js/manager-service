export class CreateRefreshTokenDto {
  readonly expireIn: Date;
  readonly value: string;
}
