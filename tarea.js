
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array
const Array = [3,4,2,6,16,98,1,34,10];
const sumArray = () => {
    let suma=0;
    for(let i=0;i < Array.length; i++){
        suma += Array[i];
    }
    return suma;
};

console.log(sumArray());
  
// Función filterEvenNumbers: Filtrar números pares de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con solo los números pares del array original
const filterEvenNumbers = () => {
    return Array.filter(numero=> numero % 2==0)
};


// Función findMaxNumber: Encontrar el mayor número en un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - El mayor número en el array

const findMaxNumber = () => {
    let numMayor = 0;

    for(i=0; i<Array.length; i++){
        if(Array[i]>numMayor){
            numMayor=Array[i];
        }
    }

    return numMayor
};
  
// Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
// Parámetros: array (Array) - Un array de strings
// Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas
const String = ["sebastian","antonella","gabriella","isabella"]
const toUpperCaseStrings = () => {
    return String.map(arreglo => arreglo.toUpperCase())
};

  
// Función calculateAverage: Calcular el promedio de un array de números
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - El promedio de los números en el array
const calculateAverage = () => {
    let Suma = Array.reduce((acumulador, valorActual) => acumulador+valorActual);
    return Suma/Array.length;
};
  
// Función sortNumbersAscending: Ordenar un array de números de forma ascendente
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente
const sortNumbersAscending = () => {
    return Array.sort((a,b)=>a-b);
};
  
// Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
// Parámetros: 
// - array (Array) - Un array de elementos
// - condition (Function) - Una función de condición que devuelve true o false
// Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
const findFirstElement = () => {
    let condition = (number)=> number %2 == 0; 

    for(i=0;i<Array.length;i++)
    {
        if(condition(Array[i])){
            return true;   
        }
    }
    return undefined;
};
  
// Función countElements: Contar la cantidad de elementos en un array
// Parámetros: array (Array) - Un array de elementos
// Devuelve: Number - La cantidad de elementos en el array
const countElements = () => {
    return Array.length
};
  
// Función concatenateArrays: Concatenar dos arrays
// Parámetros: 
// - array1 (Array) - El primer array a concatenar
// - array2 (Array) - El segundo array a concatenar
// Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados
const concatenateArrays = () => {
  let concatenado = Array.concat(String)
    return concatenado
};
  
// Función squareNumbers: Calcular el cuadrado de cada número en un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
const squareNumbers = () => {
    return Array.map(cuadrados => cuadrados **2);
};

// Función flecha para agregar habilidades a un jugador de un juego
const agregarHabilidad = (jugador, nuevaHabilidad) => {
    /*
    Parámetros de entrada:
    - jugador: objeto que representa al jugador del juego.
    - nuevaHabilidad: string que representa la nueva habilidad a agregar al jugador.

    Lo que hace la función:
    Esta función recibe un objeto de jugador y una nueva habilidad como entrada.
    Verifica si el jugador tiene un arreglo de habilidades. Si no lo tiene, lo crea.
    Luego, agrega la nueva habilidad al arreglo de habilidades del jugador si esta no existe

    Valor de retorno:
    Retorna el objeto jugador modificado con la nueva habilidad agregada.
    */
    if (!jugador.hasOwnProperty('habilidades')) {
        jugador.habilidades = [];
    }
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
        jugador.habilidades.push(nuevaHabilidad);
    }
    
    return jugador;
   
};

const player1 = {
    nombre : "Sebastian",
    habilidades : ["saltar, correr"]
}
const player2 = {
    nombre : "Pancho"
}

// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.
const peliculas = [
    {titulo:"interstellar", duracion : 144, genero:"ficcion",añoLanzamiento:"2014", calificacion : 5},
    {titulo:"Harry potter 4", duracion : 120, genero:"fantasia",añoLanzamiento:"2004", calificacion : 4},
    {titulo:"El irlandes", duracion : 180, genero:"biopic",añoLanzamiento:"2018", calificacion : 4.5},
    {titulo:"Oppenheimmer", duracion : 180, genero:"biopic",añoLanzamiento:"2023", calificacion : 5},
    {titulo:"Mente indomable", duracion : 90, genero:"drama",añoLanzamiento:"1970", calificacion : 4},
    {titulo:"Codigo da-vinci", duracion : 100, genero:"historia",añoLanzamiento:"2007", calificacion : 3.5},
]
const calcularDuracionTotal = (peliculas) => {
    let duracionTotal;

    for(pelicula of peliculas){

        if(pelicula.hasOwnProperty("duracion")){
            duracionTotal+= pelicula.duracion;
        }
    }

    return duracionTotal;
};


// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.
const buscarPeliculas = (peliculas, titulo, genero) => {
    return peliculas.filter(pelicula => {
        
        const tituloEnMinusculas = pelicula.titulo.toLowerCase();
        const generoEnMinusculas = pelicula.genero.toLowerCase();
        
        return tituloEnMinusculas.includes(titulo.toLowerCase()) && generoEnMinusculas.includes(genero.toLowerCase());
    });
};

// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
const calcularPromedioPuntajes = (peliculas) => {
   const puntajeTotal = peliculas.reduce((acumulador,pelicula) => {
    return acumulador+pelicula.calificacion;
   },0);
   return puntajeTotal/peliculas.length;
};

// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
    // Filtrar las películas por año de lanzamiento.
    return peliculas.filter(pelicula =>pelicula.añoLanzamiento>año);
};


// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
    
    const peliculasDelGenero = peliculas.filter(pelicula => pelicula.genero.toLowerCase() == genero.toLowerCase());
    if (peliculasDelGenero.length == 0) {
        return 0;
    };
    const duracionTotal = peliculasDelGenero.reduce((acumulador, pelicula) => {
        return acumulador + pelicula.duracion;
    }, 0);
    
    return duracionTotal / peliculasDelGenero.length;
};



// Clase base que representa un vehículo
class Vehiculo {
    /**
     * Constructor de la clase Vehiculo.
     * @param {string} marca - La marca del vehículo.
     * @param {string} modelo - El modelo del vehículo.
     * @param {number} año - El año de fabricación del vehículo.
     */
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    /**
     * Método para obtener la información del vehículo.
     * @returns {string} - La información del vehículo en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Vehículo: ${this.marca}- Modelo: ${this.modelo} - Año: ${this.año}`;
    }
}


// Clase que representa un automóvil
class Automovil extends Vehiculo {
    /**
     * Constructor de la clase Automovil.
     * @param {string} marca - La marca del automóvil.
     * @param {string} modelo - El modelo del automóvil.
     * @param {number} año - El año de fabricación del automóvil.
     * @param {string} color - El color del automóvil.
     * @param {number} cilindrada - La cilindrada del motor del automóvil.
     * @param {number} potencia - La potencia del motor del automóvil.
     * @param {number} numPuertas - El número de puertas del automóvil.
     * @param {number} numAsientos - El número de asientos del automóvil.
     * @param {string} tipoTransmision - El tipo de transmisión del automóvil.
     */
    constructor(marca, modelo, año,color,cilindrada,potencia,numPuertas,
        numAsientos,tipoTransmision) {
            super(marca, modelo, año);
        
            this.color = color;
            this.cilindrada = cilindrada;
            this.potencia = potencia;
            this.numPuertas = numPuertas;
            this.numAsientos = numAsientos;
            this.tipoTransmision = tipoTransmision;
        }
    /**
     * Método para obtener la información del automóvil.
     * @returns {string} - La información del automóvil en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()} - Color: ${this.color}, Cilindrada: ${this.cilindrada},
         Potencia: ${this.potencia}, Puertas: ${this.numPuertas}, Asientos: ${this.numAsientos},
         Transmisión: ${this.tipoTransmision}`;
    }
}

// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
    /**
     * Constructor de la clase Motocicleta.
     * @param {string} marca - La marca de la motocicleta.
     * @param {string} modelo - El modelo de la motocicleta.
     * @param {number} año - El año de fabricación de la motocicleta.
     * @param {string} color - El color de la motocicleta.
     * @param {number} cilindrada - La cilindrada del motor de la motocicleta.
     * @param {number} potencia - La potencia del motor de la motocicleta.
     * @param {number} numRuedas - El número de ruedas de la motocicleta.
     * @param {string} tipo - El tipo de motocicleta (deportiva, touring, etc.).
     */
    constructor(marca, modelo, año,color,cilindrada,potencia,numRuedas,tipo) {
            super(marca, modelo, año);
        
            this.color = color;
            this.cilindrada = cilindrada;
            this.potencia = potencia;
            this.numRuedas = numRuedas;
            this.tipo = tipo;
        }

    /**
     * Método para obtener la información de la motocicleta.
     * @returns {string} - La información de la motocicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()} - Color: ${this.color}, Cilindrada: ${this.cilindrada},
         Potencia: ${this.potencia}, Numero de ruedas: ${this.numRuedas}, Tipo: ${this.tipo}`;
    }
}

// Clase que representa un camión
class Camion extends Vehiculo {
    /**
     * Constructor de la clase Camion.
     * @param {string} marca - La marca del camión.
     * @param {string} modelo - El modelo del camión.
     * @param {number} año - El año de fabricación del camión.
     * @param {string} color - El color del camión.
     * @param {number} cilindrada - La cilindrada del motor del camión.
     * @param {number} potencia - La potencia del motor del camión.
     * @param {number} numEjes - El número de ejes del camión.
     * @param {number} capacidadCarga - La capacidad de carga del camión en toneladas.
     * @param {string} tipoCarroceria - El tipo de carrocería del camión (remolque, furgón, etc.).
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, numEjes, capacidadCarga, tipoCarroceria) {
        super(marca, modelo, año);
        
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numEjes = numEjes;
        this.capacidadCarga = capacidadCarga;
        this.tipoCarroceria = tipoCarroceria;
    }

    /**
     * Método para obtener la información del camión.
     * @returns {string} - La información del camión en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()} - Color: ${this.color}, Cilindrada: ${this.cilindrada},
         Potencia: ${this.potencia}, Ejes: ${this.numEjes}, Capacidad de Carga: ${this.capacidadCarga} toneladas,
         Tipo de Carrocería: ${this.tipoCarroceria}`;
    }
}

// Clase que representa un autobús
class Autobus extends Vehiculo {
    /**
     * Constructor de la clase Autobus.
     * @param {string} marca - La marca del autobús.
     * @param {string} modelo - El modelo del autobús.
     * @param {number} año - El año de fabricación del autobús.
     * @param {string} color - El color del autobús.
     * @param {number} cilindrada - La cilindrada del motor del autobús.
     * @param {number} potencia - La potencia del motor del autobús.
     * @param {number} capacidadPasajeros - La capacidad de pasajeros del autobús.
     * @param {string} tipoCombustible - El tipo de combustible del autobús.
     * @param {string} tipoMotor - El tipo de motor del autobús (diésel, gasolina, eléctrico, etc.).
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, capacidadPasajeros, tipoCombustible, tipoMotor) {
        super(marca, modelo, año);
        
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.capacidadPasajeros = capacidadPasajeros;
        this.tipoCombustible = tipoCombustible;
        this.tipoMotor = tipoMotor;
    }

    /**
     * Método para obtener la información del autobús.
     * @returns {string} - La información del autobús en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()} - Color: ${this.color}, Cilindrada: ${this.cilindrada},
         Potencia: ${this.potencia}, Capacidad de Pasajeros: ${this.capacidadPasajeros},
         Tipo de Combustible: ${this.tipoCombustible}, Tipo de Motor: ${this.tipoMotor}`;
    }
}

// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
    /**
     * Constructor de la clase Bicicleta.
     * @param {string} marca - La marca de la bicicleta.
     * @param {string} modelo - El modelo de la bicicleta.
     * @param {number} año - El año de fabricación de la bicicleta.
     * @param {string} tipo - El tipo de bicicleta (montaña, carretera, urbana, etc.).
     * @param {number} numMarchas - El número de marchas de la bicicleta.
     * @param {string} material - El material del que está hecha la bicicleta (aluminio, acero, carbono, etc.).
     * @param {string} suspencion - El tipo de suspensión de la bicicleta (delantera, trasera, doble, rígida, etc.).
     * @param {string} frenos - El tipo de frenos de la bicicleta (disco, v-brake, caliper, etc.).
     * @param {string} tipoManubrio - El tipo de manubrio de la bicicleta (recto, curvo, doble altura, etc.).
     */
    constructor(marca, modelo, año, tipo, numMarchas, material, suspension, frenos, tipoManubrio) {
        super(marca, modelo, año);

        this.tipo = tipo;
        this.numMarchas = numMarchas;
        this.material = material;
        this.suspension = suspension;
        this.frenos = frenos;
        this.tipoManubrio = tipoManubrio;
    }

    /**
     * Método para obtener la información de la bicicleta.
     * @returns {string} - La información de la bicicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()} - Tipo: ${this.tipo}, Número de Marchas: ${this.numMarchas},
         Material: ${this.material}, Suspensión: ${this.suspension}, Frenos: ${this.frenos},
         Tipo de Manubrio: ${this.tipoManubrio}`;
    }
}

/**
 * Por favor no borrar el código que hasta de aqui en adelante.
 */

// Exportar las funciones para su uso en otros archivos.
 
  module.exports = { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
  };
  