const phoneNumber = "967738544822";

function buildWhatsappUrl(message) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-message]").forEach((link) => {
  const message = link.dataset.message;
  link.href = buildWhatsappUrl(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
