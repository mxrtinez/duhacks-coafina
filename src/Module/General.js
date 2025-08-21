import headtop from "./Assets/fase2.png";

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
  TITLE: "CoAfina",
  Typed_effect: ["Del 7 al 9 de noviembre", "36 horas de creación", "¡Volvemos a sonar juntos!", "Retos de ciencia y educación"],
  SHORT_DESCRIPTION:
    " ¡Anímense a proponer y resolver retos científicos y educativos con datos abiertos!",
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
    "CoAfina es un hackathon impulsado originalmente por el proyecto por LA-CoNGA physics y al que se han sumado diferentes organizaciones internacionales. El espacio busca que estudiantes universitarios en América Latina desarrollen soluciones en forma colaborativa para resolver problemas relacionados con temas científicos y educativos de impacto social. Seguimos los principios internacionales de Acceso Abierto. CoAfina se desarrolla en forma virtual en una semana de actividades divulgativas y de formación alrededor del dato abierto, la ciencia y las oportunidades tecnológicas. En los últimos tres días, luego de conformar equipos de distintos países y áreas del conocimiento, quienes participan se someten a una rica sesión de búsqueda de soluciones, con la adrenalina en alto, tensión, emoción y mucho aprendizaje científico, técnico, organizativo y multicultural.",
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
      github: "https://github.com/vasu-1",
      linkedin: "https://www.linkedin.com/in/vashishth-patel-312a52204/",
      img: alex
    },
    {
      Name: "Ariana Moreno",
      role: "Organización",
      github: "https://github.com/R-Ayush777",
      linkedin: "https://www.linkedin.com/in/ayush-rudani-7a3516204/",
      img: ariana
    },
    {
      Name: "Arturo Sánchez",
      role: "Organización",
      github: "https://github.com/Smit-05",
      linkedin: "https://www.linkedin.com/in/smit-padaliya-aa03291b8/",
      img: arturo
    }
  ],
  [
    // Array 2
    {
      Name: "Dennis Cazar",
      role: "Organización",
      github: "https://github.com/zenishasavaliya",
      linkedin: "https://www.linkedin.com/in/zenishasavaliya/",
      img: dennis
    },
    {
      Name: "Estefanía Sánchez",
      role: "Organización",
      github: "https://github.com/PARSHWA0510",
      linkedin: "https://www.linkedin.com/in/parshwa-mehta-949306205",
      img: estefania
    },
    {
      Name: "Iskya García",
      role: "Organización",
      github: "https://github.com/Dharmesh-Poriya07",
      linkedin: "https://www.linkedin.com/in/dharmesh-poriya/",
      img: iskya
    },
  ],
  [
    // Array 2
    {
      Name: "José Antonio López",
      role: "Organización",
      github: "https://github.com/AneriSonani09",
      linkedin: "https://www.linkedin.com/in/aneri-sonani-061b44204/",
      img: jal
    },
    {
      Name: "Oscar Altuve",
      role: "Organización",
      github: "#",
      linkedin: "https://www.linkedin.com/in/nirali-darji-1b766a209",
      img: oscar
    },
    {
      Name: "Reina Camacho",
      role: "Organización",
      github: "https://github.com/DhruviSherathiya",
      linkedin: "https://www.linkedin.com/in/dhruvisherathiya",
      img: reina
    },
  ],
  [
    // Array 2
    {
      Name: "Ysabel Briceño",
      role: "Organización",
      github: "https://github.com/manavshah25",
      linkedin: "https://www.linkedin.com/in/manav-shah-28a521212",
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
          'Convocamos a personas vinculadas a empresas, organizaciones, redes profesionales, fundaciones, universidades, y grupos de investigación para que presenten problemas con impacto en América Latina y que puedan resolverse haciendo uso de datos abiertos, en los siguientes temas: ciencia abierta, ciencia ciudadana, iniciativas educativas, infraestructura compartida, impacto social de la ciencia. Si tienes en mente retos con datos abiertos en los temas que convocamos, no dudes en contactarnos: es probable que un ambiente colaborativo y entusiasta te ayude a encontrar solución. Conoce los retos presentados en la edición 2024 e inspírate para proponer tu reto: '
      },
      {
        label: "¿Cuándo será CoAfina",
        content: "La tercera edición de CoAfina será del 7 al 9 de noviembre. Durante estos tres días los equipos participantes aceptarán resolver retos específicos. El evento será seguido en forma remota. Durante el encuentro ofreceremos nuestros contenidos síncronos para su visualización asíncrona, dado que la calidad del internet varía en la región. El último día, cada equipo presentará su solución a un grupo de jurados interdisciplinarios, seleccionados en América Latina."
      },
      {
        label: "Temas centrales",
        content: "El hackathon CoAfina 2024 se centra en temas de ciencia y educación, con una agenda que convoca intereses relacionados con la nueva universidad: ciencia abierta, ciencia ciudadana, iniciativas educativas, infraestructura compartida, impacto social de la ciencia. ¿Tienes ideas sobre inteligencia artificial en estos tópicos? Anímate a participar como persona retadora o como estudiante."
      },
      {
        label: "¿Qué encontrarás en CoAfina",
        content: "En CoAfina podrás asistir a charlas sobre temas asociados a los retos, podrás realizar visitas virtuales a grandes laboratorios internacionales, te encontrarás con un mundo de posibilidades con datos abiertos y vivirás un ambiente multicultural y colaborativo."
      }
    ],
    [
      {
        label: "¿Quiénes pueden participar?",
        content: "En este espacio convocamos, en una primera etapa, a personas y organizaciones a proponer retos; y en una segunda etapa convocamos a estudiantes universitarios a resolver los retos planteados. Etapa 1: si en tu organización o grupo tienes ideas que puedan ser resueltas con datos abiertos, participa como retador/a. Hemos recibido retos relacionados con clima, enseñanza, ciudadanía y democracia, salud, turismo, entre algunos. Revisa los retos de CoAfina e inspírate. Necesitamos ideas como las tuyas. Etapa 2: si eres estudiante (pregrado, maestría, doctorado u otro programa) de alguna universidad con sede en América Latina ¡ya puedes unirte a CoAfina! Inscríbete y revisa si tus inquietudes y conocimientos te permiten dialogar con un equipo para resolver cualquiera de los retos planteados. Disponte a crear comunidad y marca en tu calendario una semana de adrenalina."
      },
      {
        label: "¿Necesitas apoyo para participar?",
        content: "CoAfina reconoce las condiciones desiguales de nuestra región para participar en este tipo de iniciativas: limitaciones de conexión, gastos operativos para estar disponible durante tres días en el hackathon, estudiantes madres o padres que no tienen con quién dejar a sus hijos al cuidado de otros mientras ocurre este espacio, u otras dificultades logísticas. Queremos que participes. Por esto, hemos dispuesto un fondo para subsidiar ítems que faciliten tu estancia virtual en CoAfina 2024. Si tienes algún problema (operativo, técnico, logístico), cuéntanos en el formulario y participa de nuestro subsidio."
      }
      ,
      {
        label: "¿Necesitas equipo para participar?",
        content: "No es necesario tener un equipo para participar en CoAfina 2024. Cada participante se inscribe por separado. Si ya tienes un equipo formado, pueden participar juntos. Sin embargo, si no tienes un equipo, ¡no te preocupes! Al inicio del hackathon, se crearán espacios para que puedas conformar un equipo con otras personas. Esta es una excelente oportunidad para conocer a otros estudiantes de toda América Latina y colaborar en la resolución de retos interesantes. ¡Inscríbete y prepárate para una experiencia enriquecedora y colaborativa!"
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
