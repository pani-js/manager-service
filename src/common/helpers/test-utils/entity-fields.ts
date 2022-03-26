import { EntityFields } from '@our-types/tests';
import { TestingModule } from '@nestjs/testing';

export function getEntityFields(args: {
  in: TestingModule;
  for: string;
}): EntityFields {
  const { metadata } = args.in.get(args.for);
  return metadata.ownColumns.reduce(
    (prev, { propertyName, type }): { [key: string]: any } => ({
      ...prev,
      [propertyName]: type,
    }),
    {},
  );
}
