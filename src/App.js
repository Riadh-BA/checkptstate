
import React from 'react';
import './App.css';
import './Components/Mydiv.css'
import tof from './Mylogo.png'
import toff from './medal.jpg'
import tofff from './linkdin.png'

class App extends React.Component{
  state ={personne: {fullName:"Achref Ourfeli", bio:"GoMyCode", imgSrc:"https://media.licdn.com/dms/image/D4E03AQGaunQSfTfqmg/profile-displayphoto-shrink_800_800/0/1688719906510?e=2147483647&v=beta&t=tif6i8_4Gnd65h9BUkO2ZB7P6IRZujcibf_zPX_F-NU", profession:"IT"}, show: true}
  
  hanldeShow=()=>{
    this.setState({show:!this.state.show})
  }
  render (){
    console.log(this.state.show)
  return (
    /* CODE SANS CSS
    
    <div>
      <button onClick={this.hanldeShow}>click heer</button>
      {this.state.show?<div><h1>Fullmane: {this.state.personne.fullName}</h1>
      <h1>Bio: {this.state.personne.bio}</h1>
      <img src={this.state.personne.imgSrc} alt='Instructor'/>
        <h1>Profession: {this.state.personne.profession}</h1>
      </div>:<div></div>}
    </div> */

    /* CODE AVEC CSS Mydiv.css */
     <div className='warpper'>
     <div className='logo'>
     <img src={tof} alt='Instructor' width={200} height={50}/>
     </div>
     <div className='nav'>
     <button onClick={this.hanldeShow}>click heer</button>
     </div>
     {this.state.show?
     <div className='main'>
         <div className='sidebar'>
         <h4>Profession: {this.state.personne.profession}</h4>
         <h4>Bio: {this.state.personne.bio}</h4>
         </div>
         <div className='body'>
         Fullmane: {this.state.personne.fullName}
         <img src={this.state.personne.imgSrc} alt='Instructor' width={200} height={200}/>
         </div>
     </div> 
     :<div></div>}
     <div className='footer'>
     <img src={toff} alt='Instructor' width={25} height={25}/>
     <img src={tofff} alt='Instructor' width={25} height={25}/>
     </div>

 </div>
  )
  }
}

export default App;
