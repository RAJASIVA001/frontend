const baseApi = "https://back-production-6140.up.railway.app/std"
var tbody = document.getElementById("tbody")
const id = document.getElementById("id")
const name = document.getElementById("name")
const age = document.getElementById("age")
const city = document.getElementById("city")


function getData() {
    fetch(baseApi)
        .then((response) => response.json())
        .then((res) => {

            var backenddata = ""
            res.map((dt) => {
                backenddata += `
        
        <tr>
            <td>${dt.id}</td>
            <td>${dt.name}</td>
            <td>${dt.age}</td>
            <td>${dt.city}</td>
            <td><input style="background-color: #FF3D00;width: 120px;" class="btn text-light text-uppercase" type="button" onclick="delData(${dt.id})" value="delete"></td>
        </tr>

        `
            })

            tbody.innerHTML = backenddata

        })
}

//Clear Data
function clrData() {
    id.value = ""
    name.value = ""
    age.value = ""
    city.value = ""
}

//Add Data or  Update Data
function addNewData() {
    var data = {
        id: id.value,
        name: name.value,
        age: age.value,
        city: city.value
    }

    fetch(baseApi,
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }
    )
        .then((res) => res.json())
        .then((dt) => {
            console.log(dt)
            // Reset Table  and Rest Form
            getData()
            clrData()
        })
        .catch((err) => { console.log(err) })

}

// Delete Data Normal 
function delData() {
    fetch(baseApi + `/${id.value}`,
        {
            method: "DELETE"
        }
    )
        .then((res) => res.json())
        .then((dt) => {
            console.log(dt)
            // Reset Table  and Rest Form
            getData()
            clrData()
        })
        .catch((err) => { console.log(err) })

}

// Delete Data Unique
function delData(id) {
    fetch(baseApi + `/${id}`,
        {
            method: "DELETE"
        }
    )
        .then((res) => res.json())
        .then((dt) => {
            console.log(dt)
            // Reset Table  and Rest Form
            getData()
            clrData()
        })
        .catch((err) => { console.log(err) })

}






//Main Program
//First Time Page Load 
getData()
