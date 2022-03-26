import { EntityFields } from '@our-types/tests';
import { TestingModule } from '@nestjs/testing';

export function getEntityFields<T>(args: {
  in: TestingModule;
  for: string;
}): EntityFields<T> {
  const { metadata } = args.in.get(args.for);
  return metadata.ownColumns.reduce(
    (prev, { propertyName, type }): { [key: string]: any } => ({
      ...prev,
      [propertyName]: type,
    }),
    {},
  );
}
