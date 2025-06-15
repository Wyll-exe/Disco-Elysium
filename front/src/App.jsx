import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const videos = ["/assets/videos/beach.mp4", "/assets/videos/chromatic.mp4"]

  // Random background 
  let initialIndex
  const lastIndexRaw = localStorage.getItem('lastVideoIndex')
  if (lastIndexRaw === null || (lastIndexRaw !== "0" && lastIndexRaw !== "1")) {
    initialIndex = Math.floor(Math.random() * videos.length)
  } else {
    const lastIndex = parseInt(lastIndexRaw, 10)
    initialIndex = lastIndex === 0 ? 1 : 0
  }

  const [videoIndex] = useState(initialIndex)

  useEffect(() => {
    localStorage.setItem('lastVideoIndex', videoIndex)
  }, [videoIndex])

    // Title Menu

    // START -> SAVE page
  const handleStart = () => {
      alert('START ! (à personnaliser)');
    };

    // QUIT
    const handleQuit = () => {
      window.close();
    };


  return (
    <div className='flex items-center justify-center pt-[8rm]'>
      <div className='absolute top-0 left-0 w-full min-h-screen'>
        <video
          autoPlay
          loop
          muted
          className='w-full h-full object-cover fixed'>
          <source src={videos[videoIndex]} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 pointer-events-none"></div>
      </div>
      {/* https://www.youtube.com/watch?v=AypW_6o26hg&list=PLfzAS9vre2a_YQ6lLPHlS4K0sDFwIoWeD&index=45 */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center mb-8">
        <div className="bg-amber-500 w-[300px] h-[70px] z-50 flex items-center justify-around rounded-lg shadow-lg">
          <button
            className=""
            onClick={handleStart}
          >
            START
          </button>
          <button
            className=""
            onClick={handleQuit}
          >
            QUIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default App