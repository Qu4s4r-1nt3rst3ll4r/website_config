// Delete animation loader
const contentLoading = document.querySelector('.content-loading');
function stopAnimationLoading() {
  contentLoading.style.display = 'none';
}

window.onload = ()=>{
  // Stop Animation
  setTimeout(() => {
    stopAnimationLoading()
  }, 3000);
}
