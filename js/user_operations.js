export const create_row = (item) => {
  let row = document.createElement("tr");
  let id = document.createElement("td");
  let name = document.createElement("td");
  let gender = document.createElement("td");
  let company = document.createElement("td");
  let email = document.createElement("td");
  let phone = document.createElement("td");
  let address = document.createElement("td");
  let action = document.createElement("td");
  let button = document.createElement("button");
  // let isActive = document.createElement("td");

  id.innerText = item._id;
  name.innerText = item.name;
  gender.innerText = item.gender;
  company.innerText = item.company;
  email.innerText = item.email;
  phone.innerText = item.phone;
  address.innerText = item.address;
  button.innerText = "Edit";
  button.classList.add("btn", "btn-warning");
  button.setAttribute("value", item._id);
  button.setAttribute("onClick", `edit_user(${item._id})`);
  action.append(button);

  // row.appendChild(id);
  // row.appendChild(name);
  // row.appendChild(phone);
  // row.appendChild(email);
  // row.appendChild(company);
  // row.appendChild(address);
  // row.appendChild(gender);
  // row.appendChild(action);
  row.append(id, name, gender, company, email, phone, address, action);
  return row;
};

export function edit_user() {
  console.log("clicked");
}
