let listUser = JSON.parse(localStorage.getItem('listUser')) || [];

function getUsersFromLocalStorage() {
    let storedListUser = localStorage.getItem('listUser');
    if (storedListUser) {
        return JSON.parse(storedListUser);
    }
    return [];
}

function login(){
    let usn = document.getElementById('usn').value
    let pass = document.getElementById('pass').value
    
    listUser = getUsersFromLocalStorage();

    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].username == usn && listUser[i].password == pass){
            window.location.href = '/project/product-management/index.html'
            return;
        }  
    }
    document.getElementById('alert').innerHTML  = `<p><img src="../images/alert.jpeg"><span>Sai tài khoản hoặc mật khẩu.</span></p>`

}

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
      event.preventDefault(); 
      login(); 
    }
});




