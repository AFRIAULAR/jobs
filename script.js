const container = document.getElementById("cardContainer")

const queryId = (id) => document.getElementById(id)

const getJob=()=> {
    fetch("https://6280450a1020d852057b3f0f.mockapi.io/jobs")
        .then(res => res.json())
        .then(data => createJobDetail(data))
        .catch(err => console.log(err))
}
getJob()
 const createJobDetail = (jobs) =>{
     for (const job of jobs){
        // console.log(job)
         const { jobName, description, location, seniority, availability } = job
         queryId("cardContainer").innerHTML += `
         <div>
         <h3>${jobName}</h3>
         <h3>${description}</h3>
         <h3>${location}</h3>
         <h3>${seniority}</h3>
         <h3>${availability}<hr>
         </div>
         `
     }
 }
const cleanContainer = () => cardContainer.innerHTML ="" 