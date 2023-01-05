import { useState } from 'react';
import './App.css';
import Encabezado from './components/encabezado';
import Explorador from './components/explorador';
import Pestaña from './components/pestaña';

function App() {

  const proyectos = [
    {id: 1, nombre: 'Jean', linkGit: ''},
    {id: 2, nombre: 'Responsive', linkGit: ''},
    {id: 3, nombre: 'Crud', linkGit: ''},
    {id: 4, nombre: 'ASP.net', linkGit: ''}
  ]

  const[pestañas, setPestañas] = useState([])

  const agregarPestaña = (proyectos) => {
    console.log(proyectos)
    setPestañas(
      [...pestañas, proyectos]
    )
  }

  const eliminarPestaña = (proyectos) => {
    console.log(proyectos)
    setPestañas(
      pestañas.filter(pestañas => pestañas !== proyectos)
    )
  }

  return (
    <div className="row principal">
      
      <div className='col-12  encabezado'>
        <Encabezado/>
      </div>

      <div className='row comun'>
        <div className='col-1 bg-warning herramientas'>
          herramientas
        </div>

        <div className='col-2 explorador'>
          <Explorador proyectos={proyectos} agregarPestaña= {agregarPestaña} />
        </div>

        <div className='col-9 vista'>
          <div className='row'>
            
              <Pestaña pestañas={pestañas} eliminarPestaña={eliminarPestaña} />
            
          </div>

          <div className='row vista-pagina'>
            mostrar
          </div>
        </div>


      </div>


    </div>
  );
}

export default App;
