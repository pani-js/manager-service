export class CreateUnionDto {
  readonly location: string;
  readonly logo: string;
  readonly unionType: {
    id: number;
  };
}
