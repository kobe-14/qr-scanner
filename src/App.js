import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-scanner'

const previewStyle = {
  height: 240,
  width: 320,
}

function App() {
  const [result, setResult] = useState('')

  const handleScan = (data) => {
    if(data){
      setResult(data?.text)
    }
  }

  const handleError = (err) => {
    console.log("Error While Scanning Code", err)
  }

  return (
    <>
    <div className="App">
      <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          />
    </div>
    <div>{result}</div>
    </>
  );
}

export default App;
