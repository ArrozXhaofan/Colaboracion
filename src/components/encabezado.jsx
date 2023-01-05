import React,{Fragment} from 'react'

 const Encabezado = () => {



    return(

        <Fragment>

<p className='encabezado-titulo'>Visual Jean - [Administrador]</p>
            
            <div className='row'>
                <div className='col-4 encabezado-menu-botones'>
                    <button className='encabezado-boton'>Archivo</button>
                    <button className='encabezado-boton'>Editar</button>
                    <button className='encabezado-boton'>Seleccion</button>
                    <button className='encabezado-boton'>Ver</button>
                    <button className='encabezado-boton'>Ir</button>
                    <button className='encabezado-boton'>Ejecutar</button>
                    <button className='encabezado-boton'>Terminal</button>
                    <button className='encabezado-boton'>Ayuda</button>
                </div>
            </div>


            

        </Fragment>
    )

}
export default Encabezado