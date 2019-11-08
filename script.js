signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo","libra", "Scorpio", "Sagittarius", "Capricorn", ""];
messages = [ "this week may be busy busy, but don't let it get to you! Your determination will help you push it through and rise to success!",
    " being a strong communicator and holding that charm, new relationships may be coming your way. It's up to you whether they benefit or destroy you.",
    " your heart may be too good for your own good! But not this week, don't hesitate to help others, good karma will come your way.",
    " feeling overwhelmed? Perhaps try to get some time alone, you are incredibly independent! You don't need others to thrive and be great.",
    " don't hold back and chase your desires this week, follow your ambitions and a great fortune will come!",
    " despite your quick temper changes, be yourself and act freely. You will remain the gem in every eye!",
    " your known as the emotional one, don't let others take advantage of that. Watch out this week for some traitors.",
    " is math and science getting on your last nerve? Try relaxing with some arts, you may surprise yourself and find your inner creativity.",
    " think you're overthinking it? Nope, you are so close to reaching the conclusion, your analytical mind will never fail you.",
    " stay on your own path and much harmony will be coming your way. Go be great!",
    " the day will bring much intrigue to your life",
    " let your curiosity take you to wherever it leads, you may be surprised.",
    " this Date is Invalid"
]
images = ["img/aqs.jpg","img/psc.jpg","img/ari.jpg","img/taur.jpg","img/gem.jpg","img/canc.jpg","img/leo.jpg","img/virg.jpg","img/lira.jpg","img/Scp.png","img/sagit.jpg","img/capri.jpg","img/why.png"]

function star(month,day) {
    if (month == 0 && day >= 20 || month == 1 && day <= 18) {
        return 0
    }
    if (month == 1 && day >= 18 && day <= 28 || month == 2 && day <= 19) {
        return 1
    }
    if (month == 2 && day >= 20 || month == 3 && day <= 18) {
        return 2
    }
    if (month == 3 && day >= 19 && day <= 29 || month == 4 && day <= 19) {
        return 3
    }
    if (month == 4 && day >= 20 || month == 5 && day <= 19) {
        return 4
    }
    if (month == 5 && day >= 20 && day <= 29 || month == 6 && day <= 21) {
        return 5
    }
    if (month == 6 && day >= 22 || month == 7 && day <= 21) {
        return 6
    }
    if (month == 7 && day >= 22 || month == 8 && day <= 21) {
        return 7
    }
    if (month == 8 && day >= 22 && day <= 29 || month == 9 && day <= 21) {
        return 8
    }
    if (month == 9 && day >= 22 || month == 10 && day <= 20) {
        return 9
    }
    if (month == 10 && day >= 21 && day <= 29 || month == 11 && day <= 20) {
        return 10
    }
    if (month == 11 && day >= 21 || month == 0 && day <= 18) {
        return 11

    }
    if (month == 10 && day == 30 || month == 8 && day == 30 || month == 1 && day > 29 || month == 5 && day == 30) {
        return 12
    }
}
function onSubmit(){
    var currentDate = new Date()
    var currentMonth =currentDate.getMonth();
    var currentDay = currentDate.getDate()-1;
   var month = document.getElementById("Month").value;
   var day = document.getElementById("Day").value;
   var determineSign = star(month,day);
    if(month == currentMonth && day == currentDay) {
        var name = "Happy Birthday " + document.getElementById("name").value + "!"
    }else{
        var name = document.getElementById("name").value;
    }
    document.getElementById("sign").innerHTML = signs[determineSign];
    document.getElementById("message").innerHTML = name + messages[determineSign];
    document.getElementById("image").src = images[determineSign]

}