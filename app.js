const imagePreview = document.getElementById('img-preview');
 const imageuploader = document.getElementById('img-uploader')
const imageuploadbar = document.getElementById('img-upload-bar')
 
 const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/sucredigital/image/upload'
 const CLOUDINARY_UPLOAD_PRESET = 'sucredigital'

 imageuploader.addEventListener('change', async (e) => {
  const file = e.target.files[0];

  const formData = new FormData();
  formData.append('file',file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  
const res = await axios.post(CLOUDINARY_URL, formData, {
      headers: {
        'content-type': 'multipart/form-Data'
    },
    onUploadProgress(e) {
        console.log(Math.round((e.loaded * 100) / e.total));
        const progress = (e.loaded * 100) / e.total;
        imageuploadbar.setAttribute('value', progress);
    }
  })
    console.log(res);
    imagePreview.src = res.data.secure_url;
 }) 
