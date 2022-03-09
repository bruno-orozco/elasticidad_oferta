# ¿Qué es Javascript?

Es un lenguaje de programación interpretado, orientado a objetos, débilmente tipado y dinámico.

### Débilmente tipado

Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc).

### Dinámico

Corren realtime. No necesita compilarse, con abrirlo en el navegador lo podemos probar.

### Interpretado

Leerá línea por línea lo que tienes que hacer

### Backwards & Forwards

JS es un Backwards Compatible, ya que todas sus funciones no romperán el código hecho, pero no se podrá utilizar en ese momento hasta que se vuelva estándar.

Con javascript puedes programar apps web, mobil y desktop. También puedes construir backend con Nodejs.

# Tipos de datos

### Tipos primitivos
```javascript
//String (cadenas de texto)
"Hola mundo"

//Number (valores númericos)
22

//Boolean
True and False

// Nulo
null

// Undefined
undefined

```
# ¿Qué son las variables?

### Var 

Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

- Se puede reinicializar: o sea todas las variables se inicializan

Se puede reasignar: la variable ya inicializada le reasignamos otro valor 

Su alcance es función global:  inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

**const** y **let** es la forma en que se declaran las variables a partir de ECMAScript 6,

### const 

sirve para declarar variables que nunca van a ser modificadas:
No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre.

No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre

No es inmutable: no puede cambiar con objetos:

### Let

Son variables que pueden ser modificadas, se pueden cambiar:

No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre.

Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor

Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.

# Funciones

Las funciones son las tareas que va a llevar a cabo el navegador.

Existen 2 tipos de funciones

- Declarativas

- De expresión

### Sintaxis funciones declarativas

```javascript
function <Nombre de la función> (<Parámetros de la función>) {
    <Instrucciones>
}
```

### Sintaxis funciones de expresión o funciones anónimas

Estas funciones tienen la particularidad de que no tienen nombre las funciones.

```javascript
var <Nombre variable> = function (<Parámetos de la función>) {
    <Instrucciones>
}
```

# Scope

Es el alcance que tienen las variables. En el **scope global** existen todas las variables. El **scope local** existe cunado inicializamos una función.

# Hoisting

Es cuando las variables y funciones se declaran antes de que se procese el código.

Esto sólo pasa con versiones anteriores a JS.

# Switch

Es una forma de generar condiciones. Funciona por casos.

var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno!")
}