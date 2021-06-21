import React, { Component } from "react";
import {Map, TileLayer, Popup, Marker, withLeaflet} from "react-leaflet";
import NavBar from './navBar';

const MyMarker = props => {

  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  return <Marker ref={initMarker} {...props}/>
}

class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    this.setState({ currentPos: e.latlng });
  }

  alert(){
    alert('Gracias por la información. El Municipio ya esta trabajando');
  }

  render() {
      console.log(this.state.currentPos);
    return (
      <React.Fragment>
       <NavBar /> 
      
      <div className="d-flex justify-content-center mt-3 mb-3">
        <Map style={{ width: "150vmin", height: "80vh" }} zoom={13} center={{ lat: -27.4502473335, lng: -58.76981735}} onClick={this.handleClick}>
          <TileLayer
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          { this.state.currentPos && <MyMarker position={this.state.currentPos}>
            <Popup className='popup'> 
              {/*position={this.state.currentPos}>
    Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>*/}


              


              <div className='form row'>

                <p class="form-group col-lg-12 text-center"><h4>Formulario de denuncia</h4></p>
                Popular repositor
                <div class="form-group col-lg-6">
                  <label for="exampleFormControlInput1">Dni</label>
                  <input type="text" class="form-control denuncia" id="exampleFormControlInput1" placeholder="Dni"></input>
                </div>

                <div class="form-group col-lg-6">
                  <label for="exampleFormControlInput1">Telefono</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Telefono"></input>
                </div>

                <div class="form-group col-lg-6">
                  <label for="exampleFormControlInput1">Direccion del reclamo</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Direccion del reclamo"></input>
                </div>

                <div className='col-lg-6'>
                  <label className="form-check-label mb-2">
                    Tipo de espacio
                  </label>

                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                    <label className="form-check-label" for="exampleRadios2">
                      Publico
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2"></input>
                    <label className="form-check-label" for="exampleRadios3">
                      Privado
                    </label>
                  </div>

                </div>

                <div class="form-group col-lg-6">
                  <label for="exampleFormControlInput1">Tipo de basura</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ej. chatarras"></input>
                </div>

                <div class="form-group col-lg-6">
                  <label for="exampleFormControlInput1">Dimension (aproximado)</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ej. 4x5m"></input>
                </div>

                <div class="form-group col-lg-6">
                  <label for="exampleFormControlTextarea1">Descripcion</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div class="form-group col-lg-6">
                  <label for="exampleFormControlFile1">Subir Imagen</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                </div>
                <button onClick={()=>this.alert()} className="btn btn-primary mx-auto" type="button">Enviar</button>
              </div>
              
            </Popup>
          </MyMarker>}
        </Map>
      </div>
      </React.Fragment>
    )
  }
}

export default MapExample;
