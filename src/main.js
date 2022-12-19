
import { peticion } from "./script/data.js";
import { champDat } from './data/lol/lol.js'
import { showMenu } from "./script/menu.js";
import { filter } from "./script/filtros.js";
import { search } from "./script/busqueda.js";
import { ordenarAz } from "./script/ordenar-az.js";
import { ordenarZa } from "./script/ordenar-za.js";


const championArray = Object.values(champDat[0].data)


peticion(championArray)
showMenu()
filter()
search()
ordenarAz(championArray)
ordenarZa(championArray)
