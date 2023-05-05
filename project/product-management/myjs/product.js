// // event gọi khi html đã load xong. Dùng để chạy các code js cần html load hết
// $( document ).ready(function() {
//     $('.image-preview-wrap').on('dragover',(e)=>{
//         e.preventDefault();
//     }).on('drop',(e)=>{
//         try {
//             let files = e.originalEvent.dataTransfer.files;
//             if(files.length > 0){
//                 $('#select-image').prop("files",files);
//                 showSelectFile(files[0]);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//         e.preventDefault();
//     })

//     $('#btn-add-product').on('click',(e)=>{
//         resetForm();
//     })
//     $('#select-image').on('change',(e)=>{
//         let files = $('#select-image').prop('files');
//         if(files.length > 0 ){
//             showSelectFile(files[0]);
//         }
//     })

// });

// function toggleSelectLabel(bShow){
//     if(bShow){
//         $('#label-content').show();
//         $('#image-preview').css('background', '');
//     }else{
//         $('#label-content').hide();
//     }
// }

// function showSelectFile(file){
//     let file_url = URL.createObjectURL(file);
//     $('#image-preview').css('background', `url(${file_url}) center center no-repeat `);
//     toggleSelectLabel(false);
// }

// function resetForm(){
//     $('#form-add-product').trigger('reset');
//     toggleSelectLabel(true);
// }

// function clickSave(){
    
// }