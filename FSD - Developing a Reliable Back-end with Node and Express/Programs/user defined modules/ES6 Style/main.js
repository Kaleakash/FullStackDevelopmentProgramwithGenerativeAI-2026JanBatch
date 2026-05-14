import { display1,display2 } from "./abc.js";
import { display3,display4 } from "./mno.js";   // non default import with curly braces
import display5 from "./xyz.js";    // default import without curly braces
import {withdraw as hsbc_withdraw}  from "./hsbc.js";
import {withdraw as bam_withdraw} from "./bankofamerica.js";

display1();
display2();
display3();
display4();
display5();
hsbc_withdraw(5000);
bam_withdraw(5000);