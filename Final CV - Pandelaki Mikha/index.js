function merah(){
    
    document.body.style.backgroundColor="white"
    document.body.style.color="blue"
    document.querySelector('.learn').style.backgroundColor="blue";
    document.querySelector('.learn').style.color="black";
    document.querySelector('.hobby').style.backgroundColor="blue";
    document.querySelector('.hobby').style.color="black";
    document.querySelector('.skills').style.backgroundColor="blue";
    document.querySelector('.skills').style.color="black";
    document.querySelector('.contact').style.backgroundColor="blue";
    document.querySelector('.contact').style.color="black";
    document.querySelector('.education').style.backgroundColor="blue";
    document.querySelector('.education').style.color="black";  
}

function nama(){
    let nama = prompt("Masukkan Nama");
    console.log("Nama anda adalah" + nama);
}
function email(){
    let email = prompt("Masukkan Email");
    console.log("Email = " + email);
}
function pesan(){
    let massage = prompt("Tinggalkan Deskripsi");
    console.log("Deskripsi = " + pesan);
}
function submit(){
    alert("Data anda tersimpan");
}