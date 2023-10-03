let name = document.getElementById("name");
    let email = document.getElementById("email");
    let contactno = document.getElementById("contactno");
    let school = document.getElementById("school");
    let college = document.getElementById("college");
    let course = document.getElementById("course");
    let comp1 = document.getElementById("comp1");
    let comp1dur = document.getElementById("comp1dur");
    let comp1info = document.getElementById("comp1info");
    let comp2 = document.getElementById("comp2");
    let comp2dur = document.getElementById("comp2dur");
    let comp2info = document.getElementById("comp2info");
    let achieve = document.getElementById("achieve");
    let acknow = document.getElementById("acknow");

    function myfunc() {

        document.getElementById("outname").innerHTML = name.value;
        document.getElementById("outemail").innerHTML = email.value;
        document.getElementById("outcontactno").innerHTML = contactno.value;
        document.getElementById("outschool").innerHTML = school.value;
        document.getElementById("outcollege").innerHTML = college.value;
        document.getElementById("outcourse").innerHTML = course.value;
        document.getElementById("outcomp1").innerHTML = comp1.value;
        document.getElementById("outcomp1dur").innerHTML = comp1dur.value;
        document.getElementById("outcomp1info").innerHTML = comp1info.value;
        document.getElementById("outcomp2").innerHTML = comp2.value;
        document.getElementById("outcomp2dur").innerHTML = comp2dur.value;
        document.getElementById("outcomp2info").innerHTML = comp2info.value;
        document.getElementById("outachieve").innerHTML = achieve.value;
        document.getElementById("outacknow").innerHTML = acknow.value;

        // let temp = document.getElementById("rawform");
        document.getElementById("rawform").style.display = "none";
        // console.log(temp);
        // document.getElementById("rawform").remove();

        document.getElementById("container").style.display = "block";
    }