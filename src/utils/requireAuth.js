import React from 'react';
import jwt from 'jsonwebtoken';
import history from '../history';

export default  (ComposedComponent) => {

    class Authenticate extends React.Component{

        componentDidMount(){
           this.getUserInfo(jwt.decode(localStorage.getItem('jwtToken')));
        }
        
        getUserInfo = (user) => {
            if(!user){
                history.push('/login');
            }
            else{
                if(user.userId && user.username){
                    history.push('/');
                }
                else{
                    history.push('/login');
                }
            }
        }

     

        render(){
            return(
                <ComposedComponent {...this.props} />
            );
        }
    }

   return Authenticate;

};