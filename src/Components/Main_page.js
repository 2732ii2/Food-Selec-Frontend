import React, { useEffect, useState } from 'react'
import logo from './Logo.png';
import Sec_p from './Sec_p';
import dhokla from "./Dkola.jpeg";
import chole from "./chole.jpeg";
import rasgula from "./rasgula.jpeg";
import { get_data } from './Send_data/api';
import biraniimg from './biryani.jpeg';
import { useNavigate } from 'react-router-dom';

export default function Main_page() {
    const [value,setvalue]=useState("");
    const navi=useNavigate();
    var [Main_arr,setMainarr]=useState([]);
    async function getdata()
    {
        try{
          const {data} = await get_data();
          console.log(data.data);
          setMainarr(data.data);
        }
        catch(e)
        {
          console.log("some error");
        }
    }
    var list_ = [
      { name_: "biryani", src_: biraniimg, Hotel_Name: "Halem", Rating: "97%" },
      {
        name_: "dhokla",
        src_: dhokla,
        Hotel_Name: "Gujarti Specials",
        Rating: "80%",
      },
      {
        name_: "chole bature",
        src_: chole,
        Hotel_Name: "Up resturants",
        Rating: "60%",
      },
      {
        name_: "rasgula",
        src_: rasgula,
        Hotel_Name: "South Indian Food",
        Rating: "90%",
      },
    ];

    var new_value=[];
    
        new_value = Object.keys(Main_arr).length!==0
          ? Main_arr.filter((e) => {
            console.log(e["Dish Name"]);
              if (e["City"].toLowerCase().includes(value)) {
                return e;
              }
            })
          : list_.filter((e) => {
            console.log(e);
              if (e.name_.includes(value)) {
                return e;
              }
            });
    new_value.sort((a, b) => {
      return a.Rating - b.Rating;
    });
    new_value.reverse();
    // new_value=new_value.splice(0, 1);
    console.log(new_value);
    function letersetter(e)
    {   
        setvalue(e ? e.target.value.toLowerCase() : e.target.value);
    }

    useEffect(()=>{
      getdata();
    },[])
  return (
    <div className="con">
      <div className="header">
        <div id="logo">
          {" -> "} FoodSelec
          {/* <img id="img_" src={logo} />{" "} */}
        </div>
        <div id="search">
          <input
            id="inp_s"
            onChange={letersetter}
            placeholder=". . . Search  by  the  City  Name"
          />
        </div>
        <div id="last_">
          <h5 id="home">.Home</h5>
          <h5
            onClick={() => {
              navi("/admin");
            }}
            id="home"
          >
            .Admin
          </h5>
        </div>
      </div>
      {/* <div id='sec_part'>  </div> */}
      <Sec_p value={new_value} />
      <div style={{ padding: "5px" }} id="last_nav">
        <h3 style={{ color: "white", fontSize: "22px",paddingTop:"10px",paddingLeft:"20px" }}>Created By</h3>
        <ul
          style={{
            color: "white",
            fontSize: "20px",
            display: "flex",
            height: "60%",
            flexDirection: "column",
            marginTop: "50px",
            justifyContent: "space-between",
            marginLeft: "5%",
          }}
        >
          <li>Name : Ashad Mubeen</li>
          <li>Address : Xyz/123</li>
          <li>Email : mo.anas123khan@gmail.com</li>
          <li>Date: {Date().split(" ").splice(0, 4).join(" ")} </li>
          <li>
            Git Id : <a target="_blank" style={{color:"white", textDecoration:"none" ,cursor:"pointer"}} href="https://github.com/2732ii2"> Github ID Link</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
