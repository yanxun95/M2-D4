let studentArr = [];
let teamArr = [];
let numberOfTeam = 0;

const addStudent = () => {
    let newStudent = document.getElementById("addStudent").value;
    studentArr.push(newStudent);
    document.getElementById("addStudent").value = null;
    let deleteTable = document.getElementById("allStudent");
    deleteTable.innerHTML = "";
    listStudent();
}

const listStudent = () => {
    let ol = document.getElementById("allStudent");
    //let li = document.createElement("li"); why this will work
    for(let i = 0; i < studentArr.length; i++){
        let li = document.createElement("li");
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
        let ol = document.createElement("ol");
        par.innerHTML = "Team" + i;
        div.setAttribute("class","col");
        div.setAttribute("id","col"+i);
        ol.setAttribute("id", "ol"+i)
        div.appendChild(par);
        div.appendChild(ol);
        team.appendChild(div);
        for(let i = 0; i < numberOfTeam; i++){
            teamArr[i] = [];
        }
    }
    document.getElementById("numberOfTeam").value = null;
}

const assignTeam = () => {
    let totalStudent = studentArr.length;
    if(totalStudent !== 0){
        let eachStudentPerTeam = (totalStudent/numberOfTeam)+1;  
        let randomStudent = Math.floor(Math.random() * totalStudent);
        let studentToTeam = studentArr[randomStudent];

        let randomTeam = Math.floor(Math.random() * numberOfTeam) + 1;

        if(teamArr[randomTeam-1].length <= eachStudentPerTeam){
            teamArr[randomTeam-1].push(studentToTeam);
        }else{
            // recreate random number 
        }
        
        let randomColumn = "col"+randomTeam
        let randomOl = "ol"+randomTeam
        let createLi = document.getElementById(randomColumn);
        let ol = document.getElementById(randomOl);
        let li = document.createElement("li");
        li.innerHTML = studentToTeam;
        ol.appendChild(li);
        createLi.appendChild(ol);

        studentArr.splice(randomStudent, 1)
        let deleteTable = document.getElementById("allStudent");

        deleteTable.innerHTML = "";
        listStudent();
    }else{
        alert("There are no more student in waiting list.");
    }
}

const reset = () => {
    studentArr = [];
    teamArr = [];
    numberOfTeam = 0;
    let deleteWaitingList = document.getElementById("allStudent");
    let deleteTeam = document.getElementById("team");
    deleteWaitingList.innerHTML = "";
    deleteTeam.innerHTML = "";
}