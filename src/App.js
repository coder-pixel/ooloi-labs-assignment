import './App.css';
import Table from './Table';

function App() {
  const data = [
    {
      "person": {
        "name": "Prerna Jha",
        "avatar": "images/profile.png"
      },
      "city": "Mumbai",
      "email": "prernajha@gmail.com",
      "joiningDate": "12/02/2018",
      "role": "UI Designer"
    },
    {
      "person": {
        "name": "Rukmini Pandit",
        "avatar": "images/profile.png"
      },
      "city": "Delhi",
      "email": "rukminipandit@gmail.com",
      "joiningDate": "09/02/2022",
      "role": "Front-end Developer"
    },
    {
      "person": {
        "name": "Nandhini Lingesh",
        "avatar": "images/profile.png"
      },
      "city": "Delhi",
      "email": "nandhinilingesh@gmail.com",
      "joiningDate": "30/06/2019",
      "role": "UX Designer"
    },
    {
      "person": {
        "name": "Ankit Singh",
        "avatar": "images/profile.png"
      },
      "city": "Kolkata",
      "email": "ankitsingh@gmail.com",
      "joiningDate": "11/11/2017",
      "role": "Backend Developer"
    },
    {
      "person": {
        "name": "Amith Kumar",
        "avatar": "images/profile.png"
      },
      "city": "Mumbai",
      "email": "amithkumar@gmail.com",
      "joiningDate": "24/07/2020",
      "role": "Front-end Developer"
    },
    {
      "person": {
        "name": "Shalini Singhla",
        "avatar": "images/profile.png"
      },
      "city": "Mumbai",
      "email": "shalinisinghla@gmail.com",
      "joiningDate": "17/09/2017",
      "role": "UX Designer"
    },
    {
      "person": {
        "name": "Abhishek Singh",
        "avatar": "images/profile.png"
      },
      "city": "Kolkata",
      "email": "abhisheksingh@gmail.com",
      "joiningDate": "01/06/2017",
      "role": "Front-end Developer"
    }
  ]

  // configuration options : 
  // 1. values: "name", "city", "email", "joining", "role"
  // 2. pass one or more options as an array value to a table to display only that columns
  // 3. if do not pass any option then whole table would be displayed

  const tableConfig1 = {
    allowedColumns: ["name", "role", "email"],
    allowedSorting: ["name"]
  }

  const tableConfig2 = {
    allowedColumns: ["email", "joining", "role"],
    allowedSorting: ["role", "joining"]
  }

  const tableConfig3 = {
    allowedColumns: ["name", "role", "city", "joining"],
    allowedSorting: ["role", "city"]
  }

  return (
    <div className="app">
      <Table data={data} config={tableConfig1} />
      <Table data={data} config={tableConfig2} />
      <Table data={data} config={tableConfig3} />
    </div>
  );
}

export default App;
