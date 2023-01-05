import React,{Fragment, useState} from 'react'

const Explorador = (props) => {

    // const agregarPestaña = (proyectos) => {

        
    // }
    
    return(
        <Fragment>
            <div className='explorador-cabeza'>
                <p className='explorador-titulo'>EXPLORADOR</p>
                <button className='explorador-boton'>. . .</button>
            </div>

            <div className='explorador-contenido'>

                {/* MAPEO DE PROYECTOS */}

                {
                    props.proyectos.map(proyectos => (
                        <button key={proyectos.id} className='explorador-btn-p'
                            onClick={() => props.agregarPestaña(proyectos.nombre)}
                        
                        >{proyectos.nombre}</button>
                        
                    )    
                    )
                }
                
           

            </div>

        </Fragment>
    )
}

export default Explorador
