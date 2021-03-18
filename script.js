'use strict'

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-bg')
const profile_name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500);

function getData () {
    header.innerHTML = `
        <img src="https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="red mustang" />`
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est!`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/26.jpg" alt="random user">`
    profile_name.innerHTML = `Katerina Doe`
    date.innerHTML = `Oct 08, 2020`

    animated_bgs.forEach( bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach( bg => bg.classList.remove('animated-bg-text'))
}