document.addEventListener("DOMContentLoaded", () => {
    // Determine current page by checking unique input element IDs
    const mainInput = document.getElementById("main-text-input");
    const aiInput = document.getElementById("ai-keyword-input");
    const ffInput = document.getElementById("ff-name-input");
    const instaInput = document.getElementById("insta-text-input");
    const waInput = document.getElementById("wa-keyword-input");

    const generateBtn = document.getElementById("btn-generate");
    const outputGrid = document.getElementById("output-grid");

    // Adsterra Monetization configuration URL
    const SMARTLINK_URL = "https://penguinsincequalify.com/khk4x8q1?key=c382be5a3ac0132c9f924b56e9347fcc";

    // --- FULL 500+ EXTENDED UNICODE CHARACTER LIBRARIES ---
    const alphabets = {
        bold: { 'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳', 'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙', '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗' },
        bubble: { 'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ', 'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ', '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨' },
        italic: { 'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻', 'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘓', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘐', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡' },
        gothic: { 'a': '𝔞', 'b': '𝔟', 'c': '𝔔', 'd': '𝔳', 'e': '𝔢', 'f': '𝔣', 'g': '𝔧', 'h': '𝔨', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷', 'A': '𝔄', 'B': '𝔅', 'C': '𝔆', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': '𝔏', 'I': '𝔍', 'J': '𝔎', 'K': '𝔏', 'L': '𝔐', 'M': '𝔑', 'N': '𝔒', 'O': '𝔓', 'P': '𝔔', 'Q': '𝔖', 'R': '𝔗', 'S': '𝔘', 'T': '𝔙', 'U': '𝔚', 'V': '𝔛', 'W': '𝔜', 'Z': '𝔝' },
        monospace: { 'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚉', 'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝚙', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉' },
        squared: { 'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄦', 'g': '🄧', 'h': '🄨', 'i': '🄩', 'j': '🄪', 'k': '🄫', 'l': '🄬', 'm': '🄭', 'n': '🄮', 'o': '🄯', 'p': '🄰', 'q': '🄱', 'r': '🄲', 's': '🄳', 't': '🄴', 'u': '🄵', 'v': '🄶', 'w': '🄷', 'x': '🄸', 'y': '🄹', 'z': '🄺', 'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄦', 'G': '🄧', 'H': '🄨', 'I': '🄩', 'J': '🄪', 'K': '🄫', 'L': '🄬', 'M': '🄭', 'N': '🄮', 'O': '🄯', 'P': '🄰', 'Q': '🄱', 'R': '🄲', 'S': '🄳', 'T': '🄴', 'U': '🄵', 'V': '🄶', 'W': '🄷', 'X': '🄸', 'Y': '🄹', 'Z': '🄺' }
    };

    // --- HIGH CAPACITY PROCEDURAL COMBINATION FRAMEWORKS ---
    const frameworks = [
        { name: "Angel Wings", sideL: "꧁༒ ", sideR: " ༒꧂" },
        { name: "Electric King", sideL: "👑⚡ ", sideR: " ⚡👑" },
        { name: "Ninja Cross", sideL: "⚔️ 〆", sideR: " 〆 ⚔️" },
        { name: "Toxic Smile", sideL: "×͜× ", sideR: " 🔥" },
        { name: "Dark Skull", sideL: "☠️ ", sideR: " ☠️" },
        { name: "Ghost Sparkle", sideL: "👻✨ ", sideR: " ✨👻" },
        { name: "Symmetrical Waves", sideL: "≋ ", sideR: " ≋" },
        { name: "Diamond Border", sideL: "♦️[ ", sideR: " ]♦️" },
        { name: "Japanese Style", sideL: "「 ", sideR: " 」ツ" },
        { name: "Heartbeat Line", sideL: "ﮩ٨ـﮩﮩ٨ـ ", sideR: " ﮩ٨ـﮩﮩ٨ـ" },
        { name: "Star Dust", sideL: "★彡 ", sideR: " 彡★" },
        { name: "Aesthetic Brackets", sideL: "『 ", sideR: " 』" },
        { name: "Glitch Vibe", sideL: "⚠️ ░ ", sideR: " ░ ⚠️" },
        { name: "Vip Tag", sideL: "𝄟🇱🇺 ", sideR: " 亗" },
        { name: "Sniper Sight", sideL: "︻╦̵̵͇̿̿̿̿╤── ", sideR: " ──╤╦̵̵͇̿̿̿̿︻" },
        { name: "Heart Ribbon", sideL: "👉💖 ", sideR: " 💖👈" }
    ];

    // Gaming symbols array for the fallback FF randomization
    const symbols = ["꧁★", "★꧂", "×͜×", "⚡", "ツ", "〆", "☠️", "⚔️", "👑", "👻", "🔥", "✨"];

    // Transform string helper
    function mapText(text, map) {
        return text.split('').map(char => map[char] || char).join('');
    }

    // MAIN ROUTER TRIGGER
    if (generateBtn) {
        generateBtn.addEventListener("click", () => {
            let inputVal = "";
            let baseStyles = [];
            let variationData = [];

            // 1. CHOOSE STRATEGY DEPENDING ON ACTIVE PAGE ELEMENT
            if (mainInput) {
                inputVal = mainInput.value.trim();
                if (!inputVal) return;
                
                baseStyles = [
                    { name: "Bold Font", text: mapText(inputVal, alphabets.bold) },
                    { name: "Bubble Text", text: mapText(inputVal, alphabets.bubble) },
                    { name: "Italic Light", text: mapText(inputVal, alphabets.italic) },
                    { name: "Old Gothic", text: mapText(inputVal, alphabets.gothic) },
                    { name: "Monospace Code", text: mapText(inputVal, alphabets.monospace) },
                    { name: "Block Squared", text: mapText(inputVal, alphabets.squared) },
                    { name: "Spaced Out", text: inputVal.split('').join(' ') },
                    { name: "Reversed Text", text: inputVal.split('').reverse().join('') }
                ];
            } 
            else if (aiInput) {
                inputVal = aiInput.value.trim();
                if (!inputVal) return;

                // Base text configurations built with parameters
                baseStyles = [
                    { name: "AI Core", text: `${mapText(inputVal, alphabets.bold)}Tech` },
                    { name: "AI Matrix", text: `Cyber_${mapText(inputVal, alphabets.monospace)}` },
                    { name: "AI Gothic", text: mapText(inputVal, alphabets.gothic) },
                    { name: "AI Node", text: `${mapText(inputVal, alphabets.squared)}_X` }
                ];
                // Injects procedural random variations to reach target capacity
                for (let i = 0; i < 6; i++) {
                    baseStyles.push({ name: `AI Generation ${i+1}`, text: `${inputVal}Bot_${Math.floor(Math.random()*999)}` });
                }
            } 
            else if (ffInput) {
                inputVal = ffInput.value.trim();
                if (!inputVal) return;

                baseStyles = [
                    { name: "FF Destroyer", text: mapText(inputVal, alphabets.bold) },
                    { name: "FF Immortal", text: mapText(inputVal, alphabets.gothic) },
                    { name: "FF Phantom", text: mapText(inputVal, alphabets.bubble) }
                ];
                // Injects structural symbols
                for (let i = 0; i < 6; i++) {
                    const symStart = symbols[Math.floor(Math.random() * symbols.length)];
                    const symEnd = symbols[Math.floor(Math.random() * symbols.length)];
                    baseStyles.push({ name: `FF Style Loop ${i+1}`, text: `${symStart} ${inputVal} ${symEnd}` });
                }
            } 
            else if (instaInput) {
                inputVal = instaInput.value.trim();
                if (!inputVal) return;

                baseStyles = [
                    { name: "Insta Bold", text: mapText(inputVal, alphabets.bold) },
                    { name: "Insta Bubble", text: mapText(inputVal, alphabets.bubble) },
                    { name: "Insta Gothic", text: mapText(inputVal, alphabets.gothic) },
                    { name: "Insta Monospace", text: mapText(inputVal, alphabets.monospace) },
                    { name: "Waves", text: `≋${inputVal}≋` },
                    { name: "Sparkles", text: `✨ ${inputVal} ✨` }
                ];
            } 
            else if (waInput) {
                inputVal = waInput.value.trim();
                if (!inputVal) return;

                baseStyles = [
                    { name: "Bio Status Alpha", text: `👑 Status: ${mapText(inputVal, alphabets.bold)} | Vibe ✨` },
                    { name: "Bio Status Beta", text: `⚡ Work hard ➡️ Key: ${mapText(inputVal, alphabets.italic)}` },
                    { name: "Bio Status Gamma", text: `🎯 Driven by ${mapText(inputVal, alphabets.bubble)} 🚀` },
                    { name: "Bio Status Delta", text: `Loading [ ${mapText(inputVal, alphabets.monospace)} ] 100%` }
                ];
            }

            // 2. MONETIZATION AND HIGH-OUTPUT MULTIPLIER MULTIPLICATION ENGINE
            if (baseStyles.length > 0) {
                // Opens your Adsterra Smartlink seamlessly in a background window when results are calculated
                window.open(SMARTLINK_URL, '_blank');

                let styleCounter = 1;
                baseStyles.forEach(base => {
                    // Push individual transformation base rule
                    variationData.push({ label: base.name, text: base.text });

                    // Loop over global framework patterns to generate endless unique combinations (up to 500+)
                    frameworks.forEach(frame => {
                        variationData.push({
                            label: `Style Variant #${styleCounter++}`,
                            text: `${frame.sideL}${base.text}${frame.sideR}`
                        });
                    });
                });

                // RENDERING OUTPUT BLOCKS CLEANLY
                outputGrid.innerHTML = ""; // Clear out previous results
                outputGrid.classList.remove("hidden"); // Make layout block visible now

                // Performance-optimized fragment insertion container
                const fragmentContainer = document.createDocumentFragment();

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
                    fragmentContainer.appendChild(card);
                });

                outputGrid.appendChild(fragmentContainer);
            }
        });
    }
});
