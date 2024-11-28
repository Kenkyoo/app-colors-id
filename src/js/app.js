import axios from "axios";
import $ from "jquery";
import 'animate.css';
import ClipboardJS from "clipboard";
var _ = require('lodash');

axios.get('https://server-colors-z88i.onrender.com/')
  .then(function (response) {
    $('#submit').click(function() {
      search(response.data)
    })
  })

function search(items) {
  const searchTerm = $('#term').val().trim();
  const capitalizedTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase();

  // Buscar por nombre con capitalización adecuada
  const names = _.find(items, item => item.name === capitalizedTerm);
  
  // Buscar por hexadecimal sin modificar
  const hexs = _.find(items, item => item.hex.toLowerCase() === searchTerm);
    names ? showResults(names) : showResults(hexs);
  };

  function showResults(result) {
    let name = result.name;
    let hex = result.hex;
    
    // Actualizar texto del color y su color
    $("#name-color").text("El nombre del color es: " + name);
    $("#hex-color").text(hex).css("color", hex);
    
    // Cambiar el color de fondo
    $('body').css('background-color', hex);
  
    // Remover la clase de animación para reiniciar
    $('body').removeClass("animate__animated animate__headShake");
  
    // Forzar reflujo para reiniciar la animación
    void document.body.offsetWidth;
  
    // Volver a agregar la clase de animación
    $('body').addClass("animate__animated animate__headShake");
  }
  new ClipboardJS('.btnClip');