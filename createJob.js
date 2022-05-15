//FROM FORM "CREATE JOB"
const queryId = (idName) => document.getElementById(idName)

const saveJobFromForm = () =>{
    return{
    jobName: queryId("jobName").value,
    location: queryId("location").value,
    category: queryId("category").value,
    seniority: queryId("seniority").value,
    availability: queryId("availability").value,
    description: queryId("description").value
    }
}

//POST
const createAJob = () =>{
    fetch("https://6280450a1020d852057b3f0f.mockapi.io/jobs",{
        method: "POST", 
        Headers: {
            'Content-Type': 'Application/json'
        },
        body:JSON.stringify(saveJobFromForm())
    })
}

queryId("submit").addEventListener("click", createAJob)

