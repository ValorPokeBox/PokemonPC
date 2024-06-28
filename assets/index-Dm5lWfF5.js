(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const a=async n=>{try{const e=await fetch(`https://pokeapi.co/api/v2/type/${n.type}/`);if(!e.ok)throw new Error("Failed to Pokemon from type");const t=await e.json();console.log(t);const c=t.pokemon,o=[];for(;o.length<20;)o.push(c[Math.floor(Math.random()*c.length)]);return o.map(s=>s.pokemon.url)}catch(e){return console.warn(e.message),null}},i=n=>{document.querySelector("#pokemon").innerHTML="",n.forEach(async e=>{try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to get pokemon data");const c=await t.json(),o=c.sprites.front_default,r=document.createElement("li");r.classList.add("pokemon"),r.id=c.id+1;const s=document.createElement("img");s.src=o,s.id=c.id,r.append(s),document.querySelector("#pokemon").append(r)}catch(t){return console.warn(t.message),null}})},l=async n=>{try{const e=await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);if(!e.ok)throw new Error("Failed to get pokemon data");return await e.json()}catch(e){return console.warn(e.message),null}},m=async n=>{n.preventDefault();const e=n.target,t=n.target.id;if(e.matches("img")){const c=await l(t);document.querySelector("#pokemon-name").textContent=c.name,document.querySelector("#pokemon-height").textContent=`Height: ${c.height} m`,document.querySelector("#pokemon-weight").textContent=`Weight: ${c.weight} kg`,document.querySelector("#pokemon-level").textContent=`Level: ${Math.floor(Math.random()*100)+1}`,document.querySelector("#pokemon-image").src=c.sprites.front_default,document.querySelector("#pokemon-image").alt=`This is an image of ${c.name}`,document.querySelector(".button-box").id=c.id}},u=async n=>{n.preventDefault();const e=new FormData(n.target),t=Object.fromEntries(e);console.log(t),console.log(t.type),document.querySelector("#box-title").textContent=`Box ${t.type}`,i(await a(t)),n.target.reset()},d=n=>{if(n.preventDefault(),n.target.matches(".release")&&(console.log("hi"),console.log(document.querySelector(".button-box").id),document.querySelector("#pokemon-showcase").innerHTML=` <h2 id="pokemon-name">Pikachu</h2>
          <img id="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="This is a image of Pikachu">`,document.querySelector(".pokemon-stats").innerHTML=`  <p id="pokemon-level">Level: 100</p>
          <p id="pokemon-height">Height: 4 m</p>
          <p id="pokemon-weight">Weight: 60 kg</p>
          <button class="release">Release</button>`,document.querySelector("ul").hasChildNodes())){let e=document.querySelector("ul").childNodes;console.log(e),console.log(Number(document.querySelector(".button-box").id)+1);for(const t of e)Number(t.id)===Number(document.querySelector(".button-box").id)+1&&t.remove()}},p=()=>{document.querySelector("#type-selector").addEventListener("submit",u),document.querySelector("#pokemon").addEventListener("click",m),document.querySelector(".button-box").addEventListener("click",d)};p();