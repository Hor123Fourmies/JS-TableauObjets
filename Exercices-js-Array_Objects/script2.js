
var arrObj = [
    {"person" : "Mark",
        "age":25,
        "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill",
        "age":65,
        "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer",
        "age" : 34,
        "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}

];




var i=0;

$('#affichagePhoto').html('<img src =" '+arrObj[i].avatar+'">');
$('#affichageNom').html(arrObj[i].person);
$('#affichageAge').html(arrObj[i].age+ ' ans');

$('#boutonSuivant').on('click', function () {

    i=i+1;

    if (i === arrObj.length){
        //(i === 3)
        i=0
    }

    $('#affichagePhoto').html('<img src =" '+arrObj[i].avatar+'">');
    $('#affichageNom').html(arrObj[i].person);
    $('#affichageAge').html(arrObj[i].age);


});


$('#boutonPrecedent').on('click', function () {

    i=i-1;

    if (i === -1){
        i=arrObj.length-1
        // i= 2
    }


    $('#affichagePhoto').html('<img src =" '+arrObj[i].avatar+'">');
    $('#affichageNom').html(arrObj[i].person);
    $('#affichageAge').html(arrObj[i].age);


});
