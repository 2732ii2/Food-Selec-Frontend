import React from 'react'
import biraniimg from './biryani.jpeg';

export default function Sec_p({value}) {
    // console.log(value);
    var l_3=["Best Biryani", "Best Dhokla","Best Pasta","Best Maggi","Best Dhokla","Best Rosgula"];
  return (
    <div id="sec_part">
      <div id="first">
        <div id="icon">Trend Setter</div>
        <div id="li_">
          <h2 id="li_h"> Thali's</h2>
          <p id="li_p_">Special Thali</p>
          <p id="li_p_">Maharaja Thali</p>
          <p id="li_p_">Non-Veg Thali</p>
          <h2 id="li_h"> Pizza's</h2>
          <p id="li_p_">Magrita's Special Offer</p>
          <p id="li_p_">Tomato Pizza</p>
          <p id="li_p_">Onion Pizza</p>
          <p id="li_p_">Extra-Cheese Pizza</p>
        </div>
      </div>
      <div id="sec">
        {value.length === 4
          ? value.map((e, i) => {
              return (
                <div key={i} id="same">
                  <div className="left">
                    {" "}
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={e.src_}
                    />{" "}
                  </div>
                  <div className="right">
                    <div id="innserslides">Hotel Name : {e.Hotel_Name} </div>
                    <div id="innserslides">Dish Name : {e.name_}</div>
                    <div id="innserslides">City : {e.name_}</div>
                    <div id="innserslides0">Rating : {e.Rating}</div>
                  </div>
                </div>
              );
            })
          : value.map((e, i) => {
              if (i % 4 === 0) {
                return (
                  <div key={i} id="same">
                    <div className="left">
                      {" "}
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={e["img_src"]}
                      />{" "}
                    </div>
                    <div className="right">
                      <div id="innserslides">
                        Hotel Name : {e["Hotel Name"]}{" "}
                      </div>
                      <div id="innserslides">Dish Name : {e["Dish Name"]}</div>
                      <div id="innserslides">City: {e["City"]}</div>

                      <div id="innserslides0">Rating : {e.Rating}</div>
                    </div>
                  </div>
                );
              } else if (i % 3 === 0) {
                return (
                  <div key={i} id="same0">
                    <div className="left">
                      {" "}
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={e["img_src"]}
                      />{" "}
                    </div>
                    <div className="right">
                      <div id="innserslides">
                        Hotel Name : {e["Hotel Name"]}{" "}
                      </div>
                      <div id="innserslides">Dish Name : {e["Dish Name"]}</div>
                      <div id="innserslides">City : {e["City"]}</div>
                      <div id="innserslides0">Rating : {e.Rating}</div>
                    </div>
                  </div>
                );
              } else if (i % 2 === 0) {
                return (
                  <div key={i} id="same1">
                    <div className="left">
                      {" "}
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={e["img_src"]}
                      />{" "}
                    </div>
                    <div className="right">
                      <div id="innserslides">
                        Hotel Name : {e["Hotel Name"]}{" "}
                      </div>
                      <div id="innserslides">Dish Name : {e["Dish Name"]}</div>
                      <div id="innserslides">City : {e["City"]}</div>

                      <div id="innserslides0">Rating : {e.Rating}</div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i} id="same2">
                    <div className="left">
                      {" "}
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={e["img_src"]}
                      />{" "}
                    </div>
                    <div className="right">
                      <div id="innserslides">
                        Hotel Name : {e["Hotel Name"]}{" "}
                      </div>
                      <div id="innserslides">Dish Name : {e["Dish Name"]}</div>
                      <div id="innserslides">City : {e["City"]}</div>

                      <div id="innserslides0">Rating : {e.Rating}</div>
                    </div>
                  </div>
                );
              }
            })}
      </div>
      <div
        style={{
          padding: "13px",
          display: "flex",
          flexDirection: "column",
          color: "wheat",
        }}
        id="third"
      >
        <h1
          style={{ fontWeight: 500, letterSpacing: "2px", fontFamily: "serif" }}
        >
          Filters{" "}
        </h1>
        <div
          style={{
            width: "100%",
            height: "70%",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            // border: "1px solid white",
          }}
        >
          


          {
            l_3.map((e,i)=>{
              return (
                <div key={i}
                  style={{
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // border:"1px solid white"
                  }}
                >
                  {" "}
                  <h2
                    style={{ fontSize: "24px", color: "white", width: "80%" }}
                  >
                    {" "}
                    {e}
                  </h2>
                  <input 
                    style={{ width: "30px", height: "30px" }}
                    type="checkbox"
                  />
                </div>
              );
            })
          }
        </div>
        <button onClick={()=>alert("Work is going on")} style={{margin:"auto",width:"50%",height:"7%",background:"skyblue",fontSize:"24px",color:"black",border:"1px solid white"}}>Click Me</button>
      </div>
    </div>
  );
}
