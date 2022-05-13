export class CreateScriptDto {
  readonly path: string;
  readonly name: string;
  description: string;
  isPublic: boolean;
  createdAt: string;
}
