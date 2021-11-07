import { Typography } from "@material-ui/core";
import React from "react";
import "./App.css";

import Jobs from "./Jobs";

const JOB_API_URL = "/JobBoardDemo/api/jobs";

async function fetchJobs(updateCb) {
  // const res = await fetch(JOB_API_URL);

  // const jobs = await res.json();

  const jobs = JSON.parse("[{\"id\":\"job_4f5c3d1e368ecb4a\",\"title\":\"Angular Developer\",\"company\":\"TeamViewer GmbH\",\"location\":\"Sachsen-Anhalt\",\"link\":\"https://de.indeed.com/rc/clk?jk=4f5c3d1e368ecb4a&fccid=964b336d24aba7f4&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li style=\\\"margin-bottom:0px;\\\">An exceptional technologist is required as an engineer in the RCA technology UI development team.</li>\\n <li>The team is responsible for the build out and maintenance of\xe2\x80\xa6</li>\\n</ul>\",\"fetchedOn\":597762600000},{\"id\":\"job_038c0fe827acda88\",\"title\":\"Software Developer Frontend (gn)\",\"company\":\"Handelsblatt GmbH\",\"location\":\"D\xc3\xbcsseldorf+1 Ort\",\"link\":\"https://de.indeed.com/company/Handelsblatt-GmbH/jobs/Software-Developer-Frontend-038c0fe827acda88?fccid=dec3339460e9ac3b&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li style=\\\"margin-bottom:0px;\\\">Knapp 1000 Mitarbeiter: innen tragen t\xc3\xa4glich dazu bei, die Verbreitung wirtschaftlichen Sachverstands kraftvoll in die Tat umzusetzen.</li>\\n <li>Viele Benefits, wie z.B.</li>\\n</ul>\",\"fetchedOn\":1631446468731},{\"id\":\"job_dcc7ef0d6c7cf4b8\",\"title\":\"Software Developer Fullstack (gn)\",\"company\":\"Handelsblatt GmbH\",\"location\":\"D\xc3\xbcsseldorf\",\"link\":\"https://de.indeed.com/company/Handelsblatt-GmbH/jobs/Software-Developer-Fullstack-dcc7ef0d6c7cf4b8?fccid=dec3339460e9ac3b&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li style=\\\"margin-bottom:0px;\\\">Knapp 1000 Mitarbeiter: innen tragen t\xc3\xa4glich dazu bei, die Verbreitung wirtschaftlichen Sachverstands kraftvoll in die Tat umzusetzen.</li>\\n <li>Viele Benefits, wie z.B.</li>\\n</ul>\",\"fetchedOn\":1631446468731},{\"id\":\"job_a9835c7e9d7abfa4\",\"title\":\"Junior Web Developer (m/w/d)\",\"company\":\"PlayTheHype\",\"location\":\"Homeoffice\",\"link\":\"https://de.indeed.com/rc/clk?jk=a9835c7e9d7abfa4&fccid=bf700d65d65beb95&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li style=\\\"margin-bottom:0px;\\\">Du bist im Internet zu Hause.</li>\\n <li>Du bist offen f\xc3\xbcr neue Aufgaben und stets bereit, dich mit neuen Technologien auseinander zu setzen.</li>\\n</ul>\",\"fetchedOn\":1631446468731},{\"id\":\"job_8fe1db9e0797fa65\",\"title\":\"Web Developer\",\"company\":\"u.mension\",\"location\":\"Potsdam\",\"link\":\"https://de.indeed.com/rc/clk?jk=8fe1db9e0797fa65&fccid=382dcffddf821d63&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li>Wir suchen aktuell nach einem neuen Teammitglied fu\xcc\x88r unser Start-Up im Bereich nachhaltige Mode mit den Schnittstellen Digitalisierung, 3D und Nachhaltigkeit.</li>\\n</ul>\",\"fetchedOn\":1631446468731},{\"id\":\"job_da2b9c40d8cd1d5a\",\"title\":\"SOFTWARE DEVELOPER (m/w/d) C#/.NET F\xc3\x9cR UNSEREN B2B-WEBSHOP\",\"company\":\"GC Gro\xc3\x9fhandels Contor\",\"location\":\"Stuhr\",\"link\":\"https://de.indeed.com/rc/clk?jk=da2b9c40d8cd1d5a&fccid=5ad49593fe1c9656&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li>Dazu geh\xc3\xb6ren neben der Implementierung auch die gemeinsame Analyse, Konzeption und Bewertung von Anforderungen.</li>\\n</ul>\",\"fetchedOn\":1631446468731},{\"id\":\"job_b093dd2fb960aa1d\",\"title\":\"Junior PHP Webentwickler (m/w/d)\",\"company\":\"Volt Venture GmbH\",\"location\":\"Homeoffice\",\"link\":\"https://de.indeed.com/rc/clk?jk=b093dd2fb960aa1d&fccid=9ceeb8e563e89ef3&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li style=\\\"margin-bottom:0px;\\\">Du bist aktiver Teil in der technischen Entwicklung von Webanwendungen.</li>\\n <li>Du hast mindestens 3 Jahre Berufs- und Projekterfahrung und sehr gute Kenntnisse in der\xe2\x80\xa6</li>\\n</ul>\",\"fetchedOn\":1631446468731},{\"id\":\"job_57d2f076e6dad57e\",\"title\":\"Web Developer - Full Stack (w/m/d)\",\"company\":\"Formlabs GmbH\",\"location\":\"Berlin\",\"link\":\"https://de.indeed.com/rc/clk?jk=57d2f076e6dad57e&fccid=8e0192a48bd27a99&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li style=\\\"margin-bottom:0px;\\\">You are a proven <b>web</b> <b>developer</b>, with some 2 - 5 years of experience under your belt.</li>\\n <li>You can build and ship <b>web</b> applications in a production environment.</li>\\n</ul>\",\"fetchedOn\":1631446468731},{\"id\":\"job_7bd2ec6ed8823c7f\",\"title\":\"Web Frontend/.Net Developer (f/m/d)\",\"company\":\"XTP AG\",\"location\":\"Frankfurt am Main\",\"link\":\"https://de.indeed.com/rc/clk?jk=7bd2ec6ed8823c7f&fccid=d8722d743d1d81ab&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li>You are a passionate <b>developer</b> with an enthusiasm for new technologies and you have completed your computer science studies or a comparable qualification.</li>\\n</ul>\",\"fetchedOn\":1631446468731},{\"id\":\"job_33dacdf0a06f4916\",\"title\":\"Full Stack Developer M/W/D | Start-Up in Berlin\",\"company\":\"Perfect Jobs (SALES PERFECT GmbH)\",\"location\":\"Berlin\",\"link\":\"https://de.indeed.com/rc/clk?jk=33dacdf0a06f4916&fccid=0addf332712c1bf0&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li style=\\\"margin-bottom:0px;\\\">F\xc3\xbcr unseren Kunden, ein erfolgreiches Start-Up im Bereich HR Tech, suchen wir einen Full Stack Entwickler m/w/d in Berlin.</li>\\n <li>Beteiligung \xc3\x96PNV / Mobilit\xc3\xa4t, z.B.</li>\\n</ul>\",\"fetchedOn\":1631446468731},{\"id\":\"job_3f545b8b886c8d60\",\"title\":\"Frontend / UI Development Internship in SportsTech Startup\",\"company\":\"Golf Post\",\"location\":\"K\xc3\xb6ln\",\"link\":\"https://de.indeed.com/rc/clk?jk=3f545b8b886c8d60&fccid=737d67e8aa7cee4f&vjs=3\",\"description\":\"<ul style=\\\"list-style-type:circle;margin-top: 0px;margin-bottom: 0px;padding-left:20px;\\\"> \\n <li style=\\\"margin-bottom:0px;\\\">Continuously improving the user interface with the help of feedback from the community.</li>\\n <li>Tech stack: HTML, CSS and JavaScript.</li>\\n</ul>\",\"fetchedOn\":1631446468731}]");

  updateCb(jobs);
}

function App() {
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Typography variant="h4" component="h1" className={"text-center"}>
        Entry- and Mid-level Web Developer Jobs in Germany
      </Typography>

      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
