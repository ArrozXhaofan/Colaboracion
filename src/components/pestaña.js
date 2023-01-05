import React, { Fragment } from 'react'
import {v4 as uuidv4} from 'uuid'

const Pestaña = (props) => {

    return(
        <Fragment>
        <div className='col-9 vista-pestaña'>

            {
                props.pestañas.map(pestañas => (

                    <div key={uuidv4()} className='pestaña-cajon' >
                        <p className='pestaña-titulo'>{pestañas}</p>
                        <button className='pestaña-boton'
                            onClick={()=> props.eliminarPestaña(pestañas)}
                        >x</button>
                    </div>
                ))
            }
                 
            
                
        </div>  
        </Fragment>

    )
}

export default Pestaña