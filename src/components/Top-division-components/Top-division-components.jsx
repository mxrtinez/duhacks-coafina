import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import { TOP_SECTION } from "../../Module/General";


function Btn(props) {
  return (
    <div
      className="apply-button"
      data-hackathon-slug="DUHacks"
      data-button-theme="light"
      style={{ height: "44px", width: "312px" }}
    ></div>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}



function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <br />
      <p className="shortjoin"> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <br /><br />
      {/*      <a
        href="#devfolio"  
        // rel="noreferrer"
        class="linkclass"
        target="_blank"
      >
*/}
{/*        <button class="dev-button">
          <svg
            class="dev-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 115.46 123.46"
            style={{height: "24px", width: "24px", "margin-right": "8px"}}
          >
            <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
            <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
          </svg>
          Apply With Devfolio
        </button>
</a>
      */}
      {/* 
      <div
        class="apply-button"
        data-hackathon-slug="duhacks"
        data-button-theme="light"
      // style="height: 44px; width: 312px"
      ></div>
      */}

      &nbsp;&nbsp;
      <p className="shortjoin">¡Únete a nuestro Discord! 👉🏻  
      <a
        href="https://discord.gg/yWhUUvrhpj"
        rel="noreferrer"
        target="_blank"
      > 
        <button class="dis-button">
          <svg className="svgbtn" xmlns="http://www.w3.org/2000/svg" style={{ height: "24px", width: "24px", color: "white" }} fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" fill="white"></path> </svg>

        </button>
      </a></p>
      <br />
      <p className="shortjoin">Presenta tu reto 👉🏻  
      <a
        href="https://forms.gle/CMwwqhVR52RAx8Z97"
        rel="noreferrer"
        target="_blank"
      > 
        <button class="dis-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2C7.77614 2 8 2.22386 8 2.5V4.5C8 4.77614 7.77614 5 7.5 5C7.22386 5 7 4.77614 7 4.5V2.5C7 2.22386 7.22386 2 7.5 2ZM3.61091 3.61091C3.80618 3.41565 4.12276 3.41565 4.31802 3.61091L5.73223 5.02513C5.9275 5.22039 5.9275 5.53697 5.73223 5.73223C5.53697 5.92749 5.22039 5.92749 5.02513 5.73223L3.61091 4.31802C3.41565 4.12276 3.41565 3.80617 3.61091 3.61091ZM11.3891 3.61091C11.5843 3.80617 11.5843 4.12276 11.3891 4.31802L9.97487 5.73223C9.77961 5.9275 9.46303 5.9275 9.26777 5.73223C9.0725 5.53697 9.0725 5.22039 9.26777 5.02513L10.682 3.61091C10.8772 3.41565 11.1938 3.41565 11.3891 3.61091ZM2 7.5C2 7.22386 2.22386 7 2.5 7H4.5C4.77614 7 5 7.22386 5 7.5C5 7.77614 4.77614 8 4.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM8.64019 7.2993C7.98886 6.75653 7 7.21968 7 8.06752V17.1693C7 18.0926 8.14454 18.5227 8.75258 17.8278L10.7787 15.5122C11.0635 15.1867 11.475 15 11.9075 15H15.119C16.0543 15 16.4777 13.8305 15.7592 13.2318L8.64019 7.2993ZM8 17.1693L8 8.06752L15.119 14H11.9075C11.1866 14 10.5008 14.3112 10.0261 14.8537L8 17.1693Z" fill="#ffffffff"/>
</svg>

        </button>
      </a></p>
      {/*<a href="https://duhacks.devfolio.co/" target="_blank"><button>Learn More</button></a>*/}
    </div>


  );
}

export { Btn, Myinfo };
