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
  let noun = ["costco", "bauru", "spirit", "Lazarus", "brazuca", "dolphin"];
  let domainName = [];
  let l = 0;

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        domainName[l] = pronoun[i] + adj[j] + noun[k] + ".com";
        l++;
      }
    }
  }

  for (let m in domainName) {
    document.getElementById("content").innerHTML = domainName[m];
    console.log(domainName[m]);
  }
};
