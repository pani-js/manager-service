import { Field } from '@our-types/tests';
import { TestingModule } from '@nestjs/testing';

export function getEntityFields(args: {
  in: TestingModule;
  for: string;
}): Field[] {
  const { metadata } = args.in.get(args.for);
  return metadata.ownColumns.map(
    ({ propertyName, type }): Field => ({
      name: propertyName,
      type,
    }),
  );
}
