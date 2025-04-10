document.addEventListener("DOMContentLoaded", () => {
    const menuList = document.getElementById("menu-list");
    const orderList = document.getElementById("order-list");
    const form = document.getElementById("order-form");
  
    let order = JSON.parse(localStorage.getItem("order")) || [];
  
    // Hent menyen
    fetch('./cafe.json')
      .then(res => res.json())
      .then(data => {
        renderMenu(data);
      })
      .catch(err => console.error("Feil med meny:", err));
  
    function renderMenu(menu) {
      menu.forEach(item => {
        let targetList;
  
        // Bestem hvilken liste elementet skal legges til basert på kategori
        if (item.category === "drikke") {
          targetList = document.getElementById("drikke-list");
        } else if (item.category === "bakverk") {
          targetList = document.getElementById("bakverk-list");
        } else if (item.category === "mat") {
          targetList = document.getElementById("mat-list");
        }
  
        if (targetList) {
          const li = document.createElement("li");
          li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <h4>${item.name}</h4>
            <p>${item.price} NOK</p>
            <button onclick='addToOrder(${JSON.stringify(item)})'>Legg til</button>
          `;
          targetList.appendChild(li);
        }
      });
    }
  
    window.addToOrder = (item) => {
      order.push(item);
      localStorage.setItem("order", JSON.stringify(order));
      updateOrderList();
    };
  
    window.removeFromOrder = (index) => {
      order.splice(index, 1);
      localStorage.setItem("order", JSON.stringify(order));
      updateOrderList();
    };
  
    function updateOrderList() {
      orderList.innerHTML = "";
      order.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.name} - ${item.price} NOK
          <button onclick="removeFromOrder(${index})">Fjern</button>
        `;
        orderList.appendChild(li);
      });
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
  
      if (!name || !phone || order.length === 0) {
        alert("Fyll ut navn og telefon, og legg til minst én vare.");
        return;
      }
  
      alert(`Takk for din bestilling, ${name}! Vi ringer deg på ${phone}.`);
      order = [];
      localStorage.removeItem("order");
      updateOrderList();
      form.reset();
    });
  
    updateOrderList();
  });
      