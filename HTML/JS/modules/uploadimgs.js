const firebaseConfig = {
    apiKey: "AIzaSyDEDLa9OCZhMmMqq1NzoshTU-HmaEP0Vyw",
    authDomain: "friendsnight-a7872.firebaseapp.com",
    databaseURL: "https://friendsnight-a7872-default-rtdb.firebaseio.com",
    projectId: "friendsnight-a7872",
    storageBucket: "friendsnight-a7872.appspot.com",
    messagingSenderId: "94101971637",
    appId: "1:94101971637:web:bc3a03a677aad9d28514fc",
    measurementId: "G-NWHTXVQSQL"
};

firebase.initializeApp(firebaseConfig);

var fileText=document.querySelector(".fileText");
var uploadPercentage=document.querySelector(".uploadPercentage");
var progress=document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;
var img = document.querySelector(".img");

function getFile(e)
{
fileItem= e.target.files[0];
fileName= fileItem.name;
fileText.innerHTML="fileName";
}

function uploadImage(){
    let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_changed", (snapshot)=>{
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML = percentVal+"%";
        progress.style.width=percentVal+"%";
    },(error)=>{
        console.log("Error is", error);
    },()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL",url);

            if(url != ""){
                img.setAttribute("src", url);
                img.style.display="block";
            }
        });
    })
}