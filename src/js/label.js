// Ambil nilai dari cookie name
var cookieName = getCookie('name');

// Setel teks di dalam span dengan nilai cookie name
var adminUserLabel = document.getElementById('adminUserLabel');
if (adminUserLabel) {
  var spanElement = adminUserLabel.querySelector('span');
  if (spanElement) {
    spanElement.innerText = cookieName;
  } else {
    console.error('Span element not found.');
  }
} else {
  console.error('Admin user label element not found.');
}

// Fungsi untuk mendapatkan nilai dari cookie berdasarkan nama
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}