window.addEventListener("load",getData);

function getData()
{
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET","https://api.covid19india.org/data.json",true);

    xmlHttp.onload = function()
    {
        let output = "";
        if(this.status===200)
        {
            const covidData = JSON.parse(this.responseText);
            console.log(covidData);
            console.log(covidData.statewise);
            covidData.statewise.forEach(function(state)
            {
                output = output + 
                `
                    <tr>
                        <td style="font-weight:bold">${state.state}</td>
                        <td>${state.confirmed}</td>
                        <td>${state.active}</td>
                        <td>${state.deaths}</td>
                    </tr>
                `;
            });
        }
        else
        {
            console.log("Error loading data");
        }
        document.querySelector("#tbody").innerHTML = output;
    }

    xmlHttp.send();
}