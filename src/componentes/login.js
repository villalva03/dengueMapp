import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import facebook from '../facebook1.svg';
//import linkedin from '../linkedin.svg';
//import twitter from '../gorjeo.svg';
// import google from '../google-plu.svg';

//import Navegacion from './navegacion';

//import Facebook from './Facebook';
import Google from './Google';
//import Linkedin from './Linkedin';





class Login extends Component{

    constructor(props){
        super(props)
        this.state={
            userEmail: '',
            pass: '',
            ref: null        
        }
    }



    email(e){
        // console.log(e);
        const email = e;
        this.setState({ userEmail: email });
    }

    pass(e){
        //console.log(e);
        const pass = e;
        this.setState({ pass: pass });
    }

    ingresar(){
        if (this.state.userEmail === 'municipalidad@gmail.com' && this.state.pass === '123'){
            //console.log('hola admin')
            //return <Redirect to={this.state.refAdmin} />
            this.setState({ ref: '/admin_denuncia' })
            
        }else{
            this.setState({ ref: '/user_denuncia' })        
        }
    }

    render(){    
        //console.log(this.state.userEmail)
        //console.log(this.state.pass)

        const {ref} = this.state;
        if (ref){
            return <Redirect to={ref} />
        }


        return(
       
            <div>
            {/*<Navegacion
             naveg={"bg-success navbar navbar-expand-lg navbar-light sticky-top"}
            />*/}
            
           

                        
            <div className="d-flex justify-content-center mt-5 mb-4">
            
                
                <div className="card">
                    
                    <h5 className="card-header bg-success text-white text-center py-4">
                        <strong>Iniciar Sesion</strong>
                    </h5>

                    <div className="card-body px-lg-5">
                    
                        
                    <div className='row justify-content-center'>



                        <div class="form-group col-10">
                            <label htmlFor="exampleFormControlInput1">Email</label>
                            <input onChange={()=>this.email(this.refs.email.value)} ref='email' type="email" class="form-control" id="exampleFormControlInput1" placeholder="ejemplo@gmail.com"></input>
                        </div>

                        <div class="form-group col-10">
                            <label htmlFor="exampleFormControlInput1">Contraseña</label>
                            <input onChange={()=>this.pass(this.refs.pass.value)} ref='pass' type="password" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
                        </div>

                        <button onClick={()=>this.ingresar()} className="btn btn-success mx-auto" type="button">Ingresar</button>

                    </div>









                    </div>

                </div>
                            
            </div> 
        </div>

        );
    }
}

export default Login;