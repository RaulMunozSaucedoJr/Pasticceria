!function(){"use strict";document.addEventListener("DOMContentLoaded",function(){$(document).ready(function(){$(" .sticky-top").click(function(){$(".menu").slideToggle(400)})});var o=$("#button");if($(window).scroll(function(){$(window).scrollTop()>300?o.addClass("show"):o.removeClass("show")}),o.on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},"300")}),document.querySelector("#mapa")){var e=L.map("mapa").setView([-33.437057,-70.64786],15);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),L.marker([19.45943,-99.08557]).addTo(e).bindPopup("DELICIAS DANSS").openPopup(),e.locate({setView:!0,maxZoom:15}),e.on("locationfound",function(o){var t=o.accuracy;L.marker(o.latlng).addTo(e).bindPopup("Se encuentra a "+t+" metros de DELICIAS DANSS").openPopup(),L.circle(o.latlng,t).addTo(e)})}o=$("#button");$(window).scroll(function(){$(window).scrollTop()>300?o.addClass("show"):o.removeClass("show")}),o.on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},"300")}),window.addEventListener("scroll",function(){let o=window.pageYOffset;document.querySelector("main").style.backgroundPosition=`-${.25*o}px -100px`}),$('[data-fancybox="gallery"]').fancybox({buttons:["slideShow","share","zoom","fullScreen","close","thumbnails","download","arrows"]}),document.querySelectorAll(".accordion-item-header").forEach(o=>{o.addEventListener("click",e=>{o.classList.toggle("active");const t=o.nextElementSibling;o.classList.contains("active")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight=0})})})}();