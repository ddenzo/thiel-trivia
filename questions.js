// Editorially verified against the linked Thiel College pages on October 12, 2026.
const SOURCES={history:'https://www.thiel.edu/about/thiel-history',founders:'https://www.thiel.edu/about/founders-day',life:'https://www.thiel.edu/campus_life/campus-life',activities:'https://www.thiel.edu/campus_life/student-activities',media:'https://www.thiel.edu/campus_life/student-activities/campus-media',pedas:'https://www.thiel.edu/academics/departments/communication/james-pedas-communication-center',library:'https://www.thiel.edu/academics/academic-resources/library',book:'https://www.thiel.edu/newsroom/press-releases/detail/new-book-chronicles-past-50-years-of-thiel-college-history',tomcat:'https://www.thiel.edu/pdfs/The_Bell%2C_Fall-Winter_2024.pdf'};
const QUESTIONS=[];
function add(category,prompt,choices,fact,source){QUESTIONS.push({id:QUESTIONS.length+1,category,prompt,choices,answer:choices[0],fact,source:SOURCES[source],verified:'2026-10-12'});}
add('History','In what year was Thiel founded?',['1866','1776','1901','1924'],'Thiel began in 1866.','history');
add('History','Which Lutheran pastor led Thiel’s founding?',['William A. Passavant','Henry Muhlenberg','Martin Luther','Theophilus Roth'],'William A. Passavant led its formation.','history');
add('History','What was the academy originally called?',['Thiel Hall','Greenville Academy','Passavant School','Western College'],'The original academy was Thiel Hall.','history');
add('History','What was the amount of the Thiels’ initial gift?',['$4,000','$400','$40,000','$400,000'],'Louis and Barbara Thiel gave $4,000 in 1865.','history');
add('History','How many students enrolled in the first fall term?',['5','30','50','100'],'Five enrolled in fall 1866.','history');
add('History','How many of the original five students were women?',['3','0','1','5'],'Three of the first five students were women.','history');
add('History','What was Thiel’s first permanent building?',['Greenville Hall','Passavant Center','Roth Hall','Langenheim Library'],'Greenville presented Greenville Hall in 1874.','history');
add('History','How many trees were planted on campus on Nov. 10, 1874?',['392','160','100','1,866'],'Faculty and students planted 392 trees.','history');
add('Traditions','When does Thiel hold its annual Founders’ Day celebration?',['First Thursday of February','First Monday of September','Last Friday of May','July 4'],'Founders’ Day falls on February’s first Thursday.','founders');
add('Traditions','Whose birthday marked the first official Founders’ Day?',['Barbara Thiel','William Passavant','Louis Thiel','Henry Roth'],'The first celebration honored Barbara Thiel’s birthday.','founders');
add('Traditions','In what year was the first official Founders’ Day held?',['1876','1866','1924','1976'],'The first official event took place in 1876.','founders');
add('Traditions','Which pair gives its name to Thiel’s Distinguished Service Award?',['Louis and Barbara Thiel','Henry and Theophilus Roth','James and Ted Pedas','Fred and Jill Haer'],'The award bears Louis and Barbara Thiel’s names.','founders');
add('Traditions','Which is a listed Thiel signature event?',['Black & White Ball','Crimson Carnival','Purple Parade','Scarlet Soirée'],'Black & White Ball is a campus tradition.','activities');
add('Traditions','Which late-night event is listed among Thiel’s traditions?',['Late Night Breakfast','Midnight Marathon','Moonlight Regatta','Twilight Rodeo'],'Late Night Breakfast appears on the traditions list.','activities');
add('Traditions','In what year did the Tomcat nickname originate?',['1924','1866','1974','2005'],'The Bell’s mascot history dates the nickname to 1924.','tomcat');
add('Traditions','What is Thiel’s mascot character called?',['Tommy','Terry','Toby','Timmy'],'The Bell identifies the mascot as Tommy.','tomcat');
add('Campus','In which Pennsylvania community is Thiel located?',['Greenville','Meadville','Erie','Grove City'],'Thiel’s address is in Greenville.','life');
add('Campus','Which building houses the TC Café?',['Howard Miller Student Center','Greenville Hall','Pedas Center','David Johnson Memorial Chapel'],'The TC Café is in the Howard Miller Student Center.','life');
add('Campus','Where can students get Starbucks barista-style beverages?',['Tomcat Bistro','College Archives','Passavant Center','Roth Hall'],'Tomcat Bistro serves Starbucks beverages.','life');
add('Campus','On which days is Common Hour scheduled?',['Tuesdays and Thursdays','Mondays and Wednesdays','Fridays and Saturdays','Saturdays and Sundays'],'Common Hour is on Tuesdays and Thursdays.','life');
add('Campus','What is the name of Thiel’s library?',['Langenheim Memorial Library','Carnegie Memorial Library','Passavant Memorial Library','Roth Memorial Library'],'Thiel’s library is Langenheim Memorial Library.','library');
add('Campus','What is Thiel’s street address?',['75 College Ave.','100 Main St.','1866 University Drive','1 Tomcat Way'],'The campus address is 75 College Ave.','library');
add('Media','What are the call letters of Thiel’s student radio station?',['WXTC','WTHL','WTOM','WKTC'],'WXTC is the student radio station.','media');
add('Media','On what FM frequency does WXTC broadcast?',['88.1','90.5','93.7','104.3'],'WXTC broadcasts at 88.1 FM.','media');
add('Media','What was WXTC formerly called?',['WebCat Radio','Tomcat Talk','Thiel Airwaves','Greenville Radio'],'WXTC was formerly WebCat Radio.','media');
add('Media','What is Thiel’s student-run newspaper called?',['The Thielensian','The Bell','Tomcat Times','The Greenville Gazette'],'The Thielensian is the student newspaper.','media');
add('Media','What does TCTV stand for?',['Thiel College Television','Tomcat Community Television','Thiel Campus Trivia Video','Tomcat Cable Television'],'TCTV means Thiel College Television.','media');
add('Media','In what year was the James Pedas Communication Center dedicated?',['2014','1994','2004','2024'],'It was dedicated Oct. 4, 2014.','pedas');
add('Media','Which subject did James Pedas study at Thiel?',['Economics','Biology','History','Nursing'],'James Pedas earned a degree in economics.','pedas');
add('Media','Which film was among the Pedas brothers’ noted productions?',['Raising Arizona','Jurassic Park','Star Wars','Titanic'],'The brothers helped produce Raising Arizona.','pedas');
add('History','What years does Thiel’s history Volume II cover?',['1975–2025','1866–1916','1924–1974','2000–2026'],'Volume II covers 1975 through 2025.','book');
add('History','Which anniversary did Thiel celebrate in 2026?',['160th','100th','150th','200th'],'Thiel marked its 160th anniversary in 2026.','book');

if(typeof module!=='undefined') module.exports={QUESTIONS,SOURCES};
