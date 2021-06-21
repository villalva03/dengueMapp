import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { icon } from 'leaflet';
import basureros from '../basureros.json';
import NavBar from './navBar';

class Mapadenuncia extends Component{
    constructor(props) {
        super(props);    
        };
            
    render(){
       return(
        <React.Fragment>
        <NavBar /> 
            <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="">
                    <Map style={{ width: "80vw", height: "80vh" }} center={[-27.4502473335, -58.76981735]} zoom={13}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
                    contributors'
                  />
                  {basureros.map(anuncio => (
                      //console.log(item)
                    <Marker
                        position={[anuncio.lat, anuncio.lang]}
                    >
                    <Popup
                        position={[anuncio.lat, anuncio.lang]}
                    >

                        <div  className='' >
                            <img className="img-fluid" style={{ width: "15vw", height: "20vh", borderRadius: "0.3vw" }} src={anuncio.foto} alt="First slide"></img>
                            {/* <p>{item}</p> */}
                        </div>
                        {/*<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        
                        {anuncio.publicacionFotos.map((filtro, item)=>{
                            let clase= item === (this.state.index) ? 'carousel-item active' : 'carousel-item';
                            return(
                                
                                    <div key={item}>
                                    <div  className="carousel-inner">
                            
                                        <div  className={clase} >
                                            <img className="img-fluid" style={{ width: "15vw", height: "20vh", borderRadius: "0.3vw" }} src={filtro.rutaFoto} alt="First slide"></img>
                                            {/* <p>{item}</p> */}
                                        {/*</div>
                                    </div>*/}
                                    {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a onClick={()=>this.next()} className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a> 
                            </div>
                                 
                            )
                        })}  
                        </div> */}

                        <div className='mb-1 mt-1'>Denuncia: {anuncio.denuncia}</div>
                        <div className='mb-1'>Fecha Reclamo: {anuncio.fechaReclamo}</div>
                        <div className='mb-1'>Direccion: {anuncio.direccion}</div>
                        <div className='mb-1'>Dni: {anuncio.dni}</div>
                        <div className='mb-1'>Tipo de espacio: {anuncio.tipoEspacio}</div>
                        <div className='mb-1'>Dimension: {anuncio.dimensionBasura}</div>


                        
                    </Popup>

                    </Marker>

                  ))}

                  
                  
                </Map>
                    
                </div>


            </div>
        </React.Fragment>
        );
    }
}

export default Mapadenuncia;