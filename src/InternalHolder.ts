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

/**
 * Test to check linting rules are working properly
 */
const unusedVar = 1;