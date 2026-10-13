// Editorially verified against the linked Thiel College pages on October 12, 2026.
const SOURCES={history:'https://www.thiel.edu/about/thiel-history',founders:'https://www.thiel.edu/about/founders-day',life:'https://www.thiel.edu/campus_life/campus-life',activities:'https://www.thiel.edu/campus_life/student-activities',media:'https://www.thiel.edu/campus_life/student-activities/campus-media',pedas:'https://www.thiel.edu/academics/departments/communication/james-pedas-communication-center',library:'https://www.thiel.edu/academics/academic-resources/library',book:'https://www.thiel.edu/newsroom/press-releases/detail/new-book-chronicles-past-50-years-of-thiel-college-history',tomcat:'https://www.thiel.edu/pdfs/The_Bell%2C_Fall-Winter_2024.pdf'};
Object.assign(SOURCES,{"dhi":"https://www.thiel.edu/signature-programs/dietrich-honors-institute","chapel":"https://www.thiel.edu/campus_life/spiritual-life","arts":"https://www.thiel.edu/academics/departments/performing-arts","events":"https://www.thiel.edu/about/special-events","choir":"https://www.thiel.edu/academics/departments/performing-arts/thiel-choirs","theatre":"https://www.thiel.edu/academics/departments/performing-arts/thiel-players","conspirito":"https://www.thiel.edu/about/con-spirito-concert-series","band":"https://www.thiel.edu/academics/departments/performing-arts/ttmp-band","haller":"https://www.thiel.edu/newsroom/press-releases/detail/thiel-college-appoints-business-professor-as-the-haller-enterprise-institute-director","hallerscholarship":"https://www.thiel.edu/academics/haller-scholarship","abroad":"https://www.thiel.edu/academics/experiential-learning/study-abroad-opportunities","nutrition":"https://www.thiel.edu/newsroom/press-releases/detail/thiel-college-names-nutrition-program-director-to-lead-new-bachelors-degree","nursing":"https://www.thiel.edu/academics/departments/nursing","sportsdegree":"https://www.thiel.edu/newsroom/press-releases/detail/new-sports-management-major-at-thiel-college-set-for-sudents-looking-for-careers-in-sports","ai":"https://www.thiel.edu/newsroom/press-releases/detail/thiel-college-awarded-1.8-million-federal-grant-to-expand-ai-literacy-student-success","campaign":"https://www.thiel.edu/newsroom/press-releases/detail/thiel-college-launches-public-phase-of-historic-100-million-join-the-journey-campaign","olympus":"https://www.thiel.edu/newsroom/press-releases/detail/thiel-college-to-break-ground-on-olympus-athletic-and-recreation-center-may-9","nordenberg":"https://www.thiel.edu/newsroom/press-releases/detail/thiel-alumnus-nordenberg-elected-to-the-prestigious-american-academy-of-arts-and-sciences","football":"https://www.thiel.edu/newsroom/press-releases/detail/leipheimer-appointed-to-ncaa-diii-football-committee","moot":"https://www.thiel.edu/newsroom/press-releases/detail/thiel-college-moot-court-team-places-7th-overall-at-national-preliminary-tournament-finals","csd":"https://www.thiel.edu/admissions/communication-sciences-and-disorders-at-thiel-college","environment":"https://www.thiel.edu/academics/departments/environmental-science"});
const QUESTIONS=[];
function add(id,category,prompt,choices,fact,source){QUESTIONS.push({id,category,prompt,choices,answer:choices[0],fact,source:SOURCES[source],verified:'2026-10-12'});}
add(1,'History','In what year was Thiel founded?',['1866','1776','1901','1924'],'Thiel began in 1866.','history');
add(2,'History','Which Lutheran pastor led Thiel’s founding?',['William A. Passavant','Henry Muhlenberg','Martin Luther','Theophilus Roth'],'William A. Passavant led its formation.','history');
add(3,'History','What was the academy originally called?',['Thiel Hall','Greenville Academy','Passavant School','Western College'],'The original academy was Thiel Hall.','history');
add(4,'History','What was the amount of the Thiels’ initial gift?',['$4,000','$400','$40,000','$400,000'],'Louis and Barbara Thiel gave $4,000 in 1865.','history');
add(5,'History','How many students enrolled in the first fall term?',['5','30','50','100'],'Five enrolled in fall 1866.','history');
add(6,'History','How many of the original five students were women?',['3','0','1','5'],'Three of the first five students were women.','history');
add(7,'History','What was Thiel’s first permanent building?',['Greenville Hall','Passavant Center','Roth Hall','Langenheim Library'],'Greenville presented Greenville Hall in 1874.','history');
add(8,'History','How many trees were planted on campus on Nov. 10, 1874?',['392','160','100','1,866'],'Faculty and students planted 392 trees.','history');
add(9,'Traditions','When does Thiel hold its annual Founders’ Day celebration?',['First Thursday of February','First Monday of September','Last Friday of May','July 4'],'Founders’ Day falls on February’s first Thursday.','founders');
add(10,'Traditions','Whose birthday marked the first official Founders’ Day?',['Barbara Thiel','William Passavant','Louis Thiel','Henry Roth'],'The first celebration honored Barbara Thiel’s birthday.','founders');
add(11,'Traditions','In what year was the first official Founders’ Day held?',['1876','1866','1924','1976'],'The first official event took place in 1876.','founders');
add(12,'Traditions','Which pair gives its name to Thiel’s Distinguished Service Award?',['Louis and Barbara Thiel','Henry and Theophilus Roth','James and Ted Pedas','Fred and Jill Haer'],'The award bears Louis and Barbara Thiel’s names.','founders');

add(14,'Traditions','Which late-night event is listed among Thiel’s traditions?',['Late Night Breakfast','Midnight Marathon','Moonlight Regatta','Twilight Rodeo'],'Late Night Breakfast appears on the traditions list.','activities');
add(15,'Traditions','In what year did the Tomcat nickname originate?',['1924','1866','1974','2005'],'The Bell’s mascot history dates the nickname to 1924.','tomcat');
add(16,'Traditions','What is Thiel’s mascot character called?',['Tommy','Terry','Toby','Timmy'],'The Bell identifies the mascot as Tommy.','tomcat');
add(17,'Campus','In which Pennsylvania community is Thiel located?',['Greenville','Meadville','Erie','Grove City'],'Thiel’s address is in Greenville.','life');
add(18,'Campus','Which building houses the TC Café?',['Howard Miller Student Center','Greenville Hall','Pedas Center','David Johnson Memorial Chapel'],'The TC Café is in the Howard Miller Student Center.','life');
add(19,'Campus','Where can students get Starbucks barista-style beverages?',['Tomcat Bistro','College Archives','Passavant Center','Roth Hall'],'Tomcat Bistro serves Starbucks beverages.','life');
add(20,'Campus','On which days are Community and Common Hours scheduled?',['Tuesdays and Thursdays','Mondays and Wednesdays','Fridays and Saturdays','Saturdays and Sundays'],'Common Hour is on Tuesdays and Thursdays.','life');
add(21,'Campus','What is the name of Thiel’s library?',['Langenheim Memorial Library','Carnegie Memorial Library','Passavant Memorial Library','Roth Memorial Library'],'Thiel’s library is Langenheim Memorial Library.','library');
add(22,'Campus','What is Thiel’s street address?',['75 College Ave.','100 Main St.','1866 University Drive','1 Tomcat Way'],'The campus address is 75 College Ave.','library');
add(23,'Media','What are the call letters of Thiel’s student radio station?',['WXTC','WTHL','WTOM','WKTC'],'WXTC is the student radio station.','media');
add(24,'Media','On what FM frequency does WXTC broadcast?',['88.1','90.5','93.7','104.3'],'WXTC broadcasts at 88.1 FM.','media');
add(25,'Media','What was WXTC formerly called?',['WebCat Radio','Tomcat Talk','Thiel Airwaves','Greenville Radio'],'WXTC was formerly WebCat Radio.','media');
add(26,'Media','What is Thiel’s student-run newspaper called?',['The Thielensian','The Bell','Tomcat Times','The Greenville Gazette'],'The Thielensian is the student newspaper.','media');
add(27,'Media','What does TCTV stand for?',['Thiel College Television','Tomcat Community Television','Thiel Campus Trivia Video','Tomcat Cable Television'],'TCTV means Thiel College Television.','media');
add(28,'Media','In what year was the James Pedas Communication Center dedicated?',['2014','1994','2004','2024'],'It was dedicated Oct. 4, 2014.','pedas');
add(29,'Media','Which subject did James Pedas study at Thiel?',['Economics','Biology','History','Nursing'],'James Pedas earned a degree in economics.','pedas');
add(30,'Media','Which film was among the Pedas brothers’ noted productions?',['Raising Arizona','Jurassic Park','Star Wars','Titanic'],'The brothers helped produce Raising Arizona.','pedas');
add(31,'History','What years does Thiel’s history Volume II cover?',['1975–2025','1866–1916','1924–1974','2000–2026'],'Volume II covers 1975 through 2025.','book');
add(32,'History','Which anniversary did Thiel celebrate in 2026?',['160th','100th','150th','200th'],'Thiel marked its 160th anniversary in 2026.','book');

add(33,"Academics","What does DHI stand for at Thiel?",["Dietrich Honors Institute","Department of Historical Inquiry","Division of Health Innovation","Digital Humanities Initiative"],"DHI is the Dietrich Honors Institute.","dhi");
add(34,"Academics","How long is the DHI core honors curriculum?",["Four years","One semester","Two years","Six years"],"DHI follows a four-year honors curriculum.","dhi");
add(35,"Academics","Which academic project do DHI students prepare with faculty mentors?",["An honors thesis","A medical residency","A doctoral dissertation","A bar examination"],"Honors scholars develop an undergraduate thesis.","dhi");
add(36,"Academics","Which DHI benefit helps students select courses sooner?",["Early registration","Automatic graduation","No course requirements","Guaranteed course cancellations"],"DHI offers early course registration.","dhi");

add(38,"Alumni","Who bequeathed the fund that established Thiel’s Dietrich Honors Institute?",["William S. Dietrich II","James Pedas","Henry Haller","Louis Thiel"],"William S. Dietrich II provided the founding gift.","dhi");
add(39,"History","How large was William S. Dietrich II’s 2011 bequest fund to Thiel?",["$25 million","$2.5 million","$250,000","$100 million"],"The bequest fund totaled $25 million.","dhi");
add(40,"History","Which couple is honored in the DHI’s full name?",["Kenneth and Marianna Brown Dietrich","Louis and Barbara Thiel","Glen and Lavonne Johnson","Henry and Grace Mary Haller"],"The institute honors William Dietrich’s parents.","dhi");
add(41,"Traditions","What worship service marks the end of the academic year?",["Baccalaureate Service","Advent Lessons and Carols","Welcome Worship Service","Founders’ Day"],"Baccalaureate is the year-end worship service.","chapel");

add(43,"History","In what year was the David Johnson Memorial Chapel dedicated?",["2006","1866","1953","2014"],"The chapel was dedicated in 2006.","chapel");
add(44,"History","On what date was the chapel dedicated in 2006?",["May 6","February 2","October 4","December 25"],"The dedication took place May 6.","chapel");
add(45,"Campus","Which couple funded the chapel named for their son?",["Glen and Lavonne Johnson","James and Wanda Pedas","Louis and Barbara Thiel","Kenneth and Marianna Dietrich"],"Glen and Lavonne Johnson funded the chapel.","chapel");

add(47,"Arts","What is the name of Thiel’s theater facility?",["William A. Robinson Theater","James Pedas Theater","Louis Thiel Playhouse","Roth Opera House"],"The performing facility is the Robinson Theater.","arts");
add(48,"Arts","When may students begin performing in Thiel ensembles and productions?",["Their first year","Only after graduation","Only in their senior year","After completing a master’s degree"],"First-year students can participate.","arts");
add(49,"Arts","Which keyboard instrument is specifically listed for private instruction?",["Pipe organ","Accordion only","Harpsichord only","Synthesizer only"],"Private instruction includes pipe organ.","arts");
add(50,"Arts","Which pair of minors is offered by the Music and Theatre Department?",["Music and theatre","Geology and astronomy","Nursing and nutrition","Economics and accounting"],"The department offers both minors.","arts");
add(51,"Campus","Which large Thiel venue is listed for commencements and convocations?",["Passavant Auditorium","Rudisill Room","Hodge Conference Room","Campus Post Office"],"Passavant accommodates large assemblies.","events");
add(52,"Campus","What seating capacity is listed for Passavant Auditorium?",["1,750","200","240","500"],"The Special Events page lists 1,750 seats.","events");
add(53,"Campus","What seating capacity is listed for the Robinson Theater?",["200","1,750","50","800"],"The theater is listed with 200 seats.","events");
add(54,"Campus","Which room is on the main level of the Howard Miller Student Center?",["Lutheran Heritage Room","Stamm Hall","Robinson Theater","JCC 101"],"The Lutheran Heritage Room is in HMSC.","events");

add(56,"Campus","At which street corner is the chapel located?",["College Avenue and Ridgeway Street","Main and Walnut streets","Packard Avenue and Elm Street","Zimmerman Way and High Street"],"The chapel stands at College and Ridgeway.","events");
add(57,"Campus","Which facility is at 35 Roy Johnson Drive?",["Glen Johnson Community Center","Greenville Hall","Passavant Auditorium","Robinson Theater"],"The Johnson Community Center has this address.","events");

add(59,"Arts","In what year was the Thiel Choir founded?",["1953","1866","1924","2007"],"The choir dates to 1953.","choir");

add(61,"Arts","What is Thiel’s smaller vocal ensemble called?",["Thiel College Chamber Singers","Tomcat Brass Ensemble","Passavant Players","WXTC Voices"],"The smaller group is the Chamber Singers.","choir");

add(63,"Arts","Which ensemble must Chamber Singers also belong to?",["Thiel Choir","Marching Pride","Jazz Ensemble","Thiel Players"],"Chamber Singers also sing in the Thiel Choir.","choir");
add(64,"Arts","What is Thiel’s student theatrical group called?",["Thiel Players","Tomcat Repertory Orchestra","Greenville Chorale","Pedas Film Society"],"The theatrical group is the Thiel Players.","theatre");
add(65,"Arts","How many major productions does the Thiel Players page describe each year?",["Two","One every decade","Six","Twelve"],"The page lists two major annual productions.","theatre");

add(67,"Arts","Which national theater honorary may Thiel Players members join?",["Alpha Psi Omega","Alpha Chi Sigma","Beta Beta Beta","Kappa Mu Epsilon"],"Alpha Psi Omega is the theater honorary.","theatre");
add(68,"Arts","Who is eligible to join the Thiel Players?",["All Thiel students","Only theatre minors","Only seniors","Only business majors"],"Membership is open to all students.","theatre");
add(69,"Arts","What kind of music is central to Thiel’s Con Spirito series?",["Chamber music","Electronic dance music","Country karaoke","Marching competitions"],"Con Spirito presents chamber music.","conspirito");
add(70,"History","In what year did the Con Spirito series begin?",["2007","1953","1924","2026"],"The series began in fall 2007.","conspirito");
add(71,"Arts","Where is the Con Spirito series based?",["David Johnson Memorial Chapel","Campus Post Office","Roth Hall lobby","Alumni Stadium"],"The chapel is the series’ home.","conspirito");
add(72,"History","Whom does the Con Spirito series honor?",["Lori Johnson Wallace","Barbara Thiel","Marianna Dietrich","Grace Mary Haller"],"The series honors Lori Johnson Wallace.","conspirito");
add(73,"Arts","Which vocal ensemble appeared in Con Spirito in October 2025?",["Chanticleer","The Beatles","Pentatonix","The Beach Boys"],"Chanticleer appeared in October 2025.","conspirito");
add(74,"Arts","Which guitar ensemble appeared in the series in February 2023?",["The Beijing Guitar Duo","The Tokyo Drum Quartet","The Paris Brass Trio","The Rome Flute Ensemble"],"The Beijing Guitar Duo performed in 2023.","conspirito");
add(75,"Arts","What does TTMP stand for?",["Thiel Tomcat Marching Pride","Thiel Theatre Music Program","Tomcat Television Media Production","Thiel Touring Musical Players"],"TTMP is the Thiel Tomcat Marching Pride.","band");
add(76,"Arts","At which home sporting events does Marching Pride perform pregame and halftime shows?",["Football games","Swimming meets","Golf tournaments","Tennis matches"],"TTMP performs at home football games.","band");

add(78,"Arts","When does Marching Pride’s band camp take place?",["Before the fall semester","After spring graduation","During winter finals","Only in July overseas"],"Camp precedes the fall semester.","band");
add(79,"Arts","Which winter events does the TTMP Pep Band support?",["Basketball and wrestling","Golf and tennis","Baseball and softball","Cross-country and swimming"],"Pep Band supports basketball and wrestling.","band");
add(80,"Arts","Must students be in Marching Pride to join concert band or jazz ensemble?",["No","Yes, for four years","Yes, but only freshmen","Only if they major in biology"],"Those ensembles are open independently.","band");
add(81,"Arts","Which Thiel chamber ensemble is student-led and features brass instruments?",["Thiel Brass Quintet","Chamber Singers","Thiel Players","WXTC Radio"],"The Brass Quintet is student-led.","band");
add(82,"Academics","What is the Haller Enterprise Institute’s central focus?",["Entrepreneurship","Marine biology","Classical languages","Athletic training"],"Haller develops entrepreneurial students.","haller");
add(83,"History","What was the Haller Enterprise Institute called before its renaming?",["Thiel Business Institute","Thiel Music Institute","Passavant Research Center","Greenville Honors School"],"It was originally the Thiel Business Institute.","haller");
add(84,"History","In what year was the Thiel Business Institute renamed for the Hallers?",["1996","1866","1953","2014"],"The renaming followed the Hallers’ 1996 gift.","haller");
add(85,"History","Which couple gave their name to the Haller Enterprise Institute?",["Henry and Grace Mary Haller","Louis and Barbara Thiel","Kenneth and Marianna Dietrich","Glen and Lavonne Johnson"],"The institute honors Henry and Grace Mary Haller.","haller");
add(86,"History","How much was the Hallers’ 1996 gift for entrepreneurial education?",["$1 million","$4,000","$25 million","$100 million"],"Their gift totaled $1 million.","haller");
add(87,"Alumni","Which longtime professor directed the institute from 1984 to 2020?",["David Miller","William Passavant","Mark Nordenberg","James Pedas"],"David Miller served from 1984 to 2020.","haller");
add(88,"Academics","Are Haller scholarships restricted to business majors?",["No, students in any major may qualify","Yes, accounting only","Yes, finance only","Yes, MBA students only"],"Students in any major may apply.","hallerscholarship");
add(89,"Academics","Must a student speak another language to study abroad through Thiel?",["No, English-taught programs are available","Yes, three languages","Yes, fluent Latin","Only if studying biology"],"English-taught options are available.","abroad");
add(90,"Academics","Which city hosts Thiel’s listed Korean university exchange partners?",["Seoul","Tokyo","Beijing","Bangkok"],"The listed Korean partners are in Seoul.","abroad");
add(91,"Academics","Which program supports summer study abroad and global leadership?",["Vira I. Heinz Program","Con Spirito Program","Haller Theater Program","Tomcat Athletics Academy"],"VIH supports international learning and leadership.","abroad");


add(94,"Academics","Who was appointed nutrition program director in 2026?",["Katheryn E. Willey","Amy Tepper","Debra Wallace","Sheila Gross"],"Katheryn E. Willey was appointed in 2026.","nutrition");
add(95,"Academics","What undergraduate degree does Thiel’s nutrition program award?",["Bachelor of Science","Bachelor of Music","Bachelor of Fine Arts","Bachelor of Architecture"],"Nutrition is a Bachelor of Science program.","nutrition");


add(98,"Academics","What does BSN mean in Thiel’s nursing degree?",["Bachelor of Science in Nursing","Business Studies in Nutrition","Bachelor of Social Neuroscience","Basic Studies in Nursing"],"BSN is Bachelor of Science in Nursing.","nursing");
add(99,"Academics","What training tools let nursing students practice before treating patients?",["Lifelike simulation manikins","Only written essays","Astronomical telescopes","Film editing consoles"],"Simulation manikins support nursing practice.","nursing");
add(100,"Academics","Which new bachelor’s major combines business, leadership and communication for the sports industry?",["Sports Management","Theatre","Nutrition","Environmental Science"],"Sports Management combines these fields.","sportsdegree");
add(101,"Academics","For which entering term did the new sports management degree invite applications?",["Fall 2026","Fall 1996","Spring 2006","Summer 2014"],"The announcement invited Fall 2026 applicants.","sportsdegree");
add(102,"Academics","Which career area is specifically listed for sports management graduates?",["Athletic administration","Dental surgery","Aircraft design","Archaeological excavation"],"Athletic administration is a listed career.","sportsdegree");
add(103,"Academics","How much is Thiel’s announced 2026 federal AI literacy grant?",["$1.8 million","$180,000","$18 million","$100 million"],"The total award is $1.8 million.","ai");
add(104,"Academics","How long is the announced AI grant initiative?",["Five years","One month","Two semesters","Ten years"],"The initiative spans five years.","ai");
add(105,"Academics","Which required course is being redesigned for foundational AI instruction?",["Information Literacy","Organic Chemistry","Music Theory","Calculus III"],"The project redesigns Information Literacy.","ai");
add(106,"Academics","Which students are intended to receive foundational AI instruction through the redesigned course?",["All first-year students","Only computer science seniors","Only alumni","Only visiting faculty"],"The course reaches all first-year students.","ai");
add(107,"Academics","What new stackable credential is planned under the AI project?",["AI Literacy Certificate","Pilot License","Architecture Certificate","Oceanography Diploma"],"The project includes an AI Literacy Certificate.","ai");

add(109,"History","What is the name of Thiel’s $100 million campaign?",["Join the Journey","Light the Lighthouse","Build the Bridge","Reach the Summit"],"The campaign is Join the Journey.","campaign");
add(110,"History","What is the Join the Journey campaign goal?",["$100 million","$10 million","$25 million","$1 million"],"The announced goal is $100 million.","campaign");
add(111,"Traditions","During which event did Join the Journey’s public phase launch?",["Homecoming 2026","Spring finals","Winter commencement 2024","Founders’ Day 1996"],"The public launch took place at Homecoming 2026.","campaign");
add(112,"History","How much did Thiel’s prior largest campaign raise, as reported in 2026?",["$65 million","$4 million","$25 million","$200 million"],"The prior campaign raised $65 million.","campaign");
add(113,"Campus","What is the name of the planned athletic and recreation center?",["Olympus","Apollo","Orion","Atlas"],"The new facility is named Olympus.","olympus");
add(114,"Campus","Which couple contributed the $5 million lead gift for Olympus?",["James and Wanda Pedas","Louis and Barbara Thiel","Kenneth and Marianna Dietrich","Henry and Grace Mary Haller"],"James and Wanda Pedas provided the lead gift.","olympus");
add(115,"Campus","Where was the Olympus groundbreaking ceremony scheduled?",["Near Stoeber Field’s end zone","Inside the library","At the campus post office","At Greenville Airport"],"The ceremony was scheduled by Stoeber Field.","olympus");
add(116,"Campus","Which planned Olympus feature supports walking and running?",["An indoor track","A ski slope","A sailing course","A horse track"],"Plans include a walking and running track.","olympus");
add(117,"Alumni","Which Thiel alumnus served as University of Pittsburgh chancellor?",["Mark Nordenberg","James Pedas","Jack Leipheimer","David Miller"],"Mark Nordenberg led Pitt.","nordenberg");
add(118,"Alumni","In what year did Mark Nordenberg graduate from Thiel?",["1970","1950","1993","2004"],"Nordenberg earned his degree in 1970.","nordenberg");
add(119,"Alumni","Which university awarded Nordenberg his law degree?",["University of Wisconsin","Harvard University","Ohio State University","Penn State University"],"His law degree is from Wisconsin.","nordenberg");
add(120,"Alumni","Which honorary academy elected Mark Nordenberg in 2025?",["American Academy of Arts and Sciences","National Academy of Engineering","Academy of Motion Picture Arts and Sciences","American Academy of Pediatrics"],"Nordenberg joined the Arts and Sciences academy.","nordenberg");
add(121,"Alumni","In what year did Nordenberg become Pitt’s seventeenth chancellor?",["1996","1970","1984","2025"],"He became chancellor in 1996.","nordenberg");
add(122,"Athletics","Which year’s Thiel football team finished the regular season 10–0?",["2005","1924","1996","2026"],"The 2005 team went 10–0.","football");
add(123,"Athletics","Who coached Thiel’s 2005 undefeated regular-season football team?",["Jack Leipheimer","James Pedas","Mark Nordenberg","William Passavant"],"Jack Leipheimer coached the team.","football");
add(124,"Athletics","Which opponent did Thiel beat in its 2005 NCAA playoff opener?",["Johns Hopkins University","Yale University","Penn State University","Ohio State University"],"Thiel defeated Johns Hopkins.","football");
add(125,"Athletics","Which conference championship did Thiel football win in 2005?",["Presidents’ Athletic Conference","Big Ten","Atlantic Coast Conference","Ivy League"],"Thiel won the PAC championship.","football");
add(126,"Athletics","Which two sports did Jack Leipheimer play at Thiel?",["Football and baseball","Soccer and golf","Basketball and tennis","Swimming and wrestling"],"Leipheimer competed in football and baseball.","football");
add(127,"Athletics","Which football position did Jack Leipheimer play at Thiel?",["Tight end","Quarterback","Placekicker","Cornerback"],"Leipheimer played tight end.","football");
add(128,"Media","In what year did The Thielensian begin continuous blog publication?",["2017","1866","1924","1953"],"Its continuous blog began in fall 2017.","media");

add(130,"Alumni","What is the name of James Pedas’ brother and entertainment-business partner?",["Ted","Henry","Louis","Kenneth"],"James worked with his brother Ted.","pedas");
add(131,"Media","Which recording company did the Pedas brothers establish in the 1950s?",["Colt 45 Records","Motown Records","Sun Records","Atlantic Records"],"They established Colt 45 Records.","pedas");
add(132,"Media","Which Coen brothers debut film did the Pedas brothers help produce?",["Blood Simple","Fargo","The Big Lebowski","True Grit"],"They backed Blood Simple.","pedas");
add(133,"Alumni","Which Pennsylvania community is James Pedas’ hometown?",["Farrell","Monaca","Meadville","Erie"],"James Pedas is a Farrell native.","pedas");

add(135,"History","How many authors wrote Thiel’s history Volume II?",["Five","Two","Ten","One"],"Five authors contributed to Volume II.","book");
add(136,"History","Who wrote the earlier Thiel history volume continued by Volume II?",["Roy Johnson","Mark Nordenberg","James Pedas","Henry Haller"],"Volume II continues Roy Johnson’s history.","book");
add(137,"History","Which Thiel archivist coauthored the 1975–2025 history volume?",["John Hauser","William Passavant","Henry Roth","Ted Pedas"],"John Hauser was a coauthor.","book");
add(138,"History","Which former Thiel president coauthored Volume II?",["Robert Olson","Abraham Lincoln","Woodrow Wilson","Dwight Eisenhower"],"Robert Olson coauthored the volume.","book");
add(139,"History","Which birthplace is listed for founder William Passavant?",["Zelienople, Pennsylvania","Boston, Massachusetts","London, England","Cleveland, Ohio"],"Passavant was a Zelienople native.","history");
add(140,"History","Who is honored by Brother Martin’s Walk?",["Martin Luther","Martin Van Buren","Martin Scorsese","Martin Short"],"The walk commemorates Martin Luther.","history");
add(141,"Traditions","On what calendar date was the first official Founders’ Day in 1876?",["February 2","May 6","November 10","July 4"],"The first official event was February 2.","founders");
add(142,"Traditions","What does the Louis and Barbara Thiel Distinguished Service Award recognize?",["Community leadership and service","Highest football score","Best laboratory grade","Fastest campus race"],"The award honors sustained community service.","founders");

add(144,"Campus","Which campus tradition involves making a plush companion?",["Stuff-A-Plush","Black & White Ball","Founders’ Day","Commencement"],"Stuff-A-Plush is a listed tradition.","life");
add(145,"Campus","Which campus tradition has a spooky dance theme?",["Zombie Prom","Founders’ Day","Career Expo","Honors Convocation"],"Zombie Prom is a listed student favorite.","life");
add(146,"Academics","Who represented Thiel at the January 2026 Preliminary National Moot Court Finals?",["Rex Dugan and Anna Kavulla","James and Ted Pedas","Henry and Theophilus Roth","Kenneth and Marianna Dietrich"],"Dugan and Kavulla formed the team.","moot");





add(152,"Academics","Which zoo is listed as an environmental internship site?",["Pittsburgh Zoo","San Diego Zoo","Bronx Zoo","London Zoo"],"Pittsburgh Zoo is a listed site.","environment");
add(153,"Academics","Which state park is listed as an environmental internship site?",["Pymatuning State Park","Presque Isle State Park","Ohiopyle State Park","Raccoon Creek State Park"],"Pymatuning is on the internship list.","environment");
add(154,"Academics","Which Pennsylvania agency is listed for environmental internships?",["Department of Environmental Protection","Department of Revenue","Department of Transportation","Department of Banking"],"DEP is a listed internship partner.","environment");

add(156,"Academics","What does CSD stand for in Thiel’s undergraduate program?",["Communication Sciences and Disorders","Computer Systems Design","Community Service Development","Clinical Sports Diagnostics"],"CSD expands to Communication Sciences and Disorders.","csd");
add(157,"Academics","Which undergraduate degree is offered in CSD?",["Bachelor of Science","Bachelor of Architecture","Bachelor of Music","Bachelor of Fine Arts"],"CSD is a Bachelor of Science program.","csd");
add(158,"Academics","Which on-campus center provides undergraduate CSD clinical practicum?",["Center for Speech-Language Services","Campus Post Office","Environmental Weather Center","Thiel Media Studios"],"CSD students practice at this center.","csd");
add(159,"Academics","Which hearing-related field is named as a CSD career pathway?",["Audiology","Astronomy","Archaeology","Agronomy"],"Audiology is a named career pathway.","csd");
add(160,"Academics","Which speech-related profession is named as a CSD pathway?",["Speech-language pathology","Film directing","Sports officiating","Mechanical engineering"],"CSD prepares students for speech-language pathology.","csd");
if(typeof module!=='undefined') module.exports={QUESTIONS,SOURCES};
