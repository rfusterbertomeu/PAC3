/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
/**
 * Write any other JavaScript below
 */
const enllac = document.getElementsByTagName("a");

Array.from(enllac).forEach(function (e) {
  e.addEventListener("click", function () {
    const target = e.getAttribute("data-target");
    if (target) {
      mostra(target);
    }
  });
});

function mostra(id) {
  document.querySelectorAll(".pagina").forEach(function (pagina) {
    pagina.style.display = "none";
  });

  document.getElementById(id).style.display = "flex";
  document.getElementById(id).style.flexDirection = "column";
  document.getElementById(id).style.alignItems = "center";
}
