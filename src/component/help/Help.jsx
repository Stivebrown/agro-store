import { NavLink } from 'react-router-dom'

const Help = () => {
  return (
    <> 
   <div className="we-help-section py-20">
    <div className="container mx-auto px-4">
      <div className="flex justify-between">
        <div className="w-full lg:w-7/12 mb-5">
          <div className="imgs-grid grid grid-cols-3 gap-2">
            <div className="grid grid-1"><img src="images/img-grid-1.jpg" alt="Image" className="w-full"/></div>
            <div className="grid grid-2"><img src="images/img-grid-2.jpg" alt="Image" className="w-full"/></div>
            <div className="grid grid-3"><img src="images/img-grid-3.jpg" alt="Image" className="w-full"/></div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 px-5">
          <h2 className="text-2xl font-bold mb-4">We Help You Make Modern Interior Design</h2>
          <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

          <ul className="list-disc list-inside my-4">
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
          </ul>
          <p><NavLink to="*" className="bg-gray-800 text-white py-2 px-4 rounded">Explore</NavLink></p>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Help