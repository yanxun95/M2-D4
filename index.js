let studentArr = [];
let teamArr = [];
let numberOfTeam = 0;

const addStudent = () => {
    let newStudent = document.getElementById("addStudent").value;
    studentArr.push(newStudent);
    document.getElementById("addStudent").value = null;
     listStudent();
}

const listStudent = () => {
    let ol = document.getElementById("allStudent");
    let li = document.createElement("li");
    for(let i = 0; i < studentArr.length; i++){
        li.setAttribute("class","list-group-item");
        li.innerHTML = studentArr[i];
        ol.appendChild(li);
    }
}

//create team of column
const numTeam = () => {
    numberOfTeam = document.getElementById("numberOfTeam").value;
    for(let i = 1; i <=numberOfTeam; i++){
        let team = document.getElementById("team");
        let div = document.createElement("div");
        let par = document.createElement("p");
        par.innerHTML = "Team" + i;
        div.setAttribute("class","col");
        div.setAttribute("id","col"+i);
        div.appendChild(par);
        team.appendChild(div);
    }
}

const assignTeam = () => {
    let totalStudent = studentArr.length;
    let eachStudentPerTeam = totalStudent/numberOfTeam;
    console.log(totalStudent)
    // console.log("second:" + parseInt(eachStudentPerTeam))
    
    let randomStudent = Math.floor(Math.random() * totalStudent);
    console.log("random:" + randomStudent);
    let studentToTeam = studentArr[randomStudent];
    console.log(studentToTeam);



    let team = document.getElementById("team").children.length;
    let test = document.getElementById("col1")
    let ol = document.createElement("ol");
    let li = document.createElement("li");
    li.innerHTML = studentToTeam;
    ol.appendChild(li);
    test.appendChild(ol);

    // when the
    studentArr.splice(randomStudent, 1)
}