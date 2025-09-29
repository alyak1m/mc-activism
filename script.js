/* .js files add interaction to your website */
var message = document.getElementById("secret");
var button = document.getElementById("myButton");

if (button) {
  button.addEventListener("click", getMessage);
}

function getMessage(){
  var who = document.getElementById("senate").value;
  var lastName = document.getElementById("last-name").value;
  var grades = document.getElementById("grade").value;
  var school = document.getElementById("schoolName").value;
  var studies = document.getElementById("major").value;
  var cityName = document.getElementById("city").value;
  var names = document.getElementById("name").value;

  message.innerHTML = "Dear " + who + " " + lastName +", I am a " + grades + " grade student at " + school + " and I study " + studies + " but I struggle to find oppurtunities such as internships in Delaware. Right now, Delaware students face serious disadvantages when it comes to gaining real-world experience before graduation and many of us care deeply about improving career opportunities for high school students in our state. A few things that were found after some researching is that Delaware has the highest rate of unpaid internships in the country—more than 1 in 3 (24/7 Wall St.). Most students cannot earn academic credit for internships or apprenticeships. Compared to other states, Delaware offers limited funding or coordination to connect students with employers or paid learning experiences. We believe this is a serious equity issue. Many students, especially from low-income or underrepresented backgrounds, graduate without access to the work-based learning that is now essential for both college and career readiness. We respectfully urge you to support legislation and funding that expands paid, credit-bearing internships and youth apprenticeships, help create a statewide coordination system to connect students and employers, ensure all students—not just those with connections— can access meaningful career experiences. We’re hopeful that, with your leadership, Delaware can catch up to states like Indiana and Colorado, where strong public support has created thousands of student opportunities. We thank you for your service to Delaware and welcome any chance to speak or share more ideas. Sincerly, " + names  + cityName
}

/*----------------------------Fact Generator----------------------------*/

var factList = [
  "Federal apprenticeship data through January 2025 shows Delaware lists only hundreds of youth (ages 16–24) apprentices in its Registered Apprenticeship tracking—while leading states count thousands.",
"Over 33.5% of internship positions in Delaware are unpaid—the highest share of all 50 states.",
"Studies show paid interns receive about 1.61 job offers on average post-internship, while unpaid interns receive 0.95—almost half as many.Meaning unpaid internships not only limit access, they reduce future employment prospects.",
]

var sourceList = [
  "https://www.apprenticeship.gov/data-and-statistics/apprentices-by-state-dashboard",
"https://www.thecentersquare.com/delaware/article_7db808a3-3ad1-57c6-b193-8e082251745c.html",
"https://careers.newark.rutgers.edu/blog/2024/01/12/20-internship-statistics-students-need-to-know/"
]

var source = document.getElementById("sources");
var fact = document.getElementById("fact");
var factBtn = document.getElementById("fctBtn");
var count = 0;

if(factBtn){
  factBtn.addEventListener("click", giveFact);
}

function giveFact(){
  fact.innerHTML = factList[count];
   source.innerHTML = '<a href="' + sourceList[count] + '">Here</a>';
  
  count++
  if (count == factList.length){
    count = 0;
  }
}