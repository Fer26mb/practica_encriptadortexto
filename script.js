const map = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

function encrypt() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    let result = "";
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (map[char]) {
            result += map[char];
        } else {
            result += char;
        }
    }

    output.innerHTML = result;
    toggleEmptyMessage();
}

function decrypt() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    let result = input;
    for (const [key, value] of Object.entries(map)) {
        const regex = new RegExp(value, "g");
        result = result.replace(regex, key);
    }

    output.innerHTML = result;
    toggleEmptyMessage();
}

function copy() {
    const output = document.getElementById("output");
    const text = output.innerHTML;
    navigator.clipboard.writeText(text).then(r =>
        console.log("Copied to clipboard")
    ).catch(err =>
        console.error("Failed to copy to clipboard")
    );
}

function toggleEmptyMessage() {
    const emptyMessage = document.getElementById("no-message");
    const output = document.getElementById("output");
    const copyButton = document.getElementById("copy");
    if (output.innerHTML.length === 0) {
        emptyMessage.style.display = "block";
        output.style.display = "none";
        copyButton.style.display = "none";
    } else {
        emptyMessage.style.display = "none";
        output.style.display = "block";
        copyButton.style.display = "block";
    }
}