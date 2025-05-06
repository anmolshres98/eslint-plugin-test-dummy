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
 * This should not be caught
 * @internal
 */
export class OtherInternal { }

/**
 * Test to check linting rules are working properly
 */
const unusedVar = 1;

export default internalVariable;