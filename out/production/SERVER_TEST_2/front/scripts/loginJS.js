const host = window.location.host;
const url = host+"/login";

function login(result) {
    let successful = result.suc
    if (successful==='true'){
        window.location.href="/home"
    }else{
        alert("Логин и/или пароль не верные")
    }
}

function send(){
    let name = document.getElementById("name").value;
    let pass = document.getElementById("password").value;
    if(name.length>0&&pass.length>0){
        let readable = {
            name:name,
            password:pass
        };
        name.value=""
        pass.value=""

        exchanger("POST",url,readable)
            .then(result => login(result))
            .catch(err => alert(err));
    }else{
        alert("Логин или пароль пуст")
    }
}