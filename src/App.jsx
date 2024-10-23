
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Gallery from './Components/Gallery/Gallery'

function App() {
let router= createHashRouter([
  {index:true , element:<Gallery/>}
])

  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
