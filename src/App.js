import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  const [themeMode,toggleMode] = useState('light');
  const [text,modifyText] = useState('');
  
  const changeMode = ()=>{
    if(themeMode === 'light'){
      toggleMode('dark');
      document.body.style.backgroundColor = "#001D6E";
    }else{
      toggleMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  const onChange = (event)=>{
    modifyText(event.target.value);
  }

  const upperCase = ()=>{
    modifyText(text.toUpperCase());
  }
  const lowerCase = ()=>{
    modifyText(text.toLowerCase());
  }

  const reset = ()=>{
    modifyText("");
  }

  const copy = ()=> {
    var text = document.getElementById('textBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const capitalize = ()=>{
    let initial_arr = text.split(" ");
    let final_arr = [];
    initial_arr.forEach((text)=>{
      final_arr.push(text[0].toUpperCase()+text.slice(1).toLowerCase())

    })
    modifyText(final_arr.join(' '))
  }

  return (
   <>
   <Navbar mode={themeMode} toggle={changeMode} />
   <div className="container text-center">
     <TextArea title="Enter the text below" mode={themeMode} val={text} onchange={onChange} />
   <Button title="UPPER CASE" color="blueColor" customClass="shadow " func={upperCase} />
   <Button title="lower case" color="blueColor" customClass="shadow" func={lowerCase} />
   <Button title="Capitalize" color="blueColor" customClass="shadow" func={capitalize} />
   <Button title="Copy" color="greyBgColor" customClass="shadow" func={copy} />
   <Button title="Reset" color="whiteBgColor" func={reset} customClass="shadow border border-dark" />
   </div>
   <Footer mode={themeMode} />
   </>
  );
}

export default App;
