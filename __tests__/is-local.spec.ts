import { isLocal } from '#/is-local';

describe.each`
  stage              | expectedValue
  ${''}              | ${true}
  ${undefined}       | ${true}
  ${'development'}   | ${false}
  ${'production'}    | ${false}
  ${'SSTLOCAL-User'} | ${true}
`('when stage is `$stage`', ({ stage, expectedValue }) => {
  it(`should return ${expectedValue}`, () => {
    expect(isLocal(stage)).toEqual(expectedValue);
  });
});
