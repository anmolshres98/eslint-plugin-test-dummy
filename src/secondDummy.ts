/* eslint-disable no-duplicate-imports */
/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Internal, Public, internal } from "./InternalHolder"; // only reports for `Internal` class here
new Internal();
new Public();

import { NotInternal } from "./InternalHolder"; // should not report anything at all
new NotInternal();

import { internalVariable } from "./InternalHolder";

const _anotherUnusedVar = internalVariable;
