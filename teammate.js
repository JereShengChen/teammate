let firstName = ["Dorie", "Stack", "Coder", "Emergency", "Test"];

let lastName = ["404", "怎么la ", "Squad", "Cooper&Co", "Group"];

function generateName() {
  let randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
  let randomLastName = lastName[Math.floor(Math.random() * lastName.length)];

  const generatedName = `${randomFirstName} ${randomLastName}`;
  document.getElementById("generatedName").textContent = generatedName;
}
