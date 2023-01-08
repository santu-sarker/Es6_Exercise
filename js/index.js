// import { create_row } from "./user_operations.js";
const user = [
  {
    _id: 1,
    isActive: true,
    name: "Dena Mcmillan",
    gender: "female",
    company: "DAIDO",
    email: "denamcmillan@daido.com",
    phone: "+1 (899) 572-2797",
    address: "172 Interborough Parkway, Felt, Illinois, 6362",
  },
  {
    _id: 2,
    isActive: true,
    name: "Ramona Holder",
    gender: "female",
    company: "CINASTER",
    email: "ramonaholder@cinaster.com",
    phone: "+1 (820) 535-3292",
    address: "297 Tapscott Street, Waiohinu, Mississippi, 5566",
  },
  {
    _id: 3,
    isActive: true,
    name: "Jeannette Lawrence",
    gender: "female",
    company: "ROCKYARD",
    email: "jeannettelawrence@rockyard.com",
    phone: "+1 (850) 472-3600",
    address: "234 Beekman Place, Harrodsburg, Michigan, 7572",
  },
  {
    _id: 4,
    isActive: true,
    name: "Hutchinson Romero",
    gender: "male",
    company: "ELEMANTRA",
    email: "hutchinsonromero@elemantra.com",
    phone: "+1 (939) 478-2454",
    address: "946 Lewis Avenue, Cassel, Oregon, 8975",
  },
  {
    _id: 5,
    isActive: true,
    name: "Parks Merrill",
    gender: "male",
    company: "HYDROCOM",
    email: "parksmerrill@hydrocom.com",
    phone: "+1 (957) 419-2393",
    address: "160 Mill Road, Bangor, South Dakota, 2792",
  },
  {
    _id: 6,
    isActive: false,
    name: "Bass Hopkins",
    gender: "male",
    company: "SUSTENZA",
    email: "basshopkins@sustenza.com",
    phone: "+1 (848) 434-3821",
    address: "570 Amber Street, Ruffin, Delaware, 1364",
  },
  {
    _id: 7,
    isActive: true,
    name: "Adams Whitley",
    gender: "male",
    company: "MELBACOR",
    email: "adamswhitley@melbacor.com",
    phone: "+1 (811) 415-2560",
    address: "681 Wilson Avenue, Croom, Kentucky, 4813",
  },
  {
    _id: 8,
    isActive: true,
    name: "Faulkner Nunez",
    gender: "male",
    company: "QUALITEX",
    email: "faulknernunez@qualitex.com",
    phone: "+1 (837) 598-3555",
    address: "204 Ivan Court, Woodlake, West Virginia, 4204",
  },
  {
    _id: 9,
    isActive: true,
    name: "Andrea Simon",
    gender: "female",
    company: "QUORDATE",
    email: "andreasimon@quordate.com",
    phone: "+1 (804) 600-2959",
    address: "397 President Street, Rutherford, Georgia, 971",
  },
  {
    _id: 10,
    isActive: true,
    name: "Annie Porter",
    gender: "female",
    company: "CALCULA",
    email: "annieporter@calcula.com",
    phone: "+1 (988) 448-3022",
    address: "916 Seton Place, Rose, Marshall Islands, 3631",
  },
  {
    _id: 11,
    isActive: true,
    name: "Foreman Mcdonald",
    gender: "male",
    company: "VINCH",
    email: "foremanmcdonald@vinch.com",
    phone: "+1 (934) 490-3176",
    address: "783 Chester Court, Brandywine, Iowa, 6707",
  },
  {
    _id: 12,
    isActive: false,
    name: "Erin Wood",
    gender: "female",
    company: "PROWASTE",
    email: "erinwood@prowaste.com",
    phone: "+1 (972) 524-2720",
    address: "875 Madoc Avenue, Chloride, New Jersey, 5486",
  },
  {
    _id: 13,
    isActive: true,
    name: "Ballard Weaver",
    gender: "male",
    company: "QNEKT",
    email: "ballardweaver@qnekt.com",
    phone: "+1 (908) 543-2717",
    address: "311 Bliss Terrace, Fingerville, Indiana, 3405",
  },
  {
    _id: 14,
    isActive: true,
    name: "Harriet Chaney",
    gender: "female",
    company: "INTRADISK",
    email: "harrietchaney@intradisk.com",
    phone: "+1 (863) 556-2024",
    address: "496 Ocean Parkway, Westerville, Alabama, 7641",
  },
  {
    _id: 15,
    isActive: false,
    name: "Velma Lowe",
    gender: "female",
    company: "YURTURE",
    email: "velmalowe@yurture.com",
    phone: "+1 (980) 523-3231",
    address: "470 Cobek Court, Wawona, Northern Mariana Islands, 1387",
  },
  {
    _id: 16,
    isActive: true,
    name: "Holland Dunn",
    gender: "male",
    company: "SPRINGBEE",
    email: "hollanddunn@springbee.com",
    phone: "+1 (976) 493-2195",
    address: "903 Newel Street, Clarence, Pennsylvania, 4033",
  },
];

//  ***************** table row creation function  ******************

const create_row = (item) => {
  let row = document.createElement("tr");
  let id = document.createElement("td");
  let name = document.createElement("td");
  let gender = document.createElement("td");
  let company = document.createElement("td");
  let email = document.createElement("td");
  let phone = document.createElement("td");
  let address = document.createElement("td");
  let edit_ac = document.createElement("td");
  let delete_ac = document.createElement("td");
  let edit_btn = document.createElement("button");
  let delete_btn = document.createElement("button");

  id.innerText = item._id;
  // console.log(item);
  name.innerText = item.name;
  gender.innerText = item.gender;
  company.innerText = item.company;
  email.innerText = item.email;
  phone.innerText = item.phone;
  address.innerText = item.address;
  edit_btn.innerText = "Edit";
  edit_btn.classList.add("btn", "btn-warning", "edit_user");
  edit_btn.setAttribute("value", item._id);
  edit_ac.append(edit_btn); // appending button to edit cell (td)

  delete_btn.innerText = "Delete";
  delete_btn.classList.add("btn", "btn-danger", "delete_user");
  delete_btn.setAttribute("value", item._id);
  delete_ac.append(delete_btn);

  row.append(
    id,
    name,
    phone,
    email,
    company,
    address,
    gender,
    edit_ac,
    delete_ac
  );
  return row;
};

// pagination creating function
const create_pagination = (total_page) => {
  const paginate_elements = [];

  // creating prev and next btn
  let prev_li = document.createElement("li");
  let nxt_li = document.createElement("li");
  let prev_btn = document.createElement("button");
  let nxt_btn = document.createElement("button");
  prev_li.classList.add("page-item", "paginate_prev");
  prev_btn.classList.add("page-link");
  prev_btn.setAttribute("id", "prev_btn");
  prev_btn.innerText = "previous";
  prev_li.appendChild(prev_btn);
  paginate_elements.push(prev_li);

  for (let i = 1; i <= total_page; i++) {
    let node = document.createElement("li");
    let node_btn = document.createElement("button");
    node.classList.add("page-item");
    node_btn.classList.add("page-link", "paginate_btn");
    i == 1 ? node.classList.add("active") : "";
    node_btn.setAttribute("value", i);
    node_btn.innerText = i;
    node.append(node_btn);
    paginate_elements.push(node);
  }
  nxt_li.classList.add("page-item", "paginate_nxt");
  nxt_btn.classList.add("page-link");
  nxt_btn.setAttribute("id", "next_btn");
  nxt_btn.innerText = "next";
  nxt_li.appendChild(nxt_btn);
  paginate_elements.push(nxt_li);
  return paginate_elements;
};

const load_user = (page) => {
  // inserting rows one by one
  table_body.innerHTML = ""; // removing all child node of table
  current_position = page * per_page - per_page;

  let user_data = user.slice(current_position, current_position + per_page);
  console.log(user_data);
  user_data.forEach((item) => {
    let row = create_row(item);

    table_body.appendChild(row);
  });
};

//  **************** fetching all user information into table  **************

const table_body = document.getElementById("table_body");
const modal = new bootstrap.Modal("#user_modal");
const edit_modal = new bootstrap.Modal("#edit_modal");

// adding pagination to the page
const per_page = 5;
const total_page = Math.ceil(user.length / per_page);
let current_position = 0;
let current_page = 1;
const paginate_parent = document.getElementById("paginate_parent");
paginate_parent.append;
const elements = create_pagination(total_page);
elements.forEach((item) => {
  paginate_parent.appendChild(item);
});

load_user(current_page);

// pagination button click event
let paginate_buttons = document.querySelectorAll(".paginate_btn");
paginate_buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let btn_parent = btn.parentElement.parentElement.children;

    for (let i = 0; i <= btn_parent.length - 1; i++) {
      //looping through each li and remove active class
      if (btn_parent[i].classList.contains("active")) {
        btn_parent[i].classList.remove("active");
      }
      btn.parentElement.classList.add("active"); //adding active class  to its parent li
    }
    // event.target.classList.add("active");
    current_page = Number(event.target.value);
    load_user(current_page);
  });
});

//  previous page button event
const prev_btn = document.getElementById("prev_btn");

prev_btn.addEventListener("click", (event) => {
  let childens = document.querySelectorAll(".paginate_btn");

  if (current_page == 1) {
    event.preventDefault();
  } else {
    current_page -= 1;
    load_user(current_page);

    for (let i = 0; i <= childens.length - 1; i++) {
      //looping through each li and remove active class
      if (childens[i].parentElement.classList.contains("active")) {
        childens[i].parentElement.classList.remove("active");
        childens[i - 1].parentElement.classList.add("active");
        break;
      }
    }
  }
});

// next page button event
const next_btn = document.getElementById("next_btn");
next_btn.addEventListener("click", (event) => {
  if (current_page == 4) {
    event.preventDefault();
  } else {
    current_page += 1;
    load_user(current_page);

    let childens = document.querySelectorAll(".paginate_btn");

    for (let i = 0; i <= childens.length - 1; i++) {
      // i=0 is prev btn and only 4 items are p
      //looping through each li and remove active class
      if (childens[i].parentElement.classList.contains("active")) {
        childens[i].parentElement.classList.remove("active");
        childens[i + 1].parentElement.classList.add("active");
        break;
      }
    }
  }
});

// *********** adding new user into user array ***********
const add_user = document.getElementById("user_submit");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");
const address = document.getElementById("address");
const gender = document.getElementsByName("gender");

// edit modal values
const edit_id = document.getElementById("edit_id");
const edit_name = document.getElementById("edit_name");
const edit_email = document.getElementById("edit_email");
const edit_phone = document.getElementById("edit_phone");
const edit_company = document.getElementById("edit_company");
const edit_address = document.getElementById("edit_address");
const edit_gender = document.getElementsByName("edit_gender");

//  onclick event for user creation
add_user.addEventListener("click", () => {
  const id = user[user.length - 1]._id + 1; // calculating last indexed user id +1

  const gen_value = gender[0].checked
    ? "male"
    : gender[1].checked
    ? "female"
    : "undefined";

  const data = {
    _id: id,
    isActive: false,
    name: name.value,
    gender: gen_value,
    company: company.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
  };

  user.push(data);
  const row = create_row(data);
  table_body.prepend(row);
  modal.hide();
});

//  editing user data
let edit_buttons = document.querySelectorAll(".edit_user");

const edit_submit = document.getElementById("edit_submit");
edit_buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let id = event.target.value;
    let user_data = user[id - 1];
    console.log(id);
    // console.log(user_data);
    // edit_modal.show();
    edit_id.value = user_data._id;
    edit_name.value = user_data.name;
    edit_email.value = user_data.email;
    edit_phone.value = user_data.phone;
    edit_company.value = user_data.company;
    edit_address.value = user_data.address;
  });
});
//  onclick event for user edit
edit_submit.addEventListener("click", () => {
  let id = edit_id.value - 1;

  const gen_value = edit_gender[0].checked
    ? "male"
    : edit_gender[1].checked
    ? "female"
    : "undefined";

  const editable_cell = table_body.children.item(id).children;
  editable_cell[1].innerText = edit_name.value;
  editable_cell[2].innerText = edit_phone.value;
  editable_cell[3].innerText = edit_email.value;
  editable_cell[4].innerText = edit_company.value;
  editable_cell[5].innerText = edit_address.value;
  editable_cell[6].innerText = gen_value;

  edit_modal.hide();
});

// ******************* Deleting user data  ******************

const delete_buttons = document.querySelectorAll(".delete_user");

delete_buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const id = event.target.value; // clicked button row id
    user.splice(id - 1, 1); // as index start from 0
    let parent_row = button.parentElement.parentElement;
    parent_row.remove();
  });
});
