const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

// console.log('base:', argv.base);
// console.log('limite', argv.base);
console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`.yellow.bold, `${archivo}`.grey))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];


//