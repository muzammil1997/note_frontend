import "./style.scss";
import React from "react";
import loginImg from "../../assets/login.svg";
import history from '../../history';
import server from '../../api/server';
import Spinner from '../../components/Spinner/SpinnerPage';

class Login extends React.Component {

  state = { username: '', password: '', isLoading: false, errors: [], error: ''};

  componentDidMount() {
    this.rightSide.classList.add("right");
  }

  changeState = () => {
      history.push('/register');
  }

  onLogin = async () => {
    this.setState({isLoading: true, errors: [], error: ''});
    const {username, password} = this.state;
    const userData = {username, password};
    await server.post('signin',userData).then(res => {
    const token = res.data.token;
    localStorage.setItem('jwtToken', token);
    history.push('/');
//    window.location.reload(true);
    this.setState({isLoading: false});
    
})
.catch(err => {
  if(err.response){
    this.setState({errors: err.response.data})
  }
  else{
    this.setState({error: err.message});
  }
  this.setState({isLoading: false});
  this.rightSide.classList.add("right");
});
this.setState({username:'', password:''});
  }

  render() {
    const { errors, error } = this.state;
    return (
      this.state.isLoading ? <Spinner /> :
        <div className="App">
        <div className="login">
          <div className="container">
          <div className="base-container">
                <div className="header">Login</div>
                    <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" value={this.state.username} onChange={e=>this.setState({username: e.target.value})} placeholder="username" />
                        {errors.username && <small className="form-text text-danger">{errors.username}</small>}
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} onChange={e=>this.setState({password: e.target.value})} placeholder="password" />
                        {errors.password && <small className="form-text text-danger">{errors.password}</small>}
                        </div>
                    </div>
                    {errors.error && <small className="form-text text-danger">{errors.error}</small>}
                    {error && <small className="form-text text-danger">{error}</small>}
                    </div>
                    <div className="footer">
                    <button onClick={this.onLogin} type="button" className="btn">
                        Login
                    </button>
                    </div>
                </div>
          </div>
          <RightSide
            current="Register"
            currentActive="login"
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default Login;
