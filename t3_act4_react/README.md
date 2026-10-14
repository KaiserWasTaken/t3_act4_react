# Mi lista de tareas con React

Esta es una mini aplicación creada para practicar los conceptos básicos de
React y Vite. Permite escribir tareas, agregarlas a una lista y marcarlas como
completadas.

## Funcionalidades

- Agregar una tarea desde un formulario.
- Mostrar las tareas de forma dinámica.
- Marcar una tarea como completada o pendiente.
- Mostrar cuántas tareas están pendientes y cuántas existen en total.
- Mostrar un mensaje cuando la lista no tiene tareas.

## Conceptos de React utilizados

- Componentes funcionales: `Encabezado`, `Tarea`, `ListaTareas` y `App`.
- Props: `Tarea` recibe la tarea y la función `cambiarEstado`; `ListaTareas`
  recibe la lista de tareas y esa misma función.
- Estado local con `useState`.
- Eventos `onSubmit`, `onChange` y `onClick`.
- Renderizado condicional con `if` y el operador ternario.
- Renderizado de listas usando `.map()` y la propiedad `key`.
- Estilos con archivos CSS tradicionales.

## Instalación y ejecución

1. Clona o descarga este proyecto.
2. Abre una terminal dentro de la carpeta del proyecto.
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre en el navegador la dirección que muestre Vite, normalmente
   `http://localhost:5173`.

Para comprobar el código con ESLint:

```bash
npm run lint
```

Para crear la versión de producción:

```bash
npm run build
```

## Respuestas

### a) ¿Qué diferencia hay entre props y state en React?

Las **props** son datos que un componente recibe desde su componente padre.
Sirven para que el padre le envíe información o funciones al hijo. El
componente hijo no debe modificar directamente esas props.

El **state** es información que pertenece al componente y puede cambiar
durante el uso de la aplicación. Cuando el state cambia, React vuelve a
renderizar el componente para mostrar el nuevo resultado.

En esta aplicación, `tareas` es un state de `App`. La lista y la función para
cambiar una tarea se envían como props a `ListaTareas` y `Tarea`.

### b) ¿Por qué es importante usar una `key` al renderizar una lista?

La `key` permite que React identifique cada elemento de una lista. Así puede
saber cuál elemento cambió, se agregó o se eliminó, y actualizar solamente lo
necesario en la pantalla.

En este proyecto cada tarea tiene un `id`, por eso se utiliza como key:

```jsx
{tareas.map((tarea) => (
  <Tarea key={tarea.id} tarea={tarea} cambiarEstado={cambiarEstado} />
))}
```

Usar una key estable y única ayuda a evitar comportamientos inesperados cuando
la lista cambia.

### c) ¿Qué hace `useState` y dónde se utilizó?

`useState` permite crear una variable de estado dentro de un componente
funcional. También entrega una función para actualizar esa variable. Cuando se
usa la función de actualización, React vuelve a mostrar el componente con el
nuevo valor.

En esta mini aplicación se utilizó para guardar el texto que se escribe en el
input:

```jsx
const [texto, setTexto] = useState('')
```

Cada vez que el usuario escribe, `setTexto` actualiza el valor. También se
utilizó otro `useState` para guardar el arreglo de tareas y actualizarlo al
agregar una tarea o marcarla como completada.

### d) Enlace del repositorio de GitHub

Pega aquí el enlace del repositorio:

**Pendiente:** `https://github.com/tu-usuario/tu-repositorio`

### e) Enlace del proyecto desplegado en GitHub Pages

Pega aquí el enlace de la aplicación publicada:

**Pendiente:** `https://tu-usuario.github.io/tu-repositorio/`

