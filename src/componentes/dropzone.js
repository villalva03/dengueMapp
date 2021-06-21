import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';

class Dropzone extends Component{


    constructor(props) {
        super(props)
        //this.enviarFotos = this.enviarFotos.bind(this);
        this.state = { arregloFotos: [] }


            this.djsConfig = {
                addRemoveLinks: true,
                acceptedFiles: "image/jpeg,image/png",
                uploadMultiple: true,
                parallelUploads: 1,
                maxFiles: 20,
                autoProcessQueue: true
            };

            this.componentConfig = {
                iconFiletypes: ['.jpg', '.png'],
                showFiletypeIcon: true,
                //postUrl: '/uploadHandler'
                //postUrl: process.env.REACT_APP_SUBIR_IMAGEN

            };

            // If you want to attach multiple callbacks, simply
            // create an array filled with all your callbacks.
            this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];
            // Simple callbacks work too, of course
            this.callback = () => console.log('Hello!');

            //this.success = file =>this.props.updateUrl(file);

            //this.progress = file => console.log(file);
            this.progress = file => console.log(file);

            //this.removedfile = file => console.log('removing...', file.status);

            this.dropzone = null;

        }
    //  handlePost() {
      //    this.dropzone.processQueue();
      // }
        handleFileAdded(file) {
            console.log(file.upload);
        }
        handlePost() {

        }

        hola(){
            
        }

        
    render(){

        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
        init: dz => this.dropzone = dz,
        drop: this.callbackArray,
        addedfile: this.callback,
        canceled: null,
        //success: this.success,
        success: (file, response) => {
            //this.props.score = response;
            console.log(response.fotosPermitidas[0]);
            this.setState({ arregloFotos: [...this.state.arregloFotos, response.fotosPermitidas[0]] });
            const { enviarFotos } = this.props;
            enviarFotos(this.state.arregloFotos);
          },
        //removedfile: this.removedfile,
        removedfile: (file, response) => {
            
            if(file.status === 'canceled' || file.status === 'queued' || file.status === 'error'){
                console.log('cancelado o queued o error porno')
            }else{
            const data = JSON.parse(file.xhr.response)
            console.log(file)
            
            const data1 = data.fotosPermitidas[0]
            console.log(data1);
        
            const item = this.state.arregloFotos.indexOf(data1);
            console.log(item)

            this.state.arregloFotos.splice(item, 1);
            console.log(this.state.arregloFotos)
            
            const { enviarFotos } = this.props;
            enviarFotos(this.state.arregloFotos);

            }
        },
        uploadprogress: this.progress
        }

        console.log(this.state.arregloFotos);

        return(
            <div>
                <DropzoneComponent className="mb-4 mx-auto shadow" config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} >
                </DropzoneComponent>
                {/* <button onClick={this.handlePost.bind(this)}>Upload</button> */}
                </div>
        );
    }
}
export default Dropzone;
