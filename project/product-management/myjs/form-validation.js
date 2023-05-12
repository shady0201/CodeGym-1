Validator({
    form : '#form-1',
    errorSelector : '.form-message',
    rules: [
      isRequired('#usn', 'Vui lòng nhập tên đầy đủ'),
      isEmail('#email', 'Vui lòng nhập địa chỉ Email'),
      pwMinLength('#password', 6, 'Mật khẩu tối thiểu 6 ký tự'),
      isConfirmed('#password-confirmation', function() {
        return document.querySelector('#form-1 #password').value;
      }, 'Mật khẩu nhập lại không chính xác')
    ]
  })    