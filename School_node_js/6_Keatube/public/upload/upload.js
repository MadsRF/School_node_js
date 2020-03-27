function validateForm(){
    return true;
}


function handleFileUpload(file){
    console.log(file);
    
    const file = file[0];
    const fileSize = file.size;
    const mimeArray = file.typesplit("/");
    const fileType = mimeArray = mimeArray[0];
    
}