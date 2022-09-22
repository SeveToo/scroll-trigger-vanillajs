const myNavList = document.querySelectorAll('.myNavList>li');

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
    .getAttribute('href'));

    if(fromTop >= getOffset(section).top - 250) {
      removeActive();
      addActive(li)
    }
  });
})