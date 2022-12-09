// const p = document.querySelector('p');

// const fragment = document.createDocumentFragment();
// const li = fragment
//   .appendChild(document.createElement('section'))
//   .appendChild(document.createElement('ul'))
//   .appendChild(document.createElement('li'));
// li.textContent = 'hello world';

// console.log(p.textContent);

// document.body.appendChild(fragment);

const nameField = document.querySelector(".name");
const imageField = document.querySelector(".profilePicture");
const head = document.querySelector(".heading-add");
const btnGrp = document.querySelector(".btn-grp");
const agebtn = document.querySelector('[data-attr="age"]');
const emailbtn = document.querySelector('[data-attr="email"]');
const phonebtn = document.querySelector('[data-attr="phone"]');
const addtionalInfo = document.querySelector(".addtionalInfo");
const refetchBtn = document.querySelector("#getUser");

//1. fetching
const url = "https://randomuser.me/api/";
let user = {};

const getData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    user = data.results[0];
    console.log(user);
  } catch (err) {
    alert(err);
    console.log(err);
  }
};

const displayInitialData = async () => {
  await getData();
  nameField.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
  imageField.src = user.picture.large;
  btnGrp.style.display = "none";
  addtionalInfo.textContent = "";

};

const togglingAdditionalInfo = () => {
  if (btnGrp.style.display === "none") {
    btnGrp.style.display = "block";
  } else {
    btnGrp.style.display = "none";
  }
};

const showAdditionalInfo = (e) => {
  const att = e.target.getAttribute("data-attr");
  if (att == "age") {
    addtionalInfo.textContent = user.dob.age;
  } else if (att == "phone") {
    addtionalInfo.textContent = user.phone;
  } else if (att == "email") {
    addtionalInfo.textContent = user.email;
  }
};

displayInitialData();

head.addEventListener("click", togglingAdditionalInfo);
agebtn.addEventListener("click", showAdditionalInfo);
emailbtn.addEventListener("click", showAdditionalInfo);
phonebtn.addEventListener("click", showAdditionalInfo);
refetchBtn.addEventListener("click", displayInitialData);

