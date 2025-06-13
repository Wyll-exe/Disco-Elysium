import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center pt-[8rm]'>

        <div className='absolute top-0 left-0 w-full min-h-screen'>
          <video
            autoPlay
            loop
            muted
            className='w-full h-full object-cover fixed'>
            <source src="/assets/videos/beach.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none"></div>
        </div>
      </div>
    </>
  )
}

export default App
