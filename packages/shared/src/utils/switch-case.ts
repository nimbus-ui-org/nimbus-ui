/* eslint-disable @typescript-eslint/no-explicit-any */
export const switchCase =
  <Case extends string, F extends (...args: any) => any>({
    cases,
    defaultCase
  }: {
    cases: { [Property in Case]: F }
    defaultCase?: F
  }) =>
  (expression: Case | (string & NonNullable<unknown>)) =>
    cases[expression as Case] || defaultCase
