let softwareCompany = {
    name: "Tech Innovators Inc.",
    founder: "John Smith",
    yearFounded: 2005,
    products: ["TechApp", "InnoSuite", "DataGenius"]
  };

  // Access and display some properties
  let companyInfoDiv = document.getElementById("companyInfo");
  companyInfoDiv.innerHTML = `
    <h2>${softwareCompany.name}</h2>
    <p><strong>Founder:</strong> ${softwareCompany.founder}</p>
    <p><strong>Year Founded:</strong> ${softwareCompany.yearFounded}</p>
    <p><strong>Products:</strong> ${softwareCompany.products.join(", ")}</p>
  `;