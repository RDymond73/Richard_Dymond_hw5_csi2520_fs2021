const postCom = document.getElementById('#postComment');
const inputText = document.getElementsByClassName('#inputBox');

postComment.addEventListener('click', userCom); {
    userCom(ev);
}

btn.addEventListener('click', reply); {
    reply(ev);
}


function userCom(ev) {
    let y = document.createElement("p");
    let z = document.createTextNode(inputBox.value);
    let x = document.getElementById('inputBox').value;
    let replyBTN = document.createElement('Reply')

    y.appendChild(z);
    let a = document.getElementById("commentContainer");
    a.appendChild(y);
    y.style.textAlign="center";

    let btn = document.createElement("button");
    btn.innerHTML='Reply';
    btn.setAttribute("onclick", 'reply');
    btn.float='right';
    a.appendChild(btn);

    let txtA = document.createElement("input");
    txtA.createTextNode;
    txtA.setAttribute("type", "text");
    txtA.setAttribute("placeholder", "REPLY");
    txtA.id='userReply';
    a.appendChild(txtA);
    console.log(txtA.value);

    let t = function reply(ev) {
        let r = document.createElement("p");
        let i = document.createTextNode(txtA.value);
        let c = document.getElementsById('userReply').value;
        
        r.appendChild(i);
        a.appendChild(r);
        r.style.display='inline';
        console.log(c);
    }
}

