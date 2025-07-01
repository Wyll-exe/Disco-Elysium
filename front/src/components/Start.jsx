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

      {/* Save files */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen gap-8">

        {/* 1 */}
        <div className="relative flex w-3/4 max-w-xl div-hover">

          <div className="group relative bg-gradient-to-br from-orange-300 to-blue-400 border-4 border-orange-400 rounded-xl shadow-xl flex-1 flex items-center px-8 py-6 gap-6 transition duration-300 hover:border-amber-300 hover:shadow-2xl hover:scale-105 div-hover">
            <div className="flex-1">
              <div className="text-2xl font-bold text-amber-300 drop-shadow">SAVE 01</div>
              <div className="text-gray-300 text-sm">Fev 20, 06:38</div>
            </div>
            <button className="bg-blue-300 text-gray-900 font-bold px-4 py-2 rounded-lg shadow hover:bg-amber-300 transition button-click">
              LOAD
            </button>


            <img
              src="/assets/images/image.png"
              alt="gauche"
              className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-24 h-24 blink-on-hover"
              style={{ zIndex: 20 }}
            />
          </div>

        </div>

        {/* 2 */}
        <div className="relative flex w-3/4 max-w-xl">

          <div className="group relative bg-gradient-to-br from-orange-300 to-blue-400 border-4 border-orange-400 rounded-xl shadow-xl flex-1 flex items-center px-8 py-6 gap-6 transition duration-300 hover:border-amber-300 hover:shadow-2xl hover:scale-105 div-hover">
            <div className="flex-1">
              <div className="text-2xl font-bold text-amber-300 drop-shadow">EMPTY</div>

            </div>


            <img
              src="/assets/images/image.png"
              alt="gauche"
              className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-24 h-24 blink-on-hover"
              style={{ zIndex: 20 }}
            />
          </div>

        </div>

        {/* 3 */}
        <div className="relative flex w-3/4 max-w-xl">

          <div className="group relative bg-gradient-to-br from-orange-300 to-blue-400 border-4 border-orange-400 rounded-xl shadow-xl flex-1 flex items-center px-8 py-6 gap-6 transition duration-300 hover:border-amber-300 hover:shadow-2xl hover:scale-105 div-hover">
            <div className="flex-1">
              <div className="text-2xl font-bold text-amber-300 drop-shadow"> EMPTY </div>

            </div>



            <img
              src="/assets/images/image.png"
              alt="gauche"
              className="absolute right-full top-1/2 -translate-y-1/2 mr-4 w-24 h-24 blink-on-hover"
              style={{ zIndex: 20 }}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Start;