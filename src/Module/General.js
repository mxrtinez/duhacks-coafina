import headtop from "./Assets/banner.png";

// Sponsors
import cedia from "./Assets/sponsorsLogos/cedia.png";
import redclara from "./Assets/sponsorsLogos/redclara.png";
import elbongo from "./Assets/sponsorsLogos/elbongo.png";
import ssi from "./Assets/sponsorsLogos/ssi.png";
import ccven from "./Assets/sponsorsLogos/ccven.png";
import inait from "./Assets/sponsorsLogos/inait.png";

// Team
import me from "./Assets/teami/Vashishth_Patel.jpg";
import Ryah from "./Assets/teami/Ryah.jpg";
import ysa from "./Assets/teami/ysa.png";
import reina from "./Assets/teami/reina.png";
import jal from "./Assets/teami/jal.png";
import estefania from "./Assets/teami/estefania.png";
import dennis from "./Assets/teami/dennis.png";
import arturo from "./Assets/teami/arturo.png";
import ariana from "./Assets/teami/ariana.png";
import alex from "./Assets/teami/alex.png";
import iskya from "./Assets/teami/iskya.png";
import oscar from "./Assets/teami/oscar.png";

const TOP_SECTION = {
  TITLE: "CoAfina 2025",
  Typed_effect: ["Del 7 al 9 de noviembre", "36 horas de creación", "¡Volvemos a sonar juntos!", "Retos de ciencia y educación"],
  SHORT_DESCRIPTION:
    "¡Convirtamos datos abiertos en soluciones brillantes! Anímense a proponer y resolver retos científicos y educativos que transformen realidades.",
  IMG_SRC: headtop,
  DISCORD_LINK: "https://discord.gg/yWhUUvrhpj",
  JUDGES_FORM_LINK:
    "#Jugdes Form Link",
  HACKERS_REGISTRATION_FORM_LINK:
    "#Hackers Registration devfolio link"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/coafina_hackathon/",
  discord: "https://discord.gg/yWhUUvrhpj",
  linkedin: "https://www.linkedin.com/company/coafina",
  twitter: "https://x.com/CoAfina/",
  email: "mailto:coordinacion@laconga.redclara.net",
  mail: "coordinacion@laconga.redclara.net"
};

const MIDDLE_SECTION = {
  TITLE: "¿Qué es CoAfina?",
  LONG_DESCRIPTION:
    "CoAfina es un hackathon virtual que reúne a estudiantes universitarios de América Latina para crear, en equipos multidisciplinarios, soluciones colaborativas a retos científicos y educativos de impacto social. Inspirado en los principios de Acceso Abierto, combina actividades de formación y divulgación con jornadas intensas de innovación y aprendizaje multicultural.",
  LOGO_EFFECT: true,
  LOGO: "./Assets/logo.png"
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "#Volunteer form link"
  },
  JOIN_TEAM: {
    required: true,
    src: "#Join team link"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

const calenderStartingDate = {
  month: 18,
  year: 2025
}


const schedule = [
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Opening Ceremoney",
        "timings": "8 AM - 9 AM",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "11 AM - 12 PM",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Closing Ceremoney",
        "timings": "6 PM - 7 PM",
        "link": "https://google.com"
      }
    ]
  },
]

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Overall First",
      content:
        "The first overall prize will be given to a project that outstands all other submissions."
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Overall Second",
      content:
        "The second overall prize will be given to the second-best project in the hackathon."
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Overall Third",
      content:
        "The third overall prize will be given to the third-best project in the hackathon."
    }
  ],
  [
    //Array 2
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: " Best Women Team",
      content: "Your project will qualify for this category if your all team members are women."
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Best DDU Team",
      content: "Your project will qualify for this category if your all team members are from DDU."
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ],
  [
    //Array 3
  ]
];

const TeamInfo = [
  [
    // Array 1
    {
      Name: "Alexander Martinez",
      role: "Organización",
      github: "",
      linkedin: "",
      img: alex
    },
    {
      Name: "Ariana Moreno",
      role: "Organización",
      github: "",
      linkedin: "",
      img: ariana
    },
    {
      Name: "Arturo Sánchez",
      role: "Organización",
      github: "",
      linkedin: "",
      img: arturo
    }
  ],
  [
    // Array 2
    {
      Name: "Dennis Cazar",
      role: "Organización",
      github: "",
      linkedin: "",
      img: dennis
    },
    {
      Name: "Estefanía Sánchez",
      role: "Organización",
      github: "",
      linkedin: "",
      img: estefania
    },
    {
      Name: "Iskya García",
      role: "Organización",
      github: "",
      linkedin: "",
      img: iskya
    },
  ],
  [
    // Array 2
    {
      Name: "José Antonio López",
      role: "Organización",
      github: "",
      linkedin: "",
      img: jal
    },
    {
      Name: "Oscar Altuve",
      role: "Organización",
      github: "",
      linkedin: "",
      img: oscar
    },
    {
      Name: "Reina Camacho",
      role: "Organización",
      github: "",
      linkedin: "",
      img: reina
    },
  ],
  [
    // Array 2
    {
      Name: "Ysabel Briceño",
      role: "Organización",
      github: "",
      linkedin: "",
      img: ysa
    }
  ]
];

const JudgesInfo = [
  [
    // Array 1
    {
      Name: "",
      role: "",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "",
      role: "",
      github: "",
      linkedin: "",
      img: Ryah
    },
    {
      Name: "",
      role: "",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    // Array 2
    {
      Name: "",
      role: "",
      github: "",
      linkedin: "",
      img: Ryah
    },
    {
      Name: "",
      role: "",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ]
];

const sponsorLogos = [
   [{ src: elbongo }, { src: redclara }, { src: inait }], //Array 1
   [{ src: ssi }, { src: ccven }, { src: cedia }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const titlesponsorLogos = [
   [{ src: elbongo }, { src: redclara }, { src: inait }], //Array 1
   [{ src: ssi }, { src: ccven }, { src: cedia }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
];

//const goldsponsorLogos = [
  // [  ], //Array 1
  //[{ src: filecoin, link: "https://filecoin.io/" }, { src: gfg, link: "https://www.geeksforgeeks.org/" }, { src: digitalocean, link: "https://www.digitalocean.com/" }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

//];

////const silversponsorLogos = [
//  [{ src: echo3d, link: "https://www.echo3d.co/" }, { src: wolfram, link: "https://www.wolfram.com/" }, { src: interviewbuddy, link: "https://interviewbuddy.in/" }], //Array 1
//  [{ src: alan, link: "https://alan.app/" }, { src: shivam, link: "#" }],
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

//];

//const bronzeponsorLogos = [
//  [{ src: replit, link: "https://replit.com/" }, { src: certopus, link: "https://certopus.com/" }, { src: taskade, link: "https://www.taskade.com/" },], //Array 1
//  [{ src: koii, link: "https://www.koii.network/" }, { src: postman, link: "https://postman.com/" }, {src: prayosys, link: "https://prayosys.com/"}],
//  [{src: shivalika, link: "#"}, {src: cuvette, link: "https://www.cuvette.tech/"}],
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

//];

//const FoodLogos = [
//  [{src: maruti, link: "#"},{src: jay_bhavani, link: "#"},{src: jay_maharaj, link: "#"}],
//];

//const designlogo = [
//  [{ src: digilogo, link: "https://www.instagram.com/digicosmic_studio/" }, { src: streamyard, link: "https://streamyard.com/" }, { src: shutterbugs, link: "https://www.instagram.com/shutterbugs_ddu/?hl=en" }]
//];
//

const frequentlyAskedQuestions = [
  [
    [
      {
        label: "¿Cómo puedo proponer un reto",
        content:
          'Si formas parte de una organización, red profesional, universidad o grupo de investigación, puedes presentar un reto con impacto en América Latina que se aborde mediante datos abiertos. Los temas incluyen ciencias y datos abiertos, tecnologías emergentes, inclusión digital, sostenibilidad y cultura colaborativa. Para participar como persona retadora, es imprescindible completar el formulario oficial. Tu propuesta puede convertirse en una solución colaborativa con impacto real. ¡Esperamos tu reto! Conoce los retos presentados en la edición 2024 e inspírate para proponer tu reto: https://laconga.redclara.net/hackathon/retos'
      },
      {
        label: "¿Cuándo será CoAfina",
        content: "El Hackathon CoAfina 2025 se desarrollará en varias fases clave: Pre-hackathon: tendrá lugar la semana del 3 de noviembre. Daremos más detalles en breve. Fase 1 – “Llamado a Retos”: estará abierta desde el 18 de agosto hasta el 30 de septiembre. Fase 2 – “Llamado a estudiantes”: se realizará del 22 de septiembre al 20 de octubre. Fase 3 – Hackathon: el evento central se llevará a cabo los días 7, 8 y 9 de noviembre, con jornadas intensivas de colaboración, innovación y aprendizaje."
      },
      {
        label: "¿Cuáles son los temas centrales del Hackathon CoAfina?",
        content: "CoAfina se enfoca en desafíos vinculados a educación y ciencias en América Latina. Sus ejes centrales incluyen: Ciencias y datos abiertos, tecnologías emergentes, inclusión digital, sostenibilidad y cultura colaborativa. Si tienes ideas que además integren inteligencia artificial en estos ámbitos, puedes participar como persona retadora, proponiendo un desafío, o como estudiante, formando parte de un equipo multidisciplinario."
      },
      {
        label: "¿Qué encontrarás en CoAfina",
        content: "Charlas inspiradoras, visitas virtuales a laboratorios internacionales, acceso a datos abiertos y un ambiente multicultural donde la colaboración es protagonista. ¡Una experiencia para aprender, conectar y crear!"
      }
    ],
    [
      {
        label: "¿Quiénes pueden participar?",
        content: "Pueden participar tanto personas retadoras como estudiantes universitarios: Si formas parte de una organización, empresa, redes profesionales, fundaciones, universidades o grupos de investigación con ideas que puedan resolverse mediante datos abiertos, puedes participar proponiendo un reto. Si eres estudiante de pregrado, maestría, doctorado u otro programa en una universidad con sede en América Latina, puedes sumarte como participante."
      },
      {
        label: "¿Necesitas apoyo para participar?",
        content: "En CoAfina entendemos que las condiciones para participar pueden variar: acceso limitado a conexión, responsabilidades familiares, o dificultades logísticas, económicas y técnicas. Queremos que todas las personas interesadas puedan sumarse.Por eso, hemos habilitado un fondo de apoyo para cubrir gastos que faciliten tu participación virtual. Si enfrentas alguna limitación, compártelo en el formulario de inscripción y postula al subsidio. Tu presencia en CoAfina importa. ¡Queremos que participes!"
      }
      ,
      {
        label: "¿Puedo participar aunque no tenga equipo?",
        content: "¡Sí! En CoAfina cada persona se inscribe de forma individual. Si ya tienes un equipo, pueden participar juntos. Y si no, no te preocupes: al inicio del hackathon se habilitarán espacios para que formes equipo con otras personas. Es una gran oportunidad para conectar con estudiantes de toda América Latina y colaborar en la resolución de retos. Los equipos multidisciplinarios son especialmente valiosos: cada integrante aporta desde su área de conocimiento, y juntos pueden crear soluciones más completas, creativas y con impacto social. ¡Inscríbete y prepárate para una experiencia colaborativa y transformadora!"
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  titlesponsorLogos,
  //goldsponsorLogos,
  //silversponsorLogos,
  //bronzeponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
  //designlogo,
  //FoodLogos
};
