import React, {useState} from 'react';
import './App.css';

const App = () => {
  
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('????');
  

  const solve = () => {
    

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      
      let bmi = (weight / ( ((height)/100) * ((height)/100) ));
      setBmi(bmi.toFixed(1));

      /*
      pehle aise bmi calculate kiya tha par next time previous kuch store
      kar raha tha so itne sare variables ki wajah se purani value aa ja rahi thi
      so its bettet to work with actual variables 
      let ht = height/100;
      let wt = weight;
      let ans = (weight)/(ht*ht);
      let n = ans.toFixed(1);
      setBmi(n);
      */

      if (bmi < 18.5) {
        setMessage('underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('healthy weight');
      } else {
        setMessage('overweight');
      }
    }
  }

    return (
        <div className="App">
       <h1>BMI calculator</h1>    
       <div className= "crd">
       <p className="crd2">{bmi}</p>
       <button type="submit" className="buttonStyle" onClick={solve}>Calculate</button>
       <h2>Your are {message}</h2>
       <div className="div">
        <input  value={weight} onChange={(e) => setWeight(e.target.value)} className="inputStyle" ></input>
        <input  value={height} onChange={(event) => setHeight(event.target.value)} className="inputStyle2" ></input>
        <div className="name">
         <p className="name1">weight in kg</p>
         <p className="name2">height in cm</p>
        </div>
        </div>
       </div>
      </div>
    )
};


export default App;
