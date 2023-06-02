import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
import Main_Event from "../../screens/Main_Event";
import g from "./R (1).gif"
import Models from "../Models";

function Events({ setloading }) {
  const [eid, seteid] = useState("");
  const [faculty_cordinate, setfaculty_cordinate] = useState("");
  const [faculty_number, setfaculty_number] = useState("");
  const [std_cordinator, setstd_cordinator] = useState("");
  const [std_contact, setstd_contact] = useState("");
  const [upi, setupi] = useState("");
  const [name, setName] = useState("");
  const [fee, setfee] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [poster, setposter] = useState("");
  const [event_desc, setevent_desc] = useState("");
  const [team, setteam] = useState("");
  // const [img, setimg] = useState("");
  let dept_id = window.location.href.split("/")[3].split(":")[1].split("#")[0];
  console.log(dept_id);
  const ref = useRef(null);
const file=["1","2","3","4","5","6","8","9","10","7",];

 
  return (<>
    <section
      id="speakers"
      className="wow fadeInUp"
      style={{ marginTop: "20px" }}
    >
      <div className="container">
        <div className="section-header">
          <h2>{dept_id}</h2>
          <p>Here are the Models</p>
        </div>
        <div className="row">
          {file !=undefined ? file.map(
            (k) =>
             
             
                <div class="col-lg-4 col-sm-12">
                  <div class="speaker">
                    <div
                      // src={k.event_poster}
                      alt="Speaker 6"
                      class="img-fluid"
                      style={{
                        width: 400,
                        height: 400,
                        minHeight: "100px",
                        // backgroundImage: `url("${k.event_poster}")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    >
                      <Models model={`assets/${dept_id}/${k}`} />
                    </div>
                    
                  </div>
                </div>
              
              ):<div style={{width:"100vw",display:"flex",justifyContent:"center"}}><img style={{width:50}} src={g} alt="" /></div>}
        </div>
      </div>
    </section>
             
  </>
  );
}

export default Events;
