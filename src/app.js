/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "your"];
  let adj = [
    "great",
    "awesome",
    "special",
    "fantastic",
    "supercalifragilisticoexpialidoso"
  ];
  let noun = ["bauru", "spirit", "Lazarus", "brazuca", "dolphin"];
  let domainNames = [];
  let l = 0;

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        domainNames[l] = pronoun[i] + adj[j] + noun[k] + ".com";
        l++;
      }
    }
  }

  let domainNamesHtml = domainNames.map(name => {
    return '<li class="list-group-item alert-success mt-1">' + name + "</li>";
  });

  let domainNamesItem = document.getElementById("content");
  domainNamesItem.innerHTML = domainNamesHtml.join(" ");
};
