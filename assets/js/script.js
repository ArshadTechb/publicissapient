// $(document).ready(function() {
//     $('#forhomepageabout').click(function() {
//         window.location.href = 'index.html#about';
//     });
//     $('#forhomepagespeakers').click(function() {
//         window.location.href = 'index.html#speakers';
//     });
//     $('#forhomepageawards').click(function() {
//         window.location.href = 'index.html#awards';
//     });
//     $('#forhomepageawardsfromimg').click(function() {
//         window.location.href = 'index.html#awards';
//     });
//     $('#forhomepagesponsor').click(function() {
//         window.location.href = 'index.html#sponsors';
//     });
//     $('#fromhomepagetoagendatabtwo_partyimage').click(function() {
//         window.location.href = 'agenda.html#home-tab';
//     });
//     $('#fromhomepagetoagendatabtwo_sumitimage').click(function() {
//         window.location.href = 'agenda.html#profile-tab';
//     });
//     $('#fromhomepagetoagendatabtwo_award').click(function() {
//         window.location.href = 'agenda.html?tab=daytwo';
//     });
//     $('#bookpass').click(function() {
//         window.location.href = 'registration.html#speakers';
//     });
// });


// const navLinks = document.querySelectorAll(".nav-link");


// navLinks.forEach((val) => {
//     val.addEventListener("click", (e) => {

//         console.log(e.target);
//         let cls = val.classList.contains("active");
//         if (cls) {
//             val.classList.remove("active");
//         }
//     });
// });


// const adt1 = document.querySelector(".agenda-day-1-target");
// const adt2 = document.querySelector(".agenda-day-2-target");
// if (adt1) {
//     adt1.addEventListener("click", () => {
//         window.location.href = `https://vertexgroup.ae/event/summitandawards2023/agenda.html#award-event`;
//     });
// }
// if (adt2) {
//     adt2.addEventListener("click", () => {
//         window.location.href = `https://vertexgroup.ae/event/summitandawards2023/agenda.html#award-event`;
//     });
// }














// window.addEventListener("load", () => {
//     function getUrlVars() {
//         var vars = [],
//             hash;
//         var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//         for (var i = 0; i < hashes.length; i++) {
//             hash = hashes[i].split('=');
//             vars.push(hash[0]);
//             vars[hash[0]] = hash[1];
//         }


//         return vars;
//     }

//     var me = getUrlVars()["tab"];

//     console.log(me);
//     if (me === "day2") {

//         document.getElementById("profile-tab").click();
//         // document.getElementById("profile-tab").classList.remove("agendadective");
//         // document.getElementById("profile-tab").classList.add("agendaactive");

//         // document.getElementById("home-tab").classList.remove("agendaactive");
//         // document.getElementById("home-tab").classList.add("agendadective");


//     }
// });


// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 50) {
//             $(".header").addClass("active");
//         } else {
//             //remove the background property so it comes transparent again (defined in your css)
//            $(".header").removeClass("active");
//         }
//     });
// });