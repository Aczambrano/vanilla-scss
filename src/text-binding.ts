const nameInput = document.getElementById("name-input") as HTMLInputElement;
const dynamicName = document.getElementById("dynamic-name") as HTMLSpanElement;

if (nameInput && dynamicName) {
  nameInput.addEventListener("input", (event: Event) => {
    const inputValue = nameInput.value.trim();
    dynamicName.textContent = inputValue || "Newton";
  });
}
