import React,{useState} from 'react';
import {Container,Row,Col,Form,FormGroup,Input,Label,Button} from 'reactstrap'
import {Password,SignIn, EmailAddress ,CreateAccount, YourName, PrivacyPolicy} from '../../constant';
import { Twitter, Facebook,GitHub } from 'react-feather';
import axios from 'axios';

const Register = (props) => {


   const [user,setUser] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password: ""
    })

    const [togglePassword,setTogglePassword] = useState(false)
    const [password,setPassword] = useState("")

    /*const handleChange = (e) => {
      setPassword(e.target.value)
    }*/

    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,
    [name]:value
    })
    }

    const HideShowPassword  = (tPassword) => {
      setTogglePassword(!tPassword)
    }


     const register = ()=>{
   const {first_name,last_name,email,password} = user
   if (first_name && last_name && email && password){
    axios.post("api/users/register",user )
    .then(res=>console.log(res))
   }
   else{
       alert("invalid input")
   }
 }

    return (
      <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">     
          <div className="login-card">
            <div>
              <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage"/></a></div>
              <div className="login-main"> 
                <Form className="theme-form" action="#" autoComplete="off">
                  <h4>{"Create your account"}</h4>
                  <p>{"Enter your personal details to create account"}</p>
                  <FormGroup>
                    <Label className="col-form-label pt-0">{YourName}</Label>
                    <div className="form-row">
                      <Col xs="6">
                        <Input className="form-control" name="first_name" value={user.first_name} onChange={handleChange} type="text" required="" placeholder="First name"/>
                      </Col>                      
                      <Col xs="6">
                        <Input className="form-control" name="last_name" value={user.last_name} onChange={handleChange} type="text" required="" placeholder="Last name"/>
                      </Col>
                    </div>
                  </FormGroup>

                    <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" name="email" value={user.email} onChange={handleChange} type="email" required="" placeholder="Test@gmail.com"/>
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <Input className="form-control" name="password" value={user.password} onChange={handleChange} type={togglePassword ?  "text" : "password" }  required="" placeholder="*********"/>
                    <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                  </FormGroup>
                  <div className="form-group mb-0">
                    <div className="checkbox ml-3">
                      <Input id="checkbox1" type="checkbox"/>
                      <Label className="text-muted" for="checkbox1">{"Agree with"}<a className="ml-2" href="#javascript">{PrivacyPolicy}</a></Label>
                    </div>
                    <Button color="primary" className="btn-block" type="submit" onClick={register}>{CreateAccount}</Button>
                  </div>
                  <p className="mt-4 mb-0">{"Already have an account?"}<a className="ml-2" href="#javascript">{SignIn}</a></p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    );
}

export default Register;