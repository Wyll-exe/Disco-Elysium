import '../App.css'
import '/assets/videos/bluee.mp4'
function Start() {

    return (
        <div className='absolute top-0 left-0 w-full min-h-screen '>
            <video
                autoPlay
                loop
                muted
                className='w-full h-full object-cover fixed z-0'>
                <source src="/assets/videos/bluee.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 pointer-events-none z-10"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-screen gap-8">
                <div className="bg-black w-3/4 h-1/4 rounded-lg"></div>
                <div className="bg-black w-3/4 h-1/4 rounded-lg"></div>
                <div className="bg-black w-3/4 h-1/4 rounded-lg"></div>
            </div>
        </div>
    )
}

export default Start;