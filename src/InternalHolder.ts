/** @internal */
export function internal(): void {}

/** @internal */
export class Internal {
  // should not override internal class
  /** @public */
  public publicMethod(): void {};
}

/** @notinternal */
export class Public {
  /** @internal */
  public internalMethod(): void {};
}

/** @notinternal */
export class NotInternal {}

/** @internal */
export const internalVariable = "a";

/**
 * Test to check linting rules are working properly
 */
const unusedVar = 1;