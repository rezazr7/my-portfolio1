const menuData = [
    { title: "اسپرسو", desc: "قهوه غلیظ ایتالیایی", price: 50000, category: "coffee" },
    { title: "کاپوچینو", desc: "با فوم شیر", price: 75000, category: "coffee" },
    { title: "لاته", desc: "ملایم و خوش‌عطر", price: 70000, category: "coffee" },
    { title: "چیزکیک", desc: "با تاپینگ توت‌فرنگی", price: 85000, category: "dessert" },
    { title: "براونی شکلاتی", desc: "گرم با بستنی", price: 90000, category: "dessert" },
    { title: "آیس آمریکانو", desc: "قهوه سرد کلاسیک", price: 60000, category: "cold" },
    { title: "شیک موز", desc: "سرد و خوشمزه", price: 70000, category: "cold" },
    { title: "دمنوش بابونه", desc: "آرامش‌بخش و طبیعی", price: 55000, category: "tea" },
    { title: "چای ماسالا", desc: "چای ادویه‌دار هندی", price: 65000, category: "tea" }
];

let cart = [];

function renderMenu(category) {
    const container = document.getElementById("menuItems");
    container.innerHTML = "";
    const items = menuData.filter(item => item.category === category);
    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <span>${item.price.toLocaleString("fa-IR")} تومان</span>
            <button onclick='addToCart(${JSON.stringify(item)})'>افزودن</button>
        `;
        container.appendChild(div);
    });
}

function filterMenu(cat) {
    document.querySelectorAll(".category").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    renderMenu(cat);
}

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const total = document.getElementById("totalPrice");
    cartItems.innerHTML = "";
    let sum = 0;
    cart.forEach(i => {
        const li = document.createElement("li");
        li.textContent = i.title + " - " + i.price.toLocaleString("fa-IR") + " تومان";
        cartItems.appendChild(li);
        sum += i.price;
    });
    total.textContent = sum.toLocaleString("fa-IR");
}

// بارگزاری اولیه
document.addEventListener("DOMContentLoaded", () => {
    renderMenu("coffee");
});