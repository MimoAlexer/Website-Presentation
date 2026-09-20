// Change the parent width.
document.getElementById('parent-width').oninput = function () {
  document.getElementById('parent').style.width = this.value + 'px';
  document.getElementById('width-value').textContent = this.value + 'px';
};

// Change the parent font size.
document.getElementById('font-size').oninput = function () {
  document.getElementById('text-parent').style.fontSize = this.value + 'px';
  document.getElementById('font-value').textContent = this.value + 'px';
};

// Change opacity.
document.getElementById('opacity').oninput = function () {
  document.querySelector('.fade').style.opacity = this.value;
  document.getElementById('opacity-value').textContent = this.value;
  document.getElementById('opacity-code').textContent = '.fade { opacity: ' + this.value + '; }';
};
