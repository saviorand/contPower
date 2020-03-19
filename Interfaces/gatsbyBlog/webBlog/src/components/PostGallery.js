import React from "react";
import { Link } from "gatsby";


export default (props) => (


      <div id="main">
      <header>
            <div class="inner mt-8 mb-8">
            <h1 class="text-4xl text-center">{props.headerText}</h1>
            <p class="max-w-lg text-md p-4 m-auto">This is my blog. I write about stuff and things. Donec rhoncus lacus ut ex suscipit aliquam. Etiam aliquam volutpat lorem nec</p>
          </div>
          </header>
        <div class="inner flex-col text-white">
          <section class="cards grid grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto mb-16 mt-16 gap-8">
            <article class="first relative rounded shadow" id="FirstCard">
            <span><img src="https://source.unsplash.com/random/350x320" alt=""/></span>
                <div class="absolute top-0 my-16 mx-2">
                <Link to="/page/" id="Href01"><h2 class="text-xl">First post</h2></Link>
                <div class="content">
                  <p> lorem nec sollicitudin. Cras auctor, turpis non dapibus venenatis...<i class="fas fa-long-arrow-alt-right text-blue-600"></i></p>
                </div>
              </div>
            </article>
            <article class="second relative rounded shadow" id="SecondCard">
            <span><img src="https://source.unsplash.com/random/350x320" alt=""/></span>
              <a href="#" id="Href02">
                <div class="absolute top-0 my-16 mx-2">
                <h2 class="text-xl">Second post</h2>
                <div class="content">
                  <p> lorem nec sollicitudin. Cras auctor, turpis non dapibus venenatis...<i class="fas fa-long-arrow-alt-right text-blue-600"></i></p>
                </div>
              </div>
              </a>
            </article>
            <article class="third relative rounded shadow" id="ThirdCard">
            <span><img src="https://source.unsplash.com/random/350x320" alt=""/></span>
              <a href="#" id="Href03">
                <div class="absolute top-0 my-16 mx-2">
                <h2 class="text-xl">Third post</h2>
                <div class="content">
                  <p> lorem nec sollicitudin. Cras auctor, turpis non dapibus venenatis...<i class="fas fa-long-arrow-alt-right text-blue-600"></i></p>
                </div>
              </div>
              </a>
            </article>
            <article class="fourth relative rounded shadow" id="FourthCard">
            <span><img src="https://source.unsplash.com/random/350x320" alt=""/></span>
              <a href="#" id="Href04">
                <div class="absolute top-0 my-16 mx-2">
                <h2 class="text-xl">Fourth post</h2>
                <div class="content">
                  <p> lorem nec sollicitudin. Cras auctor, turpis non dapibus venenatis...<i class="fas fa-long-arrow-alt-right text-blue-600"></i></p>
                </div>
              </div>
              </a>
            </article>
            <article class="fifth relative rounded shadow" id="FifthCard">
            <span><img src="https://source.unsplash.com/random/350x320" alt=""/></span>
              <a href="#" id="Href05">
                <div class="absolute top-0 my-16 mx-2">
                <h2 class="text-xl">Fifth post</h2>
                <div class="content">
                  <p> lorem nec sollicitudin. Cras auctor, turpis non dapibus venenatis...<i class="fas fa-long-arrow-alt-right text-blue-600"></i></p>
                </div>
              </div>
              </a>
            </article>
            <article class="sixth relative rounded shadow" id="SixthCard">
            <span><img src="https://source.unsplash.com/random/350x320" alt=""/></span>
              <a href="#" id="Href06">
                <div class="absolute top-0 my-16 mx-2">
                <h2 class="text-xl">Sixth post</h2>
                <div class="content">
                  <p> lorem nec sollicitudin. Cras auctor, turpis non dapibus venenatis...<i class="fas fa-long-arrow-alt-right text-blue-600"></i></p>
                </div>
              </div>
              </a>
            </article>
            </section>
            </div>
           </div>


	)