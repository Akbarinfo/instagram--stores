const elListBox = document.querySelector('#listbox')

function createElements (...array) {
  return array.map(el => {
    return document.createElement(el)
  })
}

infoArr.forEach((item, index )=> {

  if(index < 5) {

  let [li, boxdiv, headdiv, imgdiv, footerdiv, prevbtn, nextbtn, previcon, nexticon] = createElements('li', 'div', 'div', 'div', 'div', 'button', 'button', 'i', 'i');

  li.className = 'insta__itembox';
  // li.setAttribute('id', 'imgbox')

  prevbtn.className = 'insta__prevbtn'
  nextbtn.className = 'insta__nextbtn'

  previcon.className = 'bx bx-chevron-left insta__iconbtns'
  nexticon.className = 'bx bx-chevron-right insta__iconbtns'

  boxdiv.className = 'insta__box'
  headdiv.className = 'insta__head'
  headdiv.innerHTML = `
    <div class="insta__head-flex">
    <img src="${item.file[0]}" alt="" class="insta__avatar">
    <h2 class="insta__name">toshmat_offical</h2>
    <span class="insta__time">25 h</span>
    </div>
    <div class="insta__iconbox">
    <i class='bx bx-play insta__icon-head'></i>
    <i class='bx bxs-volume-mute insta__icon-head'></i>
    <i class='bx bx-dots-horizontal-rounded insta__icon-head'></i>
    </div>
  `
  imgdiv.className = 'insta__imgbox'
  if(item.file[0].includes('.mp4')) {
    imgdiv.innerHTML = `
    <video width="100%" height="100%" controls>
    <source src="${item.file[0]}" type="video/mp4">
    </video>
    `
  } else {
    imgdiv.innerHTML = `
    <img src="${item.file[0]}" alt="img" class="insta__img">
    `
  }

  footerdiv.className = 'insta__footer-box'
  footerdiv.innerHTML = `
    <input class="insta__input" type="text" placeholder="Reply to" required>
    <i class='bx bxl-telegram insta__footer-icon'></i>
  `

  prevbtn.appendChild(previcon)
  prevbtn.addEventListener('click', function change(){
    --idx;
    changeImg(idx)
  })

  nextbtn.appendChild(nexticon)
  nextbtn.addEventListener('click', function change(){
    ++idx;
    changeImg(idx)
  })

  boxdiv.appendChild(headdiv)
  boxdiv.appendChild(imgdiv)
  boxdiv.appendChild(footerdiv)
  boxdiv.appendChild(prevbtn)
  boxdiv.appendChild(nextbtn)
  li.appendChild(boxdiv)
  elListBox.appendChild(li);
  }
})


let idx = 0;
  function changeImg(idX) {
    let imgs = document.querySelectorAll('#listbox li')
    const elImgBox = document.querySelector('#listbox');
    if(idX >= imgs.length) {
      idx = 0
      idX = 0
      elImgBox.style.transform = `translateX(${-idX * 100}%)`
    } else if(idX < 0) {
      idX = imgs.length - 1
      idx = imgs.length - 1
      elImgBox.style.transform = `translateX(${-idX * 100}%)`
    } else {
      elImgBox.style.transform = `translateX(${-idX * 100}%)`
    }
  }
