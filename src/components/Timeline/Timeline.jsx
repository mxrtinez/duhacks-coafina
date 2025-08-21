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
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="title">Inicia el llamado a retos</span>
          <span>Agosto 18</span>
        </div>
        {/*<p className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        */}
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title">Cierre del llamado a retos</span>
          <span>14th Jul 2022</span>
        </div>
        {/*<p  className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
       */}
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Inicia el llamado a retos</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon opening ceremony will start 9:15 AM onwards.</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Cierra el llamado a participantes</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon coding period will start from 10:30 AM onwards.</p>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Conferencia aplicaciones</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Session on APIs 101 using Postman on 4:00 PM Onwards.</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Integración pre hackathon</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Session on APIs 101 using Postman on 4:00 PM Onwards.</p>
        
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Inicio del Hackathon</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Session on Complete Interview Preperation by GeeksForGeeks on 11.30 AM Onwards.</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Conferencia magistral</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Session on APIs 101 using Postman on 4:00 PM Onwards.</p>
        
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Visita Altlas</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Session on Building Voice Ai Powered App in React JS with Alan Ai on 06:30 PM Onwards.</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Finaliza el hackathon</span>
          <span>17th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon coding period will end on 10:30 PM.</p>
        
      </section>
    </div>
  </div>
         </div>
    );
  }
  
  export default TimeLine;