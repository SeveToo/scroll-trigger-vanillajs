const myNavList = document.querySelectorAll('.myNavList>li');
const sectionList = document.querySelectorAll('section');

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

const removeActive = () => myNavList.forEach(li => li.classList.remove('active'));
const addActive = (el) => el.classList.add('active');


window.addEventListener('scroll', () => {
  
  const fromTop = window.scrollY;
  
  myNavList.forEach(li => {
    const section = document.querySelector(li.querySelector('a')
    .getAttribute('href')).parentElement;
    console.log(section);

    if(fromTop >= getOffset(section).top - section.offsetHeight*1.1) {
      removeActive();
      addActive(li)
    }
  });
})