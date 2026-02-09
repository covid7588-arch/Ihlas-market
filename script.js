const BOT_TOKEN = '8542673395:AAFpI-9k9yoqx0t7CXUs2MnksW30x34zqWg';
const CHAT_ID = '8342658029';

function sendOTP() {
    document.getElementById('otp-section').style.display = 'block';
    alert("የሙከራ OTP: 123456");
}

async function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('full-name').value;
    const phone = document.getElementById('phone').value;
    const message = `🚀 አዲስ ተመዝጋቢ ከ Ihlas Market\n👤 ስም: ${name}\n📞 ስልክ: +251${phone}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message })
    });
    alert("ምዝገባው ተሳክቷል! መረጃው ወደ ቴሌግራም ተልኳል።");
}
