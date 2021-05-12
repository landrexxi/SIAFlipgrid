let img = null;

// para di naka sig balik og document.getElementById
function byId(id){
    return document.getElementById(id);
}

function tempImg(event){
    img = event;
}

function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function()
    {
    var output = byId('output_image');
    output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

function submit() {

    // declaring variable para magamit sa tanan and dili na balik2
    let fname = byId('firstname').value;
    let lname = byId('lastname').value;
    let age = byId('age').value;
    let motto = byId('motto').value;

    // check if empty NOTE: use trim kung one word ra imong value
    if( fname.trim() === "" || lname.trim() === "" || age.trim() === "" || motto.trim() === "" || img === null){
        alert('Empty Input!')
    } 
    else {
        if(age < 18){
            byId('age-status').innerHTML = 'A minor';
        }
        else if(age >= 18 && age < 60){
            byId('age-status').innerHTML = 'Not a minor';
        }
        else if(age > 59){
            byId('age-status').innerHTML = "Oldie but goodie";
        }
        preview_image(img);
        byId('FN').innerHTML = fname + " " + lname;
        //byId('LN').innerHTML = lname;
        byId('A').innerHTML =  age;
        byId('M').innerHTML =  motto;
    }

    


    


}
