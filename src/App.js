
import './App.css';
import React, {useState, useEffect, useRef} from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import { gender, age, nationality } from './services/api.js'
import SearchHistory from './components/history/SearchHistory.jsx'
import Demographics from './components/demogrphics/Demographics.jsx'
import Empty from './components/messages/Empty.jsx'
import Header from './components/header/Header.jsx' 



function App() {
    
  const [name, setName] = useState('');
  const [searchedNames, setSearchedNames] = useState([]);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const inputText = useRef(null);
  const placeHolder = 'Insert name here!';
  const [natioanlityData, setNatioanlityData] = useState([]);
  const [genderData, setGenderData] = useState('');
  const [ageData, setAgeData] = useState(0);
  
  function changeInput(){
     
    console.log(inputText.current.value)
    let value = inputText.current.value.toString().toLowerCase();
    let length = value.length;
    let flag = true;
    console.log(value,length,flag)
    for(let i = 0; i < length; i++){
      if(value[i].charCodeAt(0) <97 || value[i].charCodeAt(0) >122 ){
        flag=false;
        break;
      }
    }
    console.log(value.length,flag)
    if(flag){
      setSearchedNames([name, ...searchedNames])
      setName(inputText.current.value)
      handleOpen()
    }
    else {
      alert('Please enter English Alphabets!')
      flag=true;
    } 

  }
  
  useEffect(()=>{
      getData();      
  },[name])

  const getData = async () => {
    try{
       let data1 = await gender(name)
       setGenderData(data1.gender) 
       let data2 = await age(name)
       setAgeData(data2.age)
       let data3 = await nationality(name)
       setNatioanlityData(data3.country)
      console.log(genderData,ageData,natioanlityData)
    }
    catch(error){
      console.log(error)
    }
  }

  function handleOpen(){
    setOpen(true);
  }

  function handleClose(){
    setOpen(false);
  }
  function handleShow(){
    setShow(true)
  }

  function handleHide(){
    setShow(false);
  }

  function func(){
    handleShow()
  }

  return (
    <Box className="App">  
       <Header/>  
       <Box className="AppContainer"> 
        <Box className="AppContent">  
          <TextField className='changeName' placeholder={placeHolder} inputRef={inputText} variant='outlined'/>     
          <Button className='btnSubmit' onClick={changeInput} variant='contained'>Search</Button> 
          <Button className='btnList' onClick={func} variant='contained'>List</Button>
          {genderData && ageData && natioanlityData 
          ? <Demographics className='demographics' closeFunction={handleClose} openFunction={handleOpen} open ={open} 
                          name={name} gender={genderData} age ={ageData} nations={natioanlityData}/>      
          : <Empty closeFunction={handleClose} openFunction={handleOpen} open ={open} />}
          <Typography> Current : {name}</Typography>                    
          </Box>             
          <SearchHistory closeFunction={handleHide} openFunction={handleShow} open = {show} 
                         className='history' names={[name, ...searchedNames]}/>
        </Box>
      </Box>
  );
}

export default App;