/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "your"];
  let adj = [
    "supercalifragilisticoexpialidoso",
    "awesome",
    "special",
    "fantastic"
  ];
  let noun = ["bau", "spir", "Lazar", "brazu", "dolph"];
  let extensions = ["ru", "it", "us", "ca", "in"];
  let domainNames = [];
  let m = 0;

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in extensions) {
          domainNames[m] = pronoun[i] + adj[j] + noun[k] + "." + extensions[l];
          m++;
        }
      }
    }
  }

  let domainNamesHtml = domainNames.map(name => {
    if (
      name.includes("bau.ru") ||
      name.includes("spir.it") ||
      name.includes("Lazar.us") ||
      name.includes("brazu.ca") ||
      name.includes("dolph.in")
    ) {
      return (
        '<li class="list-group-item list-group-item-success mt-1">' +
        name +
        "</li>"
      );
    }

    return '<li class="list-group-item mt-1">' + name + "</li>";
  });

  let domainNamesItem = document.getElementById("content");
  domainNamesItem.innerHTML = domainNamesHtml.join(" ");
};
