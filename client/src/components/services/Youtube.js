import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paypal from "./Paypal";
import "./services.css";
// import PaypalButtons from "./PaypalButtons";
function Youtube() {
  const [price, setPrice] = useState("0");
  const [product, setProduct] = useState("0");
  function handleClick(a, b) {
    setPrice(a);
    setProduct(b);
  }
  return (
    <>
      <div className='top-container'>
        <div className='left-img'>
          <img src='https://images.unsplash.com/photo-1602274063798-7e74bf76e780?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
        </div>
        <div className='right-info'>
          <h1>YouTube Promotion</h1>
          <p>
            Order Youtube Promotion and get your music boosted to thousands of
            new listeners on the most popular site for on-demand music
            streaming. Harness the power of online advertising on Youtube to
            drive music lovers to your songs and get more subscribers, plays,
            comments and likes.
          </p>
          {/* <!-- PRICE TABLE --> */}
          <div className='wrapper2'>
            <div className='pricing_wrapper'>
              <div
                onClick={() => handleClick("$30", "YouTube Basic Promotion")}
                className='pricing_item'
              >
                <h3 className='type'>Basic</h3>
                <p className='description'>5,000 people reached</p>
                <div className='pricing-table-price'>$30</div>
                <button className='product-price-btn' type='button'>
                  Buy now{" "}
                </button>
              </div>
              <div
                onClick={() => handleClick("$40", "YouTube Standard Promotion")}
                className='pricing_item'
              >
                <h3 className='type'>Standard</h3>
                <p className='description'>10,000 people reached</p>
                <div className='pricing-table-price'>$40</div>
                <button className='product-price-btn' type='button'>
                  Buy now{" "}
                </button>
              </div>
              <div
                onClick={() => handleClick("$50", "YouTube Premium Promotion")}
                className='pricing_item'
              >
                <h3 className='type'>Premium</h3>
                <p className='description'>20,000 people reached</p>
                <div className='pricing-table-price'>$50</div>
                <button className='product-price-btn' type='button'>
                  Buy now{" "}
                </button>
              </div>
            </div>
          </div>
          {/* <!-- closed wrapper --> */}
        </div>
        {/* <!-- closed right-info --> */}
      </div>
      {/* <!-- closed top container --> */}
      {/* <!-- bottom info start--> */}
      <div className='bottom-container right-info'>
        <h3 className='empower'>Youtube Promotion will empower you to:</h3>
        <ul className='empower-list'>
          <li className='empower-list'>
            Expand your fan base and reach new audiences
          </li>
          <li className='empower-list'>
            Promote your music outside of Millody
          </li>
          <li className='empower-list'>Get more music purchases</li>
        </ul>
        <h3 className='empower'>How it works</h3>
        <p>
          Once you have placed your order, our team will prepare your ads and
          launch the promotion campaign on Youtube according to your
          preferences. Keep in mind you only pay for real views when viewers
          actually watched your video ad in its entirety or after 30 seconds,
          whichever comes first. The viewers have the option to skip an ad after
          5 seconds but money will not be charged when they skip. When the
          promotion ends, you will receive a detailed report about the
          performance and reach of your ads.
        </p>
      </div>
      {/* <Paypal price={price} product={product} /> */}
      {/* <PaypalButtons price={price} product={product} /> */}
    </>
  );
}
export default Youtube;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Paypal from "./Paypal";
// import PaypalButtons from "./PaypalButtons";
// // import style from "./Youtube.module.css";
// import "./services.css";

// function Youtube() {
//   const [price, setPrice] = useState("0");
//   const [product, setProduct] = useState("0");

//   function handleClick(a, b) {
//     setPrice(a);
//     setProduct(b);
//   }

//   return (
//     <>
//       <div class='top-container'>
//         <div class='left-img'>
//           <img src='https://images.unsplash.com/photo-1570459725240-9c1f1532f78b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
//         </div>

//         <div class='right-info'>
//           <h1>YouTube Promotion</h1>
//           <p>
//             Order Youtube Promotion and get your music boosted to thousands of
//             new listeners on the most popular site for on-demand music
//             streaming. Harness the power of online advertising on Youtube to
//             drive music lovers to your songs and get more subscribers, plays,
//             comments and likes.
//           </p>
//           {/* <!-- PRICE TABLE --> */}
//           <div class='wrapper'>
//             <div class='pricing_wrapper'>
//               <div
//                 onClick={() => handleClick("30", "YouTube Basic Promotion")}
//                 class='pricing_item'
//               >
//                 <h3 class='type'>Basic</h3>
//                 <p class='description'>5,000 people reached</p>
//                 <div class='pricing-table-price'>$30</div>
//                 <button class='product-price-btn' type='button'>
//                   Buy now{" "}
//                 </button>
//               </div>

//               <div
//                 onClick={() => handleClick("40", "YouTube Standard Promotion")}
//                 class='pricing_item'
//               >
//                 <h3 class='type'>Standard</h3>
//                 <p class='description'>10,000 people reached</p>
//                 <div class='pricing-table-price'>$40</div>
//                 <button class='product-price-btn' type='button'>
//                   Buy now{" "}
//                 </button>
//               </div>

//               <div
//                 onClick={() => handleClick("50", "YouTube Premium Promotion")}
//                 class='pricing_item'
//               >
//                 <h3 class='type'>Premium</h3>
//                 <p class='description'>20,000 people reached</p>
//                 <div class='pricing-table-price'>$50</div>
//                 <button class='product-price-btn' type='button'>
//                   Buy now{" "}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* <!-- closed wrapper --> */}
//         </div>
//         {/* <!-- closed right-info --> */}
//       </div>
//       {/* <!-- closed top container --> */}

//       {/* <!-- bottom info start--> */}
//       <div class='bottom-container right-info'>
//         <h3 class='empower'>Youtube Promotion will empower you to:</h3>
//         <ul class='empower-list'>
//           <li class='empower-list'>
//             Expand your fan base and reach new audiences
//           </li>
//           <li class='empower-list'>Promote your music outside of Millody</li>
//           <li class='empower-list'>Get more music purchases</li>
//         </ul>
//         <h3 class='empower'>How it works</h3>
//         <p>
//           Once you have placed your order, our team will prepare your ads and
//           launch the promotion campaign on Youtube according to your
//           preferences. Keep in mind you only pay for real views when viewers
//           actually watched your video ad in its entirety or after 30 seconds,
//           whichever comes first. The viewers have the option to skip an ad after
//           5 seconds but money will not be charged when they skip. When the
//           promotion ends, you will receive a detailed report about the
//           performance and reach of your ads.
//         </p>
//       </div>

//       {/* <Paypal price={price} product={product} /> */}
//       <PaypalButtons price={price} product={product} />
//     </>
//   );
// }

// export default Youtube;
