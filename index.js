const container = document.querySelector(".container");
const mainHome = document.querySelector(".main-home");
const section_2 = document.querySelector(".section-two");
const innerMenu = document.querySelector(".inner-menu");
const descTitle = document.querySelector(".des-title");
const innerDesc = document.querySelector(".inner-desc");
const two = document.querySelector(".two");
const four = document.querySelector(".four");
const crew = document.querySelector(".crew");
const parentList = innerMenu.children;

const section = document.querySelector(".section");
const moon = document.querySelector("#moon");
const img = document.querySelector(".image-path");

const header = (document.querySelector(".header").style.visibility = "visible");
section_2.remove();
const home = document
  .querySelector(".home")
  .addEventListener("click", function () {
    container.append(mainHome);
    section_2.remove();
  });
const destination = document
  .querySelector(".destination")
  .addEventListener("click", function () {
    mainHome.remove();
    container.append(section_2);
  });

// moon.addEventListener("click", function () {
//   img.src = "mars-bg.png";
// });
crew.addEventListener("click", function () {});

parentList.item(0).addEventListener("click", function () {
  two.innerText = "384,400 KM";
  four.innerText = "3 DAYS";
  innerDesc.innerText =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  descTitle.innerText = "MOON";
  img.src = "mars.png";
});
parentList.item(1).addEventListener("click", function () {
  two.innerText = "225 MIL. KM";
  four.innerText = "9 MONTHS";
  innerDesc.innerText =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  descTitle.innerText = "MARS";
  img.src = "mars-bg.png";
});
parentList.item(2).addEventListener("click", function () {
  two.innerText = "628 MIL. KM";
  four.innerText = "3 YEARS";
  innerDesc.innerText =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  descTitle.innerText = "EUROPA";
  img.src = "europa.jpg";
});
parentList.item(3).addEventListener("click", function () {
  two.innerText = "1.6 BIL. KM";
  four.innerText = "7 YEARS";
  innerDesc.innerText =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  descTitle.innerText = "TITAN";
  img.src = "titan.jpg";
});
