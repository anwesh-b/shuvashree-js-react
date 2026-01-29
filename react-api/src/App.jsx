import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [imageData, setImageData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImageData(data)
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Dog image</h1>
      {imageData?.message?<>
        <img src={imageData.message}></img>
        </> :<>Loading</>
      }
    </>
  )
}

export default App
