import '../App.css'
import '/assets/videos/bluee.mp4'
function Start() {

    return (
        <div className='absolute top-0 left-0 w-full min-h-screen'>
        <video
          autoPlay
          loop
          muted
          className='w-full h-full object-cover fixed'>
          <source src="/assets/videos/bluee.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 pointer-events-none"></div>
      </div>
    )
}

export default Start;