

import { useState } from 'react'
import React from "react";
import './game_icon.css'





function Game_icon({ name, gameicon }: any) {




  // game icon




  // name 


  // Destructuring props

  return (
    <div>

      <div>{name}</div>
      <div>{gameicon}</div>
      <div className='name'>

      

      </div>



      <div className="gameicon">
        {/* name and video */}
        <img className='game_icon' src="https://i.ytimg.com/vi/MUIjOVyuEgg/maxresdefault.jpg"/>
        
      </div>

      





    </div>);




}

export default Game_icon