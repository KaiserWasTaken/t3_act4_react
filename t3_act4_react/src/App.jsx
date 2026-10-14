import { useState } from 'react'
import './App.css'

function Encabezado() {
  return (
    <header className="encabezado">
      <p className="etiqueta">Mi primera app con React</p>
      <h1>Lista de tareas</h1>
      <p className="subtitulo">
        Organiza tus pendientes con componentes, props y estado.
      </p>
    </header>
  )
}

function Tarea({ tarea, cambiarEstado }) {
  return (
    <li className={tarea.completada ? 'tarea completada' : 'tarea'}>
      <button
        className="boton-check"
        onClick={() => cambiarEstado(tarea.id)}
        aria-label={tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada'}
      >
        {tarea.completada ? '✓' : ''}
      </button>
      <span>{tarea.texto}</span>
    </li>
  )
}

function ListaTareas({ tareas, cambiarEstado }) {
  if (tareas.length === 0) {
    return <p className="mensaje-vacio">No hay tareas todavía. ¡Agrega la primera!</p>
  }

  return (
    <ul className="lista-tareas">
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} cambiarEstado={cambiarEstado} />
      ))}
    </ul>
  )
}

function App() {
  const [texto, setTexto] = useState('')
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Repasar componentes funcionales', completada: true },
    { id: 2, texto: 'Practicar el uso de props', completada: false },
    { id: 3, texto: 'Crear una mini aplicación', completada: false },
  ])

  function agregarTarea(evento) {
    evento.preventDefault()

    if (texto.trim() === '') {
      return
    }

    const nuevaTarea = {
      id: Date.now(),
      texto: texto.trim(),
      completada: false,
    }

    setTareas([...tareas, nuevaTarea])
    setTexto('')
  }

  function cambiarEstado(id) {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada }
      }

      return tarea
    })

    setTareas(tareasActualizadas)
  }

  const pendientes = tareas.filter((tarea) => !tarea.completada).length

  return (
    <main className="contenedor">
      <Encabezado />

      <section className="panel-tareas">
        <div className="resumen">
          <div>
            <p className="texto-pequeno">Mis pendientes</p>
            <h2>{pendientes} {pendientes === 1 ? 'tarea' : 'tareas'}</h2>
          </div>
          <span className="contador">{tareas.length} en total</span>
        </div>

        <form className="formulario" onSubmit={agregarTarea}>
          <input
            type="text"
            value={texto}
            onChange={(evento) => setTexto(evento.target.value)}
            placeholder="Escribe una nueva tarea"
            aria-label="Nueva tarea"
          />
          <button type="submit">Agregar</button>
        </form>

        <ListaTareas tareas={tareas} cambiarEstado={cambiarEstado} />
      </section>
    </main>
  )
}

export default App
