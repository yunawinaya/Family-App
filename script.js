class FamilyMember {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  addAge() {
    this.age += 1;
    reloadFamilyMembers();
  }
  changeName() {
    const newName = prompt("Enter the new name:");
    if (newName) {
      this.name = newName;
      reloadFamilyMembers();
    }
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const name = document.querySelector("#name").value;
  const age = parseInt(document.querySelector("#age").value);
  const gender = document.querySelector("#gender").value;
  const familyMember = new FamilyMember(name, age, gender);
  familyMembers.push(familyMember);
  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.querySelector("#familyMembers").tBodies[0];
  familyList.innerHTML = "";

  for (const familyMember of familyMembers) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${familyMember.name}</td>
      <td>${familyMember.age}</td>
      <td>${familyMember.gender}</td>
      <td>
        <button onclick="familyMembers[${familyMembers.indexOf(familyMember)}].addAge()">Add Age</button>
        <button onclick="familyMembers[${familyMembers.indexOf(familyMember)}].changeName()">Change Name</button>
      </td>
    `;
    familyList.appendChild(row);
  }
}

