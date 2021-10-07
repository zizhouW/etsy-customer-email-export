function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
const distinctEmails = [...new Set(Array(...document.querySelectorAll('.no-text-decoration')).map(d => d.innerText).filter(t => validateEmail(t)))];
const csvContent = "data:text/csv;charset=utf-8," + distinctEmails.join("\n");
const encodedUri = encodeURI(csvContent);
const link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "emails.csv");
document.body.appendChild(link);
link.click();
