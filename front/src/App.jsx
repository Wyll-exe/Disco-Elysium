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
  <div className=" w-[300px] h-[110px] z-50 flex flex-col items-center justify-center rounded-lg shadow-lg gap-4 opacity-80 div-hover">
    {/* START */}
    <button
      className="relative  text-white px-6 py-2 rounded hover:bg-black button-click"
      onClick={handleStart}
    >
      START
      <img
        src="/assets/images/hand.png"
        alt=""
        className="ml-2 w-8 h-8 opacity-0 group-hover:opacity-100 z-111 transition duration-200 absolute right-[-40px] top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </button>
    {/* QUIT */}
    <button
      className="relative  text-white px-6 py-2 rounded hover:bg-black button-click"
      onClick={handleQuit}
    >
      QUIT
      <img
        src="/assets/images/hand.png"
        alt=""
        className="ml-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition duration-200 absolute right-[-40px] top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </button>
  </div>
</div>
    </div>
  )
}

export default App