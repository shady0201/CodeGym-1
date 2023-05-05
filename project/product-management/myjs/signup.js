let listUser = JSON.parse(localStorage.getItem('listUser')) || [];

function getUsersFromLocalStorage() {
    let storedListUser = localStorage.getItem('listUser');
    if (storedListUser) {
        return JSON.parse(storedListUser);
    }
    return [];
}

function register() {
    let usn = document.getElementById('usn').value;
    let pass = document.getElementById('pass').value;
    
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].username === usn) {
            document.getElementById('alert').innerHTML  = `<p><img src="../images/alert.jpeg"><span>Tài khoản ${usn} đã có người sử dụng.</span></p>`
            return;
        }
    }
        
    listUser.push({
        username: usn,
        password: pass
    });

    localStorage.setItem('listUser', JSON.stringify(listUser));
    
    empty();
  
    window.location.href = '/project/product-management/myhtml/finishregister.html';
}

document.getElementById('pass').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
      event.preventDefault(); 
      register(); 
    }
});

function empty(){
    document.getElementById('usn').value = '';
    document.getElementById('pass').value = '';
}


