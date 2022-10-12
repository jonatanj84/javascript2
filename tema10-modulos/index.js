import chalk from "chalk";
import * as modulos from "./modulo/controller.js";

let funsionSuma = modulos.suma(1, 2);
console.log(funsionSuma)

let mult = modulos.multiplica(4, 5)
console.log(chalk.green(mult));