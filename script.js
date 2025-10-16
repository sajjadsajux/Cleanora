const pricingPlans = [
  {
    name: "FOR BASIC",
    price: "$450",
    description: "We believe in honest, upfront pricing with no hidden charges. Choose a plan that suits your needs—whether it's a one-time deep clean or a regular maintenance schedule.",
    features: ["1 Bedroom + 1 Bathroom", "Floor sweeping & mopping", "Dusting of surfaces", "Basic kitchen cleaning", "Trash removal"],
    bgColor: "#F1F8FF", // light blue background
    btnColor: "#2B7FFC", // deep blue button
  },
  {
    name: "STANDARD",
    price: "$750",
    description: "We believe in honest, upfront pricing with no hidden charges. Choose a plan that suits your needs—whether it's a one-time deep clean or a regular maintenance schedule.",
    features: ["2 Bedrooms + 2 Bathrooms", "Full floor cleaning", "Detailed dusting", "Full kitchen clean", "Trash removal"],
    bgColor: "#F6FCF8", // light green background
    btnColor: "#3CC47C", // dark green button
  },
  {
    name: "PREMIUM",
    price: "$999",
    description: "We believe in honest, upfront pricing with no hidden charges. Choose a plan that suits your needs—whether it's a one-time deep clean or a regular maintenance schedule.",
    features: ["3 Bedrooms + 3 Bathrooms", "Deep floor sanitizing", "Furniture polishing", "Advanced kitchen clean", "Trash removal"],
    bgColor: "#F1F8FF", // light yellow background
    btnColor: "#2B7FFC", // gold button
  },
];

const pricingContainer = document.getElementById("pricingCards");

pricingPlans.forEach((plan) => {
  const card = document.createElement("div");
  card.classList.add("pricing-card");

  // set CSS variables for each card
  card.style.setProperty("--bg-color", plan.bgColor);
  card.style.setProperty("--btn-color", plan.btnColor);

  card.innerHTML = `
  <div class="card-Main" >
    <div class="card-top">
      <h3>${plan.name}</h3>
      <p class="price">${plan.price} <span>/service</span></p>
      <p class="description">${plan.description}</p>
    </div>
    <div class="card-content">
      <ul>
        ${plan.features.map((feature) => `<li><i class="fa-regular fa-circle-check"></i> ${feature}</li>`).join("")}
      </ul>
      <button class="btn-plan">Get Started</button>
    </div>
    </div>
  `;

  pricingContainer.appendChild(card);
});
