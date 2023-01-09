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
  prev_li.classList.add("page-item", "paginate_prev", "disabled");
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

//  updated load_user
const load_user = (page) => {
  table_body.innerHTML = ""; // removing all child node of table
  current_position = page * per_page - per_page;

  let user_data = user.slice().reverse();
  user_data = user_data.slice(current_position, current_position + per_page);

  // inserting rows one by one into table body
  user_data.forEach((item) => {
    let row = create_row(item);
    table_body.appendChild(row);
  });

  // *********** edit reset section **************

  edit_buttons = document.querySelectorAll(".edit_user");

  edit_buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let id = event.target.value;
      let user_data = user[id - 1];
      edit_modal.show();
      edit_id.value = user_data._id;
      edit_name.value = user_data.name;
      edit_email.value = user_data.email;
      edit_phone.value = user_data.phone;
      edit_company.value = user_data.company;
      edit_address.value = user_data.address;
      edit_gender[0].value == user_data.gender // here edit_gender[0] == female , edit_gender[1] = male
        ? (edit_gender[0].checked = true) // marking male as checked
        : (edit_gender[1].checked = true);
    });
  });

  // delele reset section
  let delete_buttons = document.querySelectorAll(".delete_user");

  delete_buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let delete_id = document.getElementById("delete_id");
      delete_id.value = event.target.value;
      delete_modal.show();
    });
  });
};

//  **************** fetching all user information into table  **************

const table_body = document.getElementById("table_body");
const modal = new bootstrap.Modal("#user_modal");
const edit_modal = new bootstrap.Modal("#edit_modal");
let edit_buttons = document.querySelectorAll(".edit_user");

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

    for (let i = 1; i <= btn_parent.length - 2; i++) {
      //looping through each li and remove active class
      if (btn_parent[i].classList.contains("active")) {
        btn_parent[i].classList.remove("active");
      }
      btn.parentElement.classList.add("active"); //adding active class  to its parent li
    }

    current_page = Number(event.target.value);
    load_user(current_page);
    let pre_btn = document.getElementById("prev_btn");
    let nxt_btn = document.getElementById("next_btn");
    current_page == 1
      ? pre_btn.parentElement.classList.add("disabled")
      : pre_btn.parentElement.classList.remove("disabled");
    current_page == total_page
      ? nxt_btn.parentElement.classList.add("disabled")
      : nxt_btn.parentElement.classList.remove("disabled");
  });
});

//  previous page button event
const prev_btn = document.getElementById("prev_btn");

prev_btn.addEventListener("click", (event) => {
  let childens = document.querySelectorAll(".paginate_btn");
  next_btn.parentElement.classList.remove("disabled");
  if (current_page == 1) {
    prev_btn.parentElement.classList.add("disabled");
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
  let childens = document.querySelectorAll(".paginate_btn");
  prev_btn.parentElement.classList.remove("disabled");
  if (current_page == 4) {
    next_btn.parentElement.classList.add("disabled");
  } else {
    current_page += 1;
    load_user(current_page);

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

// ************ html entites for edit modal **************

const edit_id = document.getElementById("edit_id");
const edit_name = document.getElementById("edit_name");
const edit_email = document.getElementById("edit_email");
const edit_phone = document.getElementById("edit_phone");
const edit_company = document.getElementById("edit_company");
const edit_address = document.getElementById("edit_address");
const edit_gender = document.getElementsByName("edit_gender");

// *********** html entites for add user modal  ***********
let add_user = document.getElementById("user_submit");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let company = document.getElementById("company");
let address = document.getElementById("address");
let gender = document.getElementsByName("gender");

// ************* onclick event for user creation *************
add_user.addEventListener("click", () => {
  // const id = user[user.length - 1]._id + 1; // calculating last indexed user id +1
  const id = user.length + 1; // calculating last indexed user id +1

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

  let id_no = user.push(data);
  console.log(user, id);
  load_user(current_page);

  //clearing add user form info
  name.value = "";
  email.value = "";
  phone.value = "";
  company.value = "";
  address.value = "";
  gender[0].checked = false;
  gender[1].checked = false;
  modal.hide();
});

// ********  editing user data buuton event *******

const edit_submit = document.getElementById("edit_submit");
edit_buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let id = event.target.value;
    let user_data = user[id - 1];
    edit_modal.show();
    edit_id.value = user_data._id;
    edit_name.value = user_data.name;
    edit_email.value = user_data.email;
    edit_phone.value = user_data.phone;
    edit_company.value = user_data.company;
    edit_address.value = user_data.address;
    edit_gender[0].value == user_data.gender // here edit_gender[0] == female , edit_gender[1] = male
      ? (edit_gender[0].checked = true) // marking male as checked
      : (edit_gender[1].checked = true);
  });
});

//  ************* onclick event for user edit save button *********

edit_submit.addEventListener("click", (event) => {
  let id = edit_id.value;
  const gen_value = edit_gender[0].checked
    ? "male"
    : edit_gender[1].checked
    ? "female"
    : "undefined";

  let index = user.map((item) => item._id).indexOf(Number(id)); //checking user index
  if (index > -1) {
    user[index]._id = index + 1;
    user[index].name = edit_name.value;
    user[index].phone = edit_phone.value;
    user[index].email = edit_email.value;
    user[index].company = edit_company.value;
    user[index].address = edit_address.value;
    user[index].gender = gen_value;
  }

  edit_modal.hide();
  load_user(current_page);
});

// ******************* Deleting user data  ******************
let delete_buttons = document.querySelectorAll(".delete_user");
let delete_confirm = document.getElementById("delete_confirm");
const delete_modal = new bootstrap.Modal("#delete_modal");

delete_buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let delete_id = document.getElementById("delete_id");
    delete_id.value = event.target.value;
    delete_modal.show();
  });
});
delete_confirm.addEventListener("click", (event) => {
  let id = delete_id.value;

  let index = user.map((item) => item._id).indexOf(Number(id)); //checking user index
  if (index > -1) {
    // only splice array when item is found
    user.splice(index, 1); // 2nd parameter means remove one item only
  }
  load_user(current_page);
  delete_modal.hide();
});
