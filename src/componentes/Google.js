import React, { Component  } from "react";
import GoogleLogin from 'react-google-login';
//import axios from "axios";
//import { Redirect } from "react-router-dom";
//import google from '../google-plus.svg';

class Google extends Component{

    state={
        isLoggedIn: false,
        googleId: '',
        name: '',
        email: '',
        imageUrl: '',
        provider: '',
        ref: null
    }
    
    perfilGoogle(){
        if (this.state.isLoggedIn !== false){
            this.setState({ref: '/perfil_user'});
        }
    }
    
    
    render(){
        const {ref} = this.state;
        if (ref){
            //return <Redirect to={ref} />
        }

        const responseGoogle = (response) => {
            if (response.error !== "popup_closed_by_user"){
                this.setState({ isLoggedIn: true,
                    googleId: response.profileObj.googleId,
                    name: response.profileObj.name,
                    email: response.profileObj.email,
                    imageUrl: response.profileObj.imageUrl,
                    provider: response.tokenObj.idpId 
                });

                // axios({
                //     method: "POST",
                //     url: process.env.REACT_APP_ACCESSHOME5,
                //     data:{
                //         userId: this.state.googleId,
                //         name: this.state.name,
                //         email: this.state.email,
                //         provider: this.state.provider
                //     }
                // })
                // .then(res => {
                //     //console.log(res.data);
                //     localStorage.token = res.data;
                //     localStorage.nomyape = this.state.name;
                //     localStorage.image = this.state.imageUrl;
                //     this.perfilGoogle();
                // })
                // .catch(err => {
                //     console.log(err)
                // });
            }                
        }
               
        return(
            <React.Fragment>
                <GoogleLogin
                    clientId= {process.env.REACT_APP_KEY_GOOGLE}
                    buttonText={<h6><strong>Login with Google</strong></h6>}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className="btn-block bg-danger zoom-google shadow justify-content-center rounded"
                    theme="dark"
                />
            </React.Fragment>
        );
    }
}

export default Google;
