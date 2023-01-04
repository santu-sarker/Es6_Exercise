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
const create_row = (item) => {
  let row = document.createElement("tr");
  let id = document.createElement("td");
  let name = document.createElement("td");
  let gender = document.createElement("td");
  let company = document.createElement("td");
  let email = document.createElement("td");
  let phone = document.createElement("td");
  let address = document.createElement("td");
  // let isActive = document.createElement("td");

  id.innerText = item._id;
  name.innerText = item.name;
  gender.innerText = item.gender;
  company.innerText = item.company;
  email.innerText = item.email;
  phone.innerText = item.phone;
  address.innerText = item.address;

  row.appendChild(id);
  row.appendChild(name);
  row.appendChild(phone);
  row.appendChild(email);
  row.appendChild(company);
  row.appendChild(address);
  row.appendChild(gender);

  return row;
};

let table = document.getElementById("table_body");

user.forEach((item) => {
  row = create_row(item);
  table.appendChild(row);
});
