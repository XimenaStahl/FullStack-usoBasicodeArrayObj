document.write('<h1>Estadísticas Centro Médico Ñuñoa</h1>');

// Radiología
let arrRadiologia = [{
        rut: '9878782-1',
        paciente: 'FRANCISCA ROJAS',
        prevision: 'FONASA',
        especialista: 'IGNACIO SCHULZ',
        hora: '11:00'
    },
    {
        rut: '15345241-3',
        paciente: 'PAMELA ESTRADA',
        prevision: 'ISAPRE',
        especialista: 'FEDERICO SUBERCASEAUX',
        hora: '11:30'
    },
    {
        rut: '16445345-9',
        paciente: 'ARMANDO LUNA',
        prevision: 'ISAPRE',
        especialista: 'FERNANDO WURTHZ',
        hora: '15:00'
    },
    {
        rut: '17666419-0',
        paciente: 'MANUEL GODOY',
        prevision: 'FONASA',
        especialista: 'ANA MARIA GODOY',
        hora: '15:30'
    },
    {
        rut: '14989389-K',
        paciente: 'RAMON ULLOA',
        prevision: 'FONASA',
        especialista: 'PATRICIA SUAZO',
        hora: '16:00'
    },
];

// Traumatología
let arrTraumatologia = [{
        rut: '15554774-5',
        paciente: 'PAULA SANCHEZ',
        prevision: 'FONASA',
        especialista: 'MARIA PAZ ALTUZARRA',
        hora: '08:00'
    },
    {
        rut: '15444147-9',
        paciente: 'ANGÉLICA NAVAS',
        prevision: 'ISAPRE',
        especialista: 'RAUL ARAYA',
        hora: '10:00'
    },
    {
        rut: '17879423-9',
        paciente: 'ANA KLAPP',
        prevision: 'ISAPRE',
        especialista: 'MARIA ARRIAGADA',
        hora: '10:30'
    },
    {
        rut: '1547423-6',
        paciente: 'FELIPE MARDONES',
        prevision: 'ISAPRE',
        especialista: 'ALEJANDRO BADILLA',
        hora: '11:00',
    },
    {
        rut: '16554741-K',
        paciente: 'DIEGO MARRE',
        prevision: 'FONASA',
        especialista: 'CECILIA BUDNIK',
        hora: '11:30',
    },
    {
        rut: '9747535-8',
        paciente: 'CECILIA MENDEZ',
        prevision: 'ISAPRE',
        especialista: 'ARTURO CAVAGNARO',
        hora: '12:00'
    },
    {
        rut: '11254785-5',
        paciente: 'MARCIAL SUAZO',
        prevision: 'ISAPRE',
        especialista: 'ANDRES KANACRI',
        hora: '12:30'
    }
];
// Dental
arrDental = [{
        rut: '11123425-6',
        paciente: 'MARCELA RETAMAL',
        prevision: 'ISAPRE',
        especialista: 'ANDREA ZUÑIGA',
        hora: '08:30'
    },
    {
        rut: '9878789-2',
        paciente: 'ANGEL MUÑOZ',
        prevision: 'ISAPRE',
        especialista: 'MARIA PIA ZAÑARTU',
        hora: '11:00'
    },
    {
        rut: '7998789-5',
        paciente: 'MARIO KAST',
        prevision: 'FONASA',
        especialista: 'SCARLETT WITTING',
        hora: '11:30'
    },
    {
        rut: '18887662-K',
        paciente: 'KARIN FERNANDEZ',
        prevision: 'FONASA',
        especialista: 'FRANCISCO VON TEUBER',
        hora: '13:00'
    },
    {
        rut: '17665461-4',
        paciente: 'HUGO SANCHEZ',
        prevision: 'FONASA',
        especialista: 'EDUARDO VIÑUELA',
        hora: '13:30'
    },
    {
        rut: '14441281-0',
        paciente: 'ANA SEPULVEDA',
        prevision: 'ISAPRE',
        especialista: 'RAQUEL VILLASECA',
        hora: '14:00'
    }
];

// Función que imprime primera y última atención
const atencion = (arreglo, especialidad) => {
    // Longitud del arreglo
    let arrLength = arreglo.length;

    // Objetos de primera y última atención
    primerElem = {
        paciente: arreglo[0].paciente,
        prevision: arreglo[0].prevision
    };
    ultElem = {
        paciente: arreglo[arrLength - 1].paciente,
        prevision: arreglo[arrLength - 1].prevision
    };

    // Impresión de primera y última atención
    document.write(`<br><h3>${especialidad}</h3>`);
    document.write(`<p>Primera atención: ${primerElem.paciente} - ${primerElem.prevision} | Última atención: ${ultElem.paciente} - ${ultElem.prevision}</p>`);
};

// Función que imprime tabla completa
const tabla = (arreglo) => {
    // Longitud del arreglo
    let arrLength = arreglo.length;
    document.write(`
    <table>
        <tr>
        <th>Hora</th>
        <th>RUT</th>
        <th>Paciente</th>
        <th>Previsión</th>
        <th>Especialista</th>
        </tr>
  `)
    for (i = 0; i < arrLength; i++) {
        document.write(`
        <tr>
            <td> ${arreglo[i].hora} </td>
            <td> ${arreglo[i].rut} </td>
            <td> ${arreglo[i].paciente} </td>
            <td> ${arreglo[i].prevision} </td>
            <td> ${arreglo[i].especialista} </td>
        </tr>
        `)
    };
    document.write(` 
    </table>
    `)
};

// Llamada a función que imprime primera y última atención por Especialidad
atencion(arrRadiologia, 'Radiología'); // Llamada a función que imprime primera y última atención
tabla(arrRadiologia); // Impresión de contenido de tabla

atencion(arrTraumatologia, 'Traumatología'); // Llamada a función que imprime primera y última atención
tabla(arrTraumatologia); // Impresión de contenido de tabla

atencion(arrDental, 'Dental'); // Llamada a función que imprime primera y última atención
tabla(arrDental); // Impresión de contenido de tabla