const BOT_TOKEN = '8542673395:AAFpI-9k9yoqx0t7CXUs2MnksW30x34zqWg';
const CHAT_ID = '8342658029';

function handleSignup() {
    const name = document.getElementById('full-name').value;
    const phone = document.getElementById('phone').value;
    if(name && phone) {
        document.getElementById('u-name').innerText = name;
        document.getElementById('u-phone').innerText = phone;
        document.getElementById('signup-page').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
        displayProducts();
    }
}

function showTab(tab) {
    ['home', 'menu', 'profile'].forEach(t => document.getElementById(t + '-content').style.display = 'none');
    document.getElementById(tab + '-content').style.display = 'block';
}

function shareApp() {
    alert("ሊንኩ ተገልብጧል!");
}

function logout() {
    if(confirm("መውጣት ይፈልጋሉ?")) location.reload();
}

function deleteAccount() {
    if(confirm("አካውንት ይጥፋ?")) location.reload();
}

function displayProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = `
        <div class="product-card" style="background:white; padding:10px; border-radius:10px;">
            <img src="https://picsum.photos/200" style="width:100%">
            <h4>Nike Shoe</h4>
            <p>3200 ETB</p>
            <button onclick="alert('ትዕዛዝ ተልኳል!')">እዘዝ</button>
        </div>`;
}
