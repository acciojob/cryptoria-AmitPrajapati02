// Sample encrypted messages
const messages = [
  { date: "2023-04-11", encrypted: "Wklv lv d whvw phvvdjh" }, // This is a test message
  { date: "2023-04-10", encrypted: "Dqrwkhu whvw phvvdjh" },  // Another test message
  { date: "2023-04-12", encrypted: "Uhjlvwhuh ghlfhlw" },      // Registered deceit
  { date: "2023-04-09", encrypted: "Frgxluj fkslhuh" }         // Coduing gchiere (with typos)
];

// Caesar Cipher Decryption
function decryptCaesar(text, shift = 3) {
  return text.replace(/[a-zA-Z]/g, char => {
    const base = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
    return String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
  });
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].date < right[j].date) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Main Execution
const decryptedMessages = messages.map(msg => ({
  date: msg.date,
  text: decryptCaesar(msg.encrypted)
}));

const sortedMessages = mergeSort(decryptedMessages);

// Display messages in the DOM
const container = document.getElementById("message-container");

sortedMessages.forEach(msg => {
  const li = document.createElement("li");
  li.textContent = `${msg.date}: ${msg.text}`;
  container.appendChild(li);
});
