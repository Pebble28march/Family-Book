var images = ["106-1066041_clip-art-little-png-for-animated-little-girl-removebg-preview.png  ", "2521584-removebg-preview (1).png", "cartoon-old-woman-cane-260nw-1376524529-removebg-preview.pngcartoon-old-woman-cane-260nw-1376524529-removebg-preview.png", "depositphotos_27529621-stock-illustration-playful-kitten-removebg-preview.png"];
var names = ["Shreshta, Theepa, Soundari, Pebble"];
var i = 0;
function update(){
    i++
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    docuument.getElementById("family_member_image").src = updated = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    
}