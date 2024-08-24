<!DOCTYPE html><html><head><title>Thanks for your order!</title><script src="https://kit.fontawesome.com/960d33c629.js" crossorigin="anonymous"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><style>#success {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      height: 100svh;
      height: 100dvh;
      width: 100%;
    }
    i {
      background-color: green;
      border-radius: 50%;
      padding: 40x;
      padding: 25px;
      color: #fff;
      font-size: 40px;
      margin-bottom: 20px;
    }
    .msg {
      font-size: 15px;
      text-align: center;
      padding: 0px 20px;
    }</style><script src="/dist/universala65ac2dbc01a46adc0ce.js"></script></head><body><section id="success" class="hidden"><i class="fa-solid fa-check"></i><p class="msg">We appreciate your business! A confirmation email will be sent to <span id="customer-email"></span>.</p></section><script>initialize();

        async function initialize() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');
        const username = urlParams.get('username');
        const itemid = urlParams.get('itemid');
        const itemidArr = itemid.split(",");
        itemidArr.pop();
        const response = await fetch("/data/stripe/status.php", {
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ session_id: sessionId, username, itemidArr }),
        });
        const session = await response.json();

        if (session.status == 'open') {
            window.replace('http://localhost:4242/checkout.html')
        } else if (session.status == 'complete') {
            document.getElementById('success').classList.remove('hidden');
            document.getElementById('customer-email').textContent = session.customer_email

            localStorage.clear(); // reset cart
            window.location.href = '/' + username // redirect to usrename public page
        }
        }</script></body></html>