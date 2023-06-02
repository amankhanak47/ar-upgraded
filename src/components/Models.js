import React from 'react'
import "./model.css"

const Models = ({ model }) => {
  return (
    <div>
       <div id="card">
           
      <model-viewer className='ar'
          src={`${model}.glb`}
        //   ios-src={"assets/Spiderman_Rig.usdz"}
        
          poster="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar-placement="floor"
        xr-environment
          ar
          ar-modes="webxr scene-viewer quick-look"
        canActivateAR
      ></model-viewer>
    </div>
    </div>
  )
}

export default Models
