import React, { useState } from 'react'
import './send.css';
import { saved_data } from './api';
import { useNavigate } from 'react-router-dom';
export default function SendD() {
    var [img_src,setimgsrc]=useState('');
    const navigate=useNavigate();
    var [error,seterror]=useState("");
    console.log(img_src);
    var defaultobj = {
      img_src: "",
      City: "",
      "Dish Name": "",
      Rating: "",
      "Hotel Name": "",
      Stars: "",
    };
    var [states,setstates]=useState(defaultobj);
    console.log(states);
    function image_func(e){
        console.log(e.target.files[0]);
        var file = e.target.files[0];
        var filereader=new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload=async()=>{
            // console.log(filereader.result);
            setimgsrc(filereader.result);
             setstates({
               ...states,
               ["img_src"]: `${filereader.result}`,
             });
        }
        filereader.onerror = () => {
          console.log(filereader.error);
        };
    }
    var list_=["City","Dish Name","Rating","Hotel Name","Stars"];
  return (
    <div className="send_d">
      <h2>Hi 👋 upload your Best Dish</h2>
      <div id="sendsec">
        <div id="top">
          <div id="sendleft">
            <div id="imagediv">
              {img_src ? (
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={`${img_src}`}
                />
              ) : (
                "Upload an Image"
              )}
            </div>
            <input type="file"  onChange={image_func} />
            <input type="text" onChange={(e)=> {
              console.log(e.target.value);
              setimgsrc(e.target.value);
              setstates({
                ...states,["img_src"]:`${e.target.value}`
              })
              
            }} id="inpt" placeholder="put the link of Image" />
          </div>
          <div id="sendright">
            {
                list_.map((e,i)=>{
                    return (
                      <div key={i} id="seright">
                        <p    id="sep">{e}</p>: <input onChange={(e)=>{
                            setstates({
                                ...states,[e.target.name]:e.target.value
                            })
                        }} name={e} id="sninp" />
                      </div>
                    );
                })
            }
           
            {
                error? <p style={{color:"red",fontSize:"32px"}}>{error}</p> :"" 
            }
                
          </div>
        </div>
        <button onClick={async (e)=>{
            console.log(e.target.id);
            var butn=e.target;
            // await setstates({
            //     ...states,["img_src"]:img_src
            // })
            console.log(states);
            var arr_val=Object.values(states);
            var arr_key = Object.keys(states);
            console.log(arr_val,arr_key)
            var count=0;
            var values=arr_val.filter((e,i)=>{
                console.log(e,i);
                if(e===""){
                    count++;
                    var err = arr_key.splice(i, 1);
                    seterror(`Fill the ${err}`);
                    setTimeout(()=>{
                        seterror("");
                    },2000);
                    console.log("lst");
                    return states[`${e}`];
                }
            })
            if(!count){
                console.log("submitted ");
                console.log(states);
                try{
                  const resp=await saved_data(states);
                butn.style.background="lightgreen";
                setTimeout(()=>{butn.style.background = "black";},2000);
                // alert(resp.data.mess);
                setTimeout(()=>{navigate("/");},2500);
                }
                catch(e)
                {
                  console.log("some error is caused on Server Side");
                }
            }
            else{
                console.log("some Error may exists");
            }
        }} id="bot">Submit</button>
      </div>
    </div>
  );
}
