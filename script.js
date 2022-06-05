
function NavBar(){ 
  return ( 
     <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkBtn">
            <i className="fa fa-bars"></i>
        </label>
        <label className="logo">Atomic</label>
        <ul>
            <li>
                <a href="" className="active">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">
                  Service
                  <i class="fa fa-caret-down pl-2" aria-hidden="true"></i>
                  </a>
            </li>
            <li>
                <a href="">Gallery</a>
            </li>
            <li>
                <a href="">Blog</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

function Info(){ 
  return( 
    <div className='infoWrapper'>
     <div className="info1"> 
        <h3>Design a better</h3>
      <h3>website template.</h3>
     </div>
     <div className="while d-flex align-items-center">
      <div className='info2'>
      <p>Far away behind the words mountains,far from the</p>
       <p>countries Vocalia and Consonantia,there live the blind texts</p>
      </div>
      <div className='faicon'>
       <a href="https://www.youtube.com/watch?v=xfQItZABQBA" >
          <i class="fa fa-play text-black" aria-hidden="true"></i>
       </a>
      </div>
     </div>
     <div className="btnWrapper">
       <button className="btn btn-primary"> 
         FREE DOWNLOAD
       </button>
     </div>
    </div>
  )
}

function Section(){ 
  return( 
   <div className="section">
    <div className="section-box shadow">
        <div className="box">
          <div className="box-inner">
              <div>
               <img src="./images/bulb.png"/>
              </div>
              <div>
                <h4>Intuitive Thinking</h4>
                <p>A small river named Duden flows by their
                  place and supplies it with the necessary regelialia
                </p>
              </div>
          </div>
        </div>
        <div className="box">
          <div className="box-inner">
              <div>
               <img src="./images/cot.png"/>
              </div>
              <div>
                <h4>Orange for carrots</h4>
                <p>A small river named Duden flows by their
                  place and supplies it with the necessary regelialia
                </p>
              </div>
          </div>
        </div>
        <div className="box">
          <div className="box-inner">
              <div>
               <img src="./images/in.png"/>
              </div>
              <div>
                <h4>Infinite posibilities</h4>
                <p>A small river named Duden flows by their
                  place and supplies it with the necessary regelialia
                </p>
              </div>
          </div>
        </div>
    </div>
   </div>
  )
}

function App(){ 
  return ( 
    <div>
   <NavBar />
   <Info />
   <Section/>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)