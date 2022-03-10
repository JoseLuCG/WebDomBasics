import runners from "./models/runners.mjs"
import { dataToHTMLList } from "./controllers/runners.mjs";

dataToHTMLList(runners);
console.log(runners);