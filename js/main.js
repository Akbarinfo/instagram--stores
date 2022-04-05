const elListBox = document.querySelector('#listbox')

function createElements (...array) {
  return array.map(el => {
    return document.createElement(el)
  })
}


infoArr.forEach((item, index) => {
  if(index < 5) {
    let [li, imgbox, center, headdiv, footerdiv, video, img] = createElements('li', 'div', 'div', 'div', 'div', 'video', 'img')
    li.className = 'insta__item'
    li.setAttribute('id', item.id)
    imgbox.setAttribute('onclick', 'funActiv(event)')
    imgbox.className = 'insta__imgbox'

    //head part
    headdiv.className = 'insta__head none'
    headdiv.innerHTML = `
      <div class="insta__hrbox">
        <div class="hrone"></div>
        <div class="hrtwo"></div>
        <div class="hrthree"></div>
      </div>
      <div class="insta__head-box">
        <div class="insta__head-flex">
        <img src="${item.avatar}" alt="" class="insta__avatar">
        <h2 class="insta__name">${item.title}</h2>
        <span class="insta__time">25 h</span>
        </div>
        <div class="insta__iconbox">
        <i class='bx bx-play insta__icon-head'></i>
        <i class='bx bxs-volume-mute insta__icon-head'></i>
        <i class='bx bx-dots-horizontal-rounded insta__icon-head'></i>
        </div>
      </div>
    `

    //Center
    center.className = 'insta__center'
    center.innerHTML = `
    <img class="insta__center-img" src="${item.avatar}" alt="img">
    `

    //footer part
    footerdiv.className = 'insta__footer-box none'
    footerdiv.innerHTML = `
      <input class="insta__input" type="text" placeholder="Reply to" required>
      <i class='bx bxl-telegram insta__footer-icon'></i>
    `
    //media part video & img
    video.setAttribute('width', '100%')
    video.setAttribute('height', '100%')
    video.setAttribute('controls', '')

    img.className = 'insta__img'
    img.setAttribute('alt', 'img')

    if(item.file[0].includes('.mp4')) {
      video.innerHTML = `
        <source src="${item.file[0]}" type="video/mp4">
      `
      imgbox.appendChild(video)

    } else {
      img.setAttribute('src', item.file[0])
      imgbox.appendChild(img)
    }



    imgbox.appendChild(headdiv)
    imgbox.appendChild(center)
    imgbox.appendChild(footerdiv)
    li.appendChild(imgbox)
    elListBox.appendChild(li)
  }
})

let elItem = document.querySelectorAll('.insta__item')
let elImgBox = document.querySelectorAll('.insta__imgbox')
let elHeadBox = document.querySelectorAll('.insta__head')
let elFooterBox = document.querySelectorAll('.insta__footer-box')
let elCenterBox = document.querySelectorAll('.insta__center')


elImgBox[0].addEventListener('click', () => {
  elListBox.style.transform = "translateX(400px)";
  elCenterBox[0].className = 'none'
  elCenterBox[1].className = 'insta__center block'
  elCenterBox[2].className = 'insta__center block'
  elCenterBox[3].className = 'insta__center block'
  elCenterBox[4].className = 'insta__center block'
  elImgBox[0].className = 'insta__imgbox active'
  elHeadBox[0].className = 'insta__head block'
  elImgBox[1].className = 'insta__imgbox'
  elImgBox[2].className = 'insta__imgbox'
  elImgBox[3].className = 'insta__imgbox'
  elImgBox[4].className = 'insta__imgbox'
  elHeadBox[0].className = 'insta__head block'
  elHeadBox[1].className = 'insta__head none'
  elHeadBox[2].className = 'insta__head none'
  elHeadBox[3].className = 'insta__head none'
  elHeadBox[4].className = 'insta__head none'
  elFooterBox[0].className = 'insta__footer-box block'
  elFooterBox[1].className = 'insta__footer-box none'
  elFooterBox[2].className = 'insta__footer-box none'
  elFooterBox[3].className = 'insta__footer-box none'
  elFooterBox[4].className = 'insta__footer-box none'
})

elImgBox[1].addEventListener('click', () => {
  elListBox.style.transform = "translateX(200px)";
  elCenterBox[0].className = 'insta__center block'
  elCenterBox[1].className = 'none'
  elCenterBox[2].className = 'insta__center block'
  elCenterBox[3].className = 'insta__center block'
  elCenterBox[4].className = 'insta__center block'
  elImgBox[0].className = 'insta__imgbox'
  elImgBox[1].className = 'insta__imgbox active'
  elImgBox[2].className = 'insta__imgbox'
  elImgBox[3].className = 'insta__imgbox'
  elImgBox[4].className = 'insta__imgbox'
  elHeadBox[0].className = 'insta__head none'
  elHeadBox[1].className = 'insta__head block'
  elHeadBox[2].className = 'insta__head none'
  elHeadBox[3].className = 'insta__head none'
  elHeadBox[4].className = 'insta__head none'
  elFooterBox[0].className = 'insta__footer-box none'
  elFooterBox[1].className = 'insta__footer-box block'
  elFooterBox[2].className = 'insta__footer-box none'
  elFooterBox[3].className = 'insta__footer-box none'
  elFooterBox[4].className = 'insta__footer-box none'
})

elImgBox[2].addEventListener('click', () => {
  elListBox.style.transform = "translateX(0px)";
  elCenterBox[0].className = 'insta__center block'
  elCenterBox[1].className = 'insta__center block'
  elCenterBox[2].className =  'none'
  elCenterBox[3].className = 'insta__center block'
  elCenterBox[4].className = 'insta__center block'
  elImgBox[0].className = 'insta__imgbox'
  elImgBox[1].className = 'insta__imgbox'
  elImgBox[2].className = 'insta__imgbox active'
  elImgBox[3].className = 'insta__imgbox'
  elImgBox[4].className = 'insta__imgbox'
  elHeadBox[0].className = 'insta__head none'
  elHeadBox[1].className = 'insta__head none'
  elHeadBox[2].className = 'insta__head block'
  elHeadBox[3].className = 'insta__head none'
  elHeadBox[4].className = 'insta__head none'
  elFooterBox[0].className = 'insta__footer-box none'
  elFooterBox[1].className = 'insta__footer-box none'
  elFooterBox[2].className = 'insta__footer-box block'
  elFooterBox[3].className = 'insta__footer-box none'
  elFooterBox[4].className = 'insta__footer-box none'

})

elImgBox[3].addEventListener('click', () => {
  elListBox.style.transform = "translateX(-200px)";
  elCenterBox[0].className = 'insta__center block'
  elCenterBox[1].className = 'insta__center block'
  elCenterBox[2].className =  'insta__center block'
  elCenterBox[3].className = 'none'
  elCenterBox[4].className = 'insta__center block'
  elImgBox[0].className = 'insta__imgbox'
  elImgBox[1].className = 'insta__imgbox'
  elImgBox[2].className = 'insta__imgbox'
  elImgBox[3].className = 'insta__imgbox active'
  elImgBox[4].className = 'insta__imgbox'
  elHeadBox[0].className = 'insta__head none'
  elHeadBox[1].className = 'insta__head none'
  elHeadBox[2].className = 'insta__head none'
  elHeadBox[3].className = 'insta__head block'
  elHeadBox[4].className = 'insta__head none'
  elFooterBox[0].className = 'insta__footer-box none'
  elFooterBox[1].className = 'insta__footer-box none'
  elFooterBox[2].className = 'insta__footer-box none'
  elFooterBox[3].className = 'insta__footer-box block'
  elFooterBox[4].className = 'insta__footer-box none'

})

elImgBox[4].addEventListener('click', () => {
  elListBox.style.transform = "translateX(-500px)";
  elCenterBox[0].className = 'insta__center block'
  elCenterBox[1].className = 'insta__center block'
  elCenterBox[2].className =  'insta__center block'
  elCenterBox[3].className = 'insta__center block'
  elCenterBox[4].className = 'none'
  elImgBox[0].className = 'insta__imgbox'
  elImgBox[1].className = 'insta__imgbox'
  elImgBox[2].className = 'insta__imgbox'
  elImgBox[3].className = 'insta__imgbox'
  elImgBox[4].className = 'insta__imgbox active'
  elHeadBox[0].className = 'insta__head none'
  elHeadBox[1].className = 'insta__head none'
  elHeadBox[2].className = 'insta__head none'
  elHeadBox[3].className = 'insta__head none'
  elHeadBox[4].className = 'insta__head block'
  elFooterBox[0].className = 'insta__footer-box none'
  elFooterBox[1].className = 'insta__footer-box none'
  elFooterBox[2].className = 'insta__footer-box none'
  elFooterBox[3].className = 'insta__footer-box none'
  elFooterBox[4].className = 'insta__footer-box block'
})
