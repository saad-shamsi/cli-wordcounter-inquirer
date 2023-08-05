#!/usr/bin/env node

import welcome from "./utils/welcome.js";
import wordCounter from "./wordounter.js";

await welcome();
await wordCounter();
