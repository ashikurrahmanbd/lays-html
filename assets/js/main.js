document.addEventListener('click', function (e) {
  const btn = e.target.closest('.qty-btn-plus, .qty-btn-minus');
  if (!btn) return;

  const wrap = btn.closest('.qty');
  const input = wrap.querySelector('.qty-input');
  const step = parseFloat(input.step || '1');
  const min = input.min !== '' ? parseFloat(input.min) : -Infinity;
  const max = input.max !== '' ? parseFloat(input.max) : Infinity;
  let val = parseFloat(input.value || '0');

  if (btn.classList.contains('qty-btn-plus')) val += step;
  if (btn.classList.contains('qty-btn-minus')) val -= step;

  val = Math.max(min, Math.min(max, val));
  input.value = Number.isInteger(step) ? val : val.toFixed(2);
  input.dispatchEvent(new Event('change', { bubbles: true })); // useful if you listen to changes
});

// optional: prevent mouse wheel changing value when focused
document.addEventListener('wheel', function (e) {
  if (document.activeElement?.classList.contains('qty-input')) {
    e.preventDefault();
  }
}, { passive: false });



//mobile menu bars click
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".mobile-menu-bars");
  const menu = document.querySelector(".mobile-menu-ul");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
//end
