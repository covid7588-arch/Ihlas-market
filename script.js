const BOT_TOKEN = '8542673395:AAFpI-9k9yoqx0t7CXUs2MnksW30x34zqWg';
const CHAT_ID = '8342658029';
let products = [
    { name: "Original Nike", price: 3500, cat: "selling", img: "https://picsum.photos/200" },
    { name: "Luxury Bag", price: 2800, cat: "selling", img: "https://picsum.photos/201" },
    { name: "Network Kit", price: 500, cat: "location", img: "https://picsum.photos/202" }
];

function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(tab + '-content').style.display = 'block';
}

function showSubCat(cat) {
    const list = document.getElementById('product-list');
    const filtered = products.filter(p => p.cat === cat);
    list.innerHTML = filtered.map(p => `
        <div class="product-card" style="background:white; margin:10px; padding:10px; border-radius:10px;">
            <img src="${p.img}" style="width:100%">
            <h4>${p.name}</h4>
            <p>${p.price} ETB</p>
            <div class="qty">
                <button onclick="changeQty(this, -1)" class="qty-btn">-</button>
                <span class="q-val">1</span>
                <button onclick="changeQty(this, 1)" class="qty-btn">+</button>
            </div>
            <button onclick="order('${p.name}', ${p.price}, this)" style="width:100%; background:blue; color:white; border:none; padding:10px; margin-top:5px;">እዘዝ</button>
        </div>
    `).join('');
}

function changeQty(btn, val) {
    let span = btn.parentElement.querySelector('.q-val');
    let current = parseInt(span.innerText) + val;
    if(current >= 1) span.innerText = current;
}

function order(name, price, btn) {
    let qty = btn.parentElement.querySelector('.q-val').innerText;
    let total = price * qty;
    let msg = `🛍️ ትዕዛዝ: ${name}\n🔢 ብዛት: ${qty}\n💰 ጠቅላላ: ${total} ETB`;
    
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: msg })
    });
    
    showTab('payment');
}

function sendTo(platform) {
    const link = platform === 'tg' ? "https://t.me/Ihlas_broker_bot" : "https://wa.me/251914717239";
    window.open(link);
}

function searchProducts() {
    let input = document.getElementById('search-input').value.toLowerCase();
    // ማጣሪያ ኮድ እዚህ ይገባል
}

window.onload = () => showSubCat('selling');
