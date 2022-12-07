"use strict";

const btn = document.querySelector('#button');
const URL = 'https://192.168.0.110:3000';

const handleBtnClick = async function() {
    let response = await fetch(URL);
    console.log(response)
}

btn.addEventListener('click', handleBtnClick);

