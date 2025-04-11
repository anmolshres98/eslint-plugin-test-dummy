import { Internal, internal, Public } from "./InternalHolder";

/** control tests; none are violating no-internal but should throw eslint error if eslint is working properly */
const a = 1;

/** no-internal violation cases 
 * these were already throwing eslint errors
*/
internal();
internal();
internal();
new Internal();
new Internal().publicMethod();
new Public().internalMethod();
// not error
new Public();

/** no-internal violation cases 
 * these were not throwing before but should be throwing now
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ExtendedInternal extends Internal {};
let variable: any;
if (variable instanceof Internal) {}
function doSomething(_construct: new () => Internal) {}
doSomething(Internal);
let _someVariable: Internal;
