import React from "react";
import { Link } from "react-router-dom";
import "./services.css";

export default function Homepage() {
  return (
    <div className='servicesPage'>
      <div className='service-container'>
        <div className='main'>
          {/* Song review */}
          <div className='service-card'>
            <div className='product-img'>
              <i class='fas fa-headphones'></i>
            </div>
            <div className='product-info'>
              <h1 className='title'>Mixing and Mastering</h1>
              <p className='description'>Make your music sound professional</p>
              <div className='product-price'>
                <p>
                  <span>from $</span>30
                </p>
                <Link to={"/youtube/"} className='productBtn' type='button'>
                  more info
                </Link>
              </div>
            </div>
          </div>
          {/* youtube */}
          <div className='service-card'>
            <div className='product-img'>
              <i class='fab fa-youtube'></i>
            </div>
            <div className='product-info'>
              <h1 className='title'>YouTube Promotion</h1>
              <p className='description'>Get more views</p>{" "}
              <div className='product-price'>
                <p>
                  <span>from $</span>30
                </p>
                <Link to={"/youtube/"} className='productBtn'>
                  more info
                </Link>
              </div>
            </div>
          </div>
          <div className='service-card'>
            <div className='product-img'>
              <i class='fab fa-facebook-f'></i>
            </div>
            <div className='product-info'>
              <h1 className='title'>Facebook Promotion</h1>
              <p className='description'>Grow you fanbase</p>
              <div className='product-price'>
                <p>
                  <span>from $</span>30
                </p>
                <Link to={"/youtube/"} className='productBtn' type='button'>
                  more info
                </Link>
              </div>
            </div>
          </div>
          {/* end service-card */}
        </div>
        {/* THE SECOND ROW */}
        <div className='main'>
          {/* Song review */}
          {/* mastering */}
          <div className='service-card'>
            <div className='product-img'>
              <i class='fab fa-spotify'></i>
            </div>
            <div className='product-info'>
              <h1 className='title'>Spotify Promotion</h1>
              <p className='description'>Get more streams</p>
              <div className='product-price'>
                <p>
                  <span>from $</span>30
                </p>
                <Link to={"/youtube/"} className='productBtn' type='button'>
                  more info
                </Link>
              </div>
            </div>
          </div>
          <div className='service-card'>
            <div className='product-img'>
              <i class='fab fa-apple'></i>
            </div>
            <div className='product-info'>
              <h1 className='title'>Apple Music Promotion</h1>
              <p className='description'>Get more streams</p>{" "}
              <div className='product-price'>
                <p>
                  <span>from $</span>30
                </p>
                <Link
                  to={"/youtube/"}
                  className='product-price-btn'
                  className='productBtn'
                  type='button'
                >
                  more info
                </Link>
              </div>
            </div>
          </div>
          {/* streaming */}
          <div className='service-card'>
            <div className='product-img'>
              <i class='fab fa-soundcloud'></i>
            </div>
            <div className='product-info'>
              <h1 className='title'>SoundCloud Promotion</h1>
              <p className='description'>Reach more listeners</p>
              <div className='product-price'>
                <p>
                  <span>from $</span>30
                </p>
                <Link
                  to={"/youtube/"}
                  className='product-price-btn'
                  className='productBtn'
                  type='button'
                >
                  more info
                </Link>
              </div>
            </div>
          </div>
          {/* end service-card */}
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import "./services.css";

// function Homepage() {
//   return (
//     <>
//       <div className='service-container'>
//         {/* the first row */}
//         <div className='main'>
//           <div className='card'>
//             <div className='product-img'>
//               <img src='https://images.unsplash.com/photo-1584213610817-948feb8c633a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
//             </div>
//             <div className='product-info'>
//               <h1 className='title'>Song Review</h1>
//               <h2 className='sub-title'>by professionals</h2>
//               <p className='description'>Receive an objective feedback</p>
//               <img src='https://miro.medium.com/max/1106/1*PvoG2ZWSd5Z-a3k2jdM55A.png' />
//               <div className='product-price'>
//                 <p>FREE</p>
//                 <Link
//                   to={"/youtube/"}
//                   className='product-price-btn'
//                   type='button'
//                 >
//                   more info
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className='card'>
//             <i
//               class='badge'
//               style={{
//                 color: "rgb(255, 255, 255)",
//                 background: "rgb(255, 147, 76)",
//               }}
//             >
//               Bestseller
//             </i>
//             <div className='product-img'>
//               <img src='https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
//             </div>

//             <div className='product-info'>
//               <h1 className='title'>Audio Mixing & Mastering</h1>
//               <h2 className='sub-title'>by studio</h2>
//               <p className='description'>Make your music sound great</p>
//               <img src='https://miro.medium.com/max/1106/1*PvoG2ZWSd5Z-a3k2jdM55A.png' />
//               <div className='product-price'>
//                 <p>
//                   <span>from $</span>30
//                 </p>
//                 <Link
//                   to={"/youtube/"}
//                   className='product-price-btn'
//                   type='button'
//                 >
//                   more info
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className='card'>
//             <div className='product-img'>
//               <img src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
//             </div>

//             <div className='product-info'>
//               <h1 className='title'>Facebook Promotion</h1>
//               <h2 className='sub-title'>by professionals</h2>
//               <p className='description'>Grow you fanbase!</p>
//               <img src='https://miro.medium.com/max/1106/1*PvoG2ZWSd5Z-a3k2jdM55A.png' />
//               <div className='product-price'>
//                 <p>
//                   <span>from $</span>30
//                 </p>
//                 <Link
//                   to={"/youtube/"}
//                   className='product-price-btn'
//                   type='button'
//                 >
//                   more info
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className='card'>
//             <div className='product-img'>
//               <img src='https://images.unsplash.com/photo-1570459725240-9c1f1532f78b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
//             </div>

//             <div className='product-info'>
//               <h1 className='title'>YouTube Promotion</h1>
//               <h2 className='sub-title'>By Studio</h2>
//               <p className='description'>Reach more listeners!</p>{" "}
//               <img src='https://miro.medium.com/max/1106/1*PvoG2ZWSd5Z-a3k2jdM55A.png' />
//               <div className='product-price'>
//                 <p>
//                   <span>from $</span>30
//                 </p>
//                 <Link
//                   to={"/youtube/"}
//                   className='product-price-btn'
//                   type='button'
//                 >
//                   more info
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className='card'>
//             <i
//               class='badge'
//               style={{
//                 color: "rgb(255, 255, 255)",
//                 background: "#00CECB",
//               }}
//             >
//               New
//             </i>
//             <div className='product-img'>
//               <img src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
//             </div>

//             <div className='product-info'>
//               <h1 className='title'>Streamig Services</h1>
//               <h2 className='sub-title'>by professionals</h2>
//               <p className='description'>Get you playlist placements</p>{" "}
//               <img src='https://miro.medium.com/max/1106/1*PvoG2ZWSd5Z-a3k2jdM55A.png' />
//               <div className='product-price'>
//                 <p>
//                   <span>from $</span>30
//                 </p>
//                 <Link
//                   to={"/youtube/"}
//                   className='product-price-btn'
//                   type='button'
//                 >
//                   more info
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Homepage;
