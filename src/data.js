//======================================
// Club members database
//======================================

const members = [
  {
    id: 1,
    name: "Mamun Mirdha",
    age: 28,
    location: "Dhaka",
    call: "01903211029",
    bloodGroup: "A+",
    lastDonate: 130,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Kaosar", donate_date: "2018-05-22" },
      { name: "Ajmot Ali", donate_date: "2019-05-23" },
      { name: "Keramot Ali", donate_date: "2023-01-20" },
    ],
  },
  {
    id: 2,
    name: "Ashik",
    age: 23,
    location: "Khulna",
    call: "01903211028",
    bloodGroup: "A-",
    lastDonate: 150,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Mamun", donate_date: "2018-03-26" },
      { name: "Ali", donate_date: "2019-01-23" },
      { name: "Kamrul", donate_date: "2023-05-20" },
    ],
  },
  {
    id: 3,
    name: "Jamal",
    age: 59,
    location: "josor",
    call: "01903211027",
    bloodGroup: "A+",
    lastDonate: 105,
    donorAvailable: ``,
    donationsHistory: [
      { name: "sohan", donate_date: "2014-09-22" },
      { name: "emon", donate_date: "2018-05-23" },
      { name: "Rubel", donate_date: "2023-01-20" },
    ],
  },
  {
    id: 4,
    name: "Ashik",
    age: 23,
    location: "Khulna",
    call: "01903211028",
    bloodGroup: "A-",
    lastDonate: 150,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Mamun", donate_date: "2018-03-26" },
      { name: "Ali", donate_date: "2019-01-23" },
      { name: "Kamrul", donate_date: "2023-05-20" },
    ],
  },
  {
    id: 5,
    name: "sabbir",
    age: 35,
    location: "mirpur",
    call: "01903211026",
    bloodGroup: "B+",
    lastDonate: 80,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Ashik", donate_date: "2018-03-26" },
    ],
  },
  {
    id: 6,
    name: "Rohim",
    age: 35,
    location: "josor",
    call: "01903211025",
    bloodGroup: "B+",
    lastDonate: 104,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Ashik", donate_date: "2018-03-26" },
    ],
  },
  {
    id: 7,
    name: "Jobbar",
    age: 40,
    location: "uttora",
    call: "01903211023",
    bloodGroup: "B-",
    lastDonate: 160,
    donorAvailable: ``,
    donationsHistory: [
      { name: "mamun", donate_date: "2012-03-26" },
    ],
  },
  {
    id: 8,
    name: "Riad",
    age: 40,
    location: "uttora",
    call: "01903211022",
    bloodGroup: "B-",
    lastDonate: 120,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Mahdi", donate_date: "2012-03-26" },
    ],
  },
  {
    id: 9,
    name: "Murad",
    age: 47,
    location: "uttora",
    call: "01903211021",
    bloodGroup: "O-",
    lastDonate: 103,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Mahdi", donate_date: "2012-03-26" },
    ],
  },
  {
    id: 10,
    name: "Jannat",
    age: 41,
    location: "Dhaka",
    call: "01903211001",
    bloodGroup: "O-",
    lastDonate: 123,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Mahdi", donate_date: "2012-03-26" },
    ],
  },
  {
    id: 11,
    name: "Aleya",
    age: 41,
    location: "CTG",
    call: "01903211002",
    bloodGroup: "O+",
    lastDonate: 103,
    donorAvailable: ``,
    donationsHistory: [
      { name: "mamun", donate_date: "2012-03-26" },
    ],
  },
  {
    id: 12,
    name: "Jiniya",
    age: 21,
    location: "Norshindi",
    call: "01903211003",
    bloodGroup: "O+",
    lastDonate: 90,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Aleya", donate_date: "2019-03-26" },
    ],
  },
  {
    id: 13,
    name: "Nadiya",
    age: 21,
    location: "Comilla",
    call: "01903211004",
    bloodGroup: "O-",
    lastDonate: 100,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Aleya", donate_date: "2019-03-26" },
    ],
  },
  {
    id: 14,
    name: "Joni",
    age: 28,
    location: "Norshindi",
    call: "01903211704",
    bloodGroup: "O+",
    lastDonate: 121,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Nadiya", donate_date: "2019-08-26" },
    ],
  },
  {
    id: 15,
    name: "Abir",
    age: 28,
    location: "Khulna",
    call: "01903211005",
    bloodGroup: "O-",
    lastDonate: 119,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Joni", donate_date: "2017-08-26" },
    ],
  },
  {
    id: 16,
    name: "Rabbani",
    age: 28,
    location: "Khulna",
    call: "01903211006",
    bloodGroup: "A-",
    lastDonate: 129,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Joni", donate_date: "2017-08-26" },
      { name: "Abir", donate_date: "2012-08-26" },
    ],
  },
  {
    id: 17,
    name: "Juyel",
    age: 32,
    location: "Rajshahi",
    call: "01903211009",
    bloodGroup: "A+",
    lastDonate: 109,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Rabbani", donate_date: "2012-08-26" },
      { name: "Joni", donate_date: "2018-08-26" },
    ],
  },
  {
    id: 18,
    name: "Jubayer",
    age: 44,
    location: "Sylhet",
    call: "01903211209",
    bloodGroup: "A+",
    lastDonate: 129,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Rabbani", donate_date: "2012-08-26" },
      { name: "Joni", donate_date: "2018-08-26" },
    ],
  },
  {
    id: 19,
    name: "Jakir",
    age: 55,
    location: "Jessore",
    call: "01903211509",
    bloodGroup: "A-",
    lastDonate: 126,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Jubayer", donate_date: "2018-08-26" },
      { name: "Rabbani", donate_date: "2019-08-26" },
    ],
  },
  {
    id: 20,
    name: "Sobuj",
    age: 21,
    location: "Barisal",
    call: "01943211509",
    bloodGroup: "A-",
    lastDonate: 119,
    donorAvailable: ``,
    donationsHistory: [
      { name: "Jubayer", donate_date: "2018-08-26" },
      { name: "Rabbani", donate_date: "2019-08-26" },
    ],
  },

























  
];
