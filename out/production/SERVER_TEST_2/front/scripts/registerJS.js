
const host = window.location.host;
const url = host+"/register";

function register(result) {
    let successful = result.suc
    if (successful==='true'){
        window.location.href="/login"
    }else{
        alert("Такой человек уже зарегистрирован")
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
            .then(result => register(result))
            .catch(err => alert(err));
    }else{
        alert("Логин или пароль пуст")
    }
}