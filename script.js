const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events`;
const partiesHtml = document.querySelector('#parties');

const parties = [];

const partyNameInput = document.querySelector('#partyName');
const partyDateInput = document.querySelector('#partyDate');
const partyLocationInput = document.querySelector('#partyLocation');
const partyDescriptionInput = document.querySelector('#partyDescription');
const submit = document.querySelector('#submit');



submit.addEventListener('click', (e) =>{
  e.preventDefault();
  
})


const render = () => {
  const partyArray = parties.map((currentObject) => {
    let li = document.createElement("li");
    li.append(`NAME: ${currentObject.name} --- DATE: ${currentObject.date} --- LOCATION: ${currentObject.location} --- DESCRIPTION: ${currentObject.description}`);
    return li;
  })
  partiesHtml.replaceChildren(...partyArray)
  
}


const getParties = async () => {

  try {
    const response = await fetch(API_URL);
    let json = await response.json();
   
    if(!json.error){
     json.data.forEach((currentObject) => {
      parties.push(currentObject);
     });
     render();
    }
  }
  catch (error) {
    console.log(error);
  }

}
getParties();
console.log(parties);
render();

