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
          <span>19 de septiembre</span>
        </div>
        {/*<p  className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
       */}
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Inicia el llamado a estudiantes</span>
          <span>20 de septiembre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Cierra el llamado a estudiantes</span>
          <span>20 de octubre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Workshop</span>
          <span>25 de octubre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Integración pre hackathon</span>
          <span>6 de noviembre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
        
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Inicio del Hackathon</span>
          <span>7 de noviembre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Conferencia 1</span>
          <span>8 de noviembre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
        
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Visita Atlas</span>
          <span>8 de noviembre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
        
      </section>
    </div>
        <div class="row row-2">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Conferencia 2</span>
          <span>9 de noviembre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}></p>
        
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Finaliza el hackathon</span>
          <span>9 de noviembre</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Entrega de productos: 12:00 (UTC -5)</p>
        
      </section>
    </div>
  </div>
         </div>
    );
  }
  
  export default TimeLine;