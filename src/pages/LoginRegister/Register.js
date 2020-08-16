import "./style.scss";
import React from "react";
import loginImg from "../../assets/login.svg";
import history from '../../history';
import server from '../../api/server';
import Spinner from '../../components/Spinner/SpinnerPage';

class Register extends React.Component {

  state = { username: '', email: '', password: '', error: '', errors: [], isLoading: false, success: '' };

  componentDidMount() {
    this.rightSide.classList.add("left");
  }

  changeState() {
    history.push('/login');
  }

  onRegister = async () => {
    this.setState({isLoading: true, error: '', errors: [], success: ''});
    const {username, email, password} = this.state;
    const userData = {username, email, password};
    await server.post('signup',userData)
    .then(res=>{ 
      this.setState({ username: '', email: '', password: '', success: 'Successfully Registered Plz Login',isLoading: false});
    })
    .catch(err=>{ 
      if(err.response){
        this.setState({errors: err.response.data})
      }
      else{
        this.setState({error: err.message});
      }
      this.setState({isLoading: false});
    });
    this.setState({ username: '', email: '', password: ''});
    this.rightSide.classList.add("left");
  }

  render() {
    const { errors, error, email, password, username, success, isLoading } = this.state;

    return (
      isLoading ? <Spinner /> :
        <div className="App">
        <div className="login">
          <div className="container">
          <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={e=>this.setState({username: e.target.value})} placeholder="username" />
                    {errors.username && <small className="form-text text-danger">{errors.username}</small>}
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange={e=>this.setState({email: e.target.value})} placeholder="email" />
                    {errors.email && <small className="form-text text-danger">{errors.email}</small>}
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={e=>this.setState({password: e.target.value})} placeholder="password" />
                    {errors.password && <small className="form-text text-danger">{errors.password}</small>}
                    </div>
                </div>
                {error && <small className="form-text text-danger">{error}</small>}
                {success && <small className="form-text text-success">{success}</small>}
        
                </div>
                <div className="footer">
                <button type="button" onClick={this.onRegister} className="btn">
                    Register
                </button>
                </div>
            </div>
          </div>
          <RightSide
            current="Login"
            currentActive="register"
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

export default Register;
