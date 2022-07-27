import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import CakeCard from './CakeCard.js'
import Cart from './Cart.js'

export default function CakeContainer() {

    const [cakes, setCakes] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'cakes')
            .then(res => res.json())
            .then(json => setCakes(json))
    }, [])

    function populateCakes() {
        return cakes.map(cake => <CakeCard cake={cake} key={cake.id}/>)
    }

    return(
        <div className="row">
            <div className="col-2">
              <div className="row">
              <div className="col-1">
                <h2>Cakes</h2>
                <br />
                {cakes && populateCakes()}
              </div>
              </div>
            </div>

        </div>
        
    )

}
