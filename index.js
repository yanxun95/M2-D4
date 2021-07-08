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
        let ol = document.createElement("ol");
        par.innerHTML = "Team" + i;
        div.setAttribute("class","col");
        div.setAttribute("id","col"+i);
        div.appendChild(par);
        div.appendChild(ol);
        team.appendChild(div);
    }
}

const assignTeam = () => {
    let totalStudent = studentArr.length;
    if(totalStudent !== 0){
        let eachStudentPerTeam = totalStudent/numberOfTeam;
        // console.log("second:" + parseInt(eachStudentPerTeam))
        
        let randomStudent = Math.floor(Math.random() * totalStudent);
        console.log("random:" + randomStudent);
        let studentToTeam = studentArr[randomStudent];

        let randomTeam = Math.floor(Math.random() * numberOfTeam) + 1;
        let randomColumn = "col"+randomTeam
        console.log(randomColumn);

        let x = document.getElementById("col1").children;
        console.log(x)
        let test = document.getElementById(randomColumn)
        let ol = document.getElementById("ol");
        let li = document.createElement("li");
        li.innerHTML = studentToTeam;
        ol.appendChild(li);
        test.appendChild(ol);

        studentArr.splice(randomStudent, 1)
    }else{
        alert("There are no more student in waiting list.");
    }

}

