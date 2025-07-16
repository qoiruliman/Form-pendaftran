const notif = document.getElementById("notif");
const form = document.getElementById("pendaftaranForm");
const submitBtn = document.getElementById("submit");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  submitBtn.textContent = "Mengirim...";

  const formData = new FormData(form);
  console.log(formData);
  const data = new URLSearchParams(formData);
  console.log(data);

  document.getElementById("submit").innerHTML = "mengirim";

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbw-HXM5NEExUyvDuJAullUjAfXmAwY1-jZ0eOtG14d203BolPqEOrUhohpH_I4bFSaf/exec",
      {
        method: "POST",
        body: data,
      }
    );

    if (response.ok) {
      notif.style.display = "block";
      notif.innerHTML = `✅ Berhasil mendaftar`;
      form.reset();
    } else {
      notif.style.display = "block";
      notif.style.backgroundColor = "#e99910f0";
      notif.innerHTML = `❌ Gagal mengirim data.`;
    }
  } catch (error) {
    notif.style.display = "block";

    notif.style.backgroundColor = "#e02121f0";
    notif.innerHTML = `⚠️ Error: ${error.message}`;
  } finally {
    submitBtn.textContent = "Submit";

    setTimeout(() => {
      notif.style.display = "none";
    }, 3000);
  }
});
