document.addEventListener("DOMContentLoaded", () => {
    // Determine current page by checking unique input element IDs
    const mainInput = document.getElementById("main-text-input");
    const aiInput = document.getElementById("ai-keyword-input");
    const ffInput = document.getElementById("ff-name-input");
    const instaInput = document.getElementById("insta-text-input");
    const waInput = document.getElementById("wa-keyword-input");

    const generateBtn = document.getElementById("btn-generate");
    const outputGrid = document.getElementById("output-grid");

    // Character mapping libraries
    const boldMap = { 'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳', 'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙', '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗' };
    const bubbleMap = { 'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ', 'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ', '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨' };

    // Gaming symbols array for variations
    const symbols = ["꧁★", "★꧂", "×͜×", "⚡", "ツ", "〆", "☠️", "⚔️", "👑", "👻", "🔥", "✨"];

    // Transform string helper
    function mapText(text, map) {
        return text.split('').map(char => map[char] || char).join('');
    }

    // MAIN ROUTER TRIGGER
    if (generateBtn) {
        generateBtn.addEventListener("click", () => {
            let inputVal = "";
            let variationData = [];

            // 1. CHOOSE STRATEGY DEPENDING ON ACTIVE PAGE ELEMENT
            if (mainInput) {
                inputVal = mainInput.value.trim();
                if (!inputVal) return;
                variationData = [
                    { label: "Bold Font", text: mapText(inputVal, boldMap) },
                    { label: "Bubble Text", text: mapText(inputVal, bubbleMap) },
                    { label: "Spaced Out", text: inputVal.split('').join(' ') },
                    { label: "Reversed Text", text: inputVal.split('').reverse().join('') }
                ];
            } 
            else if (aiInput) {
                inputVal = aiInput.value.trim();
                if (!inputVal) return;
                // Generate procedural AI variants using a loop limit of 8 variants max for speed
                for (let i = 0; i < 8; i++) {
                    variationData.push({ label: `AI Variant ${i+1}`, text: `${inputVal}Tech_${Math.floor(Math.random()*999)}` });
                }
            } 
            else if (ffInput) {
                inputVal = ffInput.value.trim();
                if (!inputVal) return;
                // Free Fire custom stylized naming configurations
                for (let i = 0; i < 8; i++) {
                    const symStart = symbols[Math.floor(Math.random() * symbols.length)];
                    const symEnd = symbols[Math.floor(Math.random() * symbols.length)];
                    variationData.push({ label: `FF Style ${i+1}`, text: `${symStart} ${inputVal} ${symEnd}` });
                }
            } 
            else if (instaInput) {
                inputVal = instaInput.value.trim();
                if (!inputVal) return;
                variationData = [
                    { label: "Insta Bold", text: mapText(inputVal, boldMap) },
                    { label: "Insta Bubble", text: mapText(inputVal, bubbleMap) },
                    { label: "Waves", text: `≋${inputVal}≋` },
                    { label: "Sparkles", text: `✨ ${inputVal} ✨` }
                ];
            } 
            else if (waInput) {
                inputVal = waInput.value.trim();
                if (!inputVal) return;
                variationData = [
                    { label: "Bio Idea 1", text: `👑 Status: ${inputVal} | Living Life ✨` },
                    { label: "Bio Idea 2", text: `⚡ Work hard, play hard ➡️ Key: ${inputVal}` },
                    { label: "Bio Idea 3", text: `🎯 Driven by ${inputVal} 🚀` }
                ];
            }

            // RENDERING OUTPUT BLOCKS CLEANLY
            if (variationData.length > 0) {
                outputGrid.innerHTML = ""; // Clear out previous results
                outputGrid.classList.remove("hidden"); // Make layout block visible now

                variationData.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "card";

                    const labelDiv = document.createElement("div");
                    labelDiv.className = "card-label";
                    labelDiv.textContent = item.label;

                    const textDiv = document.createElement("div");
                    textDiv.className = "card-text";
                    textDiv.textContent = item.text; // Prevents XSS script insertion entirely

                    const copyBtn = document.createElement("button");
                    copyBtn.className = "btn-copy";
                    copyBtn.innerHTML = `📋 Copy`;
                    
                    // Attach event listener natively directly to element instance securely
                    copyBtn.addEventListener("click", () => {
                        navigator.clipboard.writeText(item.text).then(() => {
                            copyBtn.innerHTML = `✅ Copied!`;
                            setTimeout(() => { copyBtn.innerHTML = `📋 Copy`; }, 1500);
                        }).catch(err => {
                            console.error("Clipboard copy failed: ", err);
                        });
                    });

                    card.appendChild(labelDiv);
                    card.appendChild(textDiv);
                    card.appendChild(copyBtn);
                    outputGrid.appendChild(card);
                });
            }
        });
    }
});