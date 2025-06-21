aws_amplify.Amplify.configure({
    Auth: {
        region: 'us-east-1', // ✅ Your AWS region
        userPoolId: 'us-east-1_XXXXXXX', // 🔁 Replace with your Cognito User Pool ID
        userPoolWebClientId: 'XXXXXXXXXXXXXXXXXXXX' // 🔁 Replace with your App Client ID
    }
});


function loginHandler(lang, username, password, errorMsg) {
    if (username === 'admin' && password === '123456') {
        localStorage.setItem('currentUser', username);
        let seconds = 2;
        errorMsg.style.color = 'green';
        function updateMsg() {
            errorMsg.textContent = lang === 'zh'
                ? `登录成功！${seconds}秒后跳转...`
                : `Login successful! Redirecting in ${seconds} seconds...`;
        }
        updateMsg();
        let countdown = setInterval(function () {
            seconds--;
            if (seconds > 0) {
                updateMsg();
            } else {
                clearInterval(countdown);
                window.location.href = "inventory.html";
            }
        }, 1000);
    } else {
        errorMsg.textContent = lang === 'zh' ? '用户名或密码错误。' : 'Invalid username or password.';
        errorMsg.style.color = 'red';
    }
}

function login(lang) {
    let username, password, errorMsg;
    if (lang === 'zh') {
        username = document.getElementById('username-zh').value;
        password = document.getElementById('password-zh').value;
        errorMsg = document.getElementById('error-msg-zh');
    } else {
        username = document.getElementById('username-en').value;
        password = document.getElementById('password-en').value;
        errorMsg = document.getElementById('error-msg-en');
    }
    loginHandler(lang, username, password, errorMsg);
}