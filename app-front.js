window.onload = () => {
    const chat = document.getElementById('chat')
    const fetchFunc = (method, body) => {
        let obj = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: method
        }
        if (method === "POST") {
            obj.body = JSON.stringify(body)
        }
        return fetch("https://localhost:3000/message", obj
        )
            .then(res => res.json())
    }

    const motherFunck = (msg) => {
        let msgDiv = document.createElement("div")
        msgDiv.innerText = msg.nick
        chat.insertBefore(msgDiv, chat.firstChild)
        // msgDiv.className = "btn btn-lg btn-danger"
        msgDiv.className = "list-group-item d-flex justify-content-between align-items-center"
        let bTagMsg = document.createElement('b')
        msgDiv.appendChild(bTagMsg)
        // bTagMsg.className = "btn btn-secondary"
        bTagMsg.innerText = msg.message
        let timeStamp = document.createElement('b')
        msgDiv.appendChild(timeStamp)
        timeStamp.innerText = msg.time

    }

    const getMessages = async () => {
        let messages = await fetchFunc("GET", {})
        console.log(messages)
        for (var msg of messages) {
            motherFunck(msg)
        }
    }

    const sendMessage = async (body) => {
        let message = await fetchFunc("POST", body)
        motherFunck(message)
    }

    let send = document.getElementById("send")
    send.onclick = async function () {
        var nick = document.getElementById('nick')
        nick = nick.value
        var message = document.getElementById('msg')
        message = message.value

        await sendMessage({ nick, message });
    };
    getMessages();

}
