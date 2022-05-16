// GLOBAL VARIABLES
const container = document.getElementById("cardContainer")
const queryId = (id) => document.getElementById(id)

//FUNCTIONS
const getJob=()=> {
    fetch("https://6280450a1020d852057b3f0f.mockapi.io/jobs")
        .then(res => res.json())
        .then(data => createCardJob(data))
        .catch(err => console.log(err))
}
getJob()

const createCardJob = (jobs) =>{
     for (const job of jobs){
        // console.log(job)
         const { jobName, description, location, seniority, availability, category } = job
         queryId("cardContainer").innerHTML = `
         <div>
         <p><br>${jobName}</p>
         <p>${location}</p>
         <p>${category}</p>
         <p>${seniority}<p>
         <p>${availability}</p>
         <details>
         <p>${description}</p>
         
         </details>
         </div>
         `
     }
 }
const cleanContainer = () => cardContainer.innerHTML ="" 

queryId("editar").addEventListener("click", ()=>{
    queryId("form-container-edit").classList.remove("form-container-edit")
})
