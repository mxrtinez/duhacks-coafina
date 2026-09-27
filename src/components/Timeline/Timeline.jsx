import React from 'react'
import "./Timeline.css";

function TimeLine() {
    return (

<div>
<div class="wrap">
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-bullhorn"></i>
        <div class="details">
          <span class="title">Llamado a Retos</span>
          <span>27 sep - 31 oct</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-users"></i>
        <div class="details">
          <span class="title">Llamado a Participantes</span>
          <span>11 oct - 14 nov</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Workshop</span>
          <span>23 de noviembre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Hackathon CoAfina</span>
          <span>27 al 29 de noviembre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>36 horas de creación</p>
      </section>
    </div>
  </div>
         </div>
    );
  }
  
  export default TimeLine;