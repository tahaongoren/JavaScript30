const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Shift tuşunun aktif olup olmadığını
  // ve bu durumun kontrol edilip edilmediğini check ediyoruz
  let inBetween = false;
  
  if (e.shiftKey && this.checked) {
    // devam ediyoruz ve her checkbox'ı döngüye alıyoruz
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);
