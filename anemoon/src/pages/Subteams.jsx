import React from 'react'
import { Link } from 'react-router-dom'

const Subteams = () => {
  return (
    <div>
        <div class="info">
            <h1>Gespecialiseerde subteams</h1>
        </div>  
        <div class="cards container">
            <div class="row">
                <Link class="card col-4" style={{width: "18rem"}} to="/team-psychodiagnostiek">
                    <img class="card-img-top" src={require("../images/onderzoek.jpg")} alt="foto" />
                    <div class="card-body">
                    <h5 class="card-title">Psychodiagnostiek</h5>
                    </div>
                </Link>
                <Link class="card col-4" style={{width: "18rem"}} to="/team-ontwikkelingsstoornissen">
                    <img class="card-img-top" src={require("../images/ontwikkelingsstoornis.jpg")} alt="foto" />
                    <div class="card-body">
                    <h5 class="card-title">Ontwikkelings-stoornissen</h5>
                    </div>
                </Link>
                <Link class="card col-4" style={{width: "18rem"}} to="/team-traumacentrum">
                    <img class="card-img-top" src={require("../images/trauma.jpg")} alt="foto" />
                    <div class="card-body">
                    <h5 class="card-title">Traumacentrum</h5>
                    </div>
                </Link>
                <Link class="card col-4" style={{width: "18rem"}} to="/team-gezinsbegeleiding">
                    <img class="card-img-top" src={require("../images/gezin.jpg")} alt="foto" />
                    <div class="card-body">
                    <h5 class="card-title">Gezinsbegeleiding</h5>
                    </div>
                </Link>
                <Link class="card col-4" style={{width: "18rem"}} to="/team-eetstoornissen">
                    <img class="card-img-top" src={require("../images/eetstoornis.jpg")} alt="foto" />
                    <div class="card-body">
                    <h5 class="card-title">Eetstoornissen</h5>
                    </div>
                </Link>
                <Link class="card col-4" style={{width: "18rem"}} to="/team-cogmed-werkgeheugentraining">
                    <img class="card-img-top" src={require("../images/cogmed.png")} alt="foto" />
                    <div class="card-body">
                    <h5 class="card-title">Cogmed werkgeheugentraining</h5>
                    </div>
                </Link>
                <Link class="card col-4" style={{width: "18rem"}} to="/team-taalkamp">
                    <img class="card-img-top" src={require("../images/taalkamp.jpg")} alt="foto" />
                    <div class="card-body">
                    <h5 class="card-title">Taalkamp</h5>
                    </div>
                </Link>
                <Link class="card col-4" style={{width: "18rem"}} to="/team-rots-en-water-training">
                    <img class="card-img-top" src={require("../images/rots-en-water.jpg")} alt="foto" />
                    <div class="card-body">
                    <h5 class="card-title">Rots en water training</h5>
                    </div>
                </Link>
                <Link class="card col-4" style={{width: "18rem"}} to="/team-hartcoherentie">
                    <img class="card-img-top" src={require("../images/hart.jpg")} alt="foto" />
                    <div class="card-body">
                    <h5 class="card-title">Hartcoherentie</h5>
                    </div>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Subteams