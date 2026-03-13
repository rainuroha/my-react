
import {useState,useEffect} from 'react';


function App(){
  // 1. Light Logic: useState to track the current light 
  const [activeLight, setActiveLight] = useState('red'); 
 
  useEffect(() => { 
    // 2. useEffect with setInterval to change light every 3 seconds 
    const interval = setInterval(() => { 
      setActiveLight((prevLight) => { 
        if (prevLight === 'red') return 'yellow'; 
        if (prevLight === 'yellow') return 'green'; 
        return 'red'; 
      }); 
    }, 3000); 
 
    // Cleanup interval on component unmount 
    return () => clearInterval(interval); 
  }, []); 
 
  return ( 
    <div className="container"> 
      {/* 3. Styling: Light casing and circles */} 
      <div className="traffic-light"> 
        <div  
          className={`light red ${activeLight === 'red' ? 'active' : ''}`}  
        /> 
        <div  
          className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}  
        /> 
        <div  
          className={`light green ${activeLight === 'green' ? 'active' : ''}`}  
        /> 
      </div> 
 
      <style>{` 
        .container { 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
          background-color: #282c34; 
        } 
 
        .traffic-light { 
          width: 100px; 
          height: 280px; 
          background-color: #333; 
          border-radius: 20px; 
          display: flex; 
          flex-direction: column; 
          justify-content: space-around; 
          align-items: center; 
          padding: 20px 0; 
          box-shadow: 0 0 20px rgba(0,0,0,0.5); 
        } 
 
        .light { 
          width: 60px; 
          height: 60px; 
          border-radius: 50%; 
          background-color: #111; 
          transition: all 0.4s ease; /* Smooth CSS transitions */ 
        } 
 
        /* Glow effects for active states */ 
        .red.active { 
          background-color: #ff3b30; 
          box-shadow: 0 0 30px #ff3b30; 
        } 
 
        .yellow.active { 
          background-color: #ffcc00; 
          box-shadow: 0 0 30px #ffcc00; 
        } 
 
        .green.active { 
          background-color: #4cd964; 
          box-shadow: 0 0 30px #4cd964; 
        } 
      `}</style> 
    </div> 
  ); 
}; 





export default App;
