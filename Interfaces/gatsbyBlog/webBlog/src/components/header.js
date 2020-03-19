import React from "react";
import { Link } from "gatsby";


export default () => (

    <header id="header">
      <div class="inner flex justify-start bg-gray-300">

        <span class="title"><img src="" alt=""/></span>
          
        <nav id="navbar" class="inline-flex">
          <Link to="/" id="Href01"><button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Home
          </button></Link>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          About
          </button>
        </nav>

      </div>

      </header>
)