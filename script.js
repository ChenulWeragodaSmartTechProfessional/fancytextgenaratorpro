document.addEventListener("DOMContentLoaded", () => {
    // Target inputs across pages
    const mainInput = document.getElementById("main-text-input");
    const aiInput = document.getElementById("ai-keyword-input");
    const ffInput = document.getElementById("ff-name-input");
    const instaInput = document.getElementById("insta-text-input");
    const waInput = document.getElementById("wa-keyword-input");

    const generateBtn = document.getElementById("btn-generate");
    const outputGrid = document.getElementById("output-grid");

    // Adsterra Smartlink
    const SMARTLINK_URL = "https://penguinsincequalify.com/khk4x8q1?key=c382be5a3ac0132c9f924b56e9347fcc";

    // 10 Fully Formatted Font Style Maps
    const alphabets = {
        bold: { 'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳', 'A': '𝐀', 'B': '𝐁', 'C': '🇨', 'D': '🇩', 'E': '🇪', 'F': '🇫', 'G': '🇬', 'H': '🇭', 'I': '🇮', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '🇺', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙', '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗' },
        bubble: { 'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ', 'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': '🇲', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ', '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨' },
        italic: { 'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻', 'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘓', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘐', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡' },
        gothic: { 'a': '𝔞', 'b': '🔟', 'c': '𔔔', 'd': '𔔓', 'e': '𔔢', 'f': '𔔣', 'g': '𔔧', 'h': '𔔨', 'i': '𝔦', 'j': '𔔧', 'k': '𔔨', 'l': '𔔩', 'm': '𝔪', 'n': '𔔫', 'o': '𝔬', 'p': '𔔭', 'q': '𔔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𔔲', 'v': '𔔳', 'w': '𔔴', 'x': '𔔵', 'y': '𔔶', 'z': '𔔷', 'A': '𔔄', 'B': '𔔅', 'C': '𔔆', 'D': '𔔇', 'E': '𔔈', 'F': '𔔉', 'G': '𔔊', 'H': '𔔏', 'I': '𔔍', 'J': '𔔎', 'K': '𔔏', 'L': '𔔐', 'M': '𔔑', 'N': '𔔒', 'O': '𔔓', 'P': '𔔔', 'Q': '𔔖', 'R': '𔔗', 'S': '𔔘', 'T': '𔔙', 'U': '𔔚', 'V': '𔔛', 'W': '𔔜', 'Z': '𔔝' },
        monospace: { 'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚉', 'A': '𝙰', 'B': '𝙱', 'C': '🇨', 'D': '🇩', 'E': '🇪', 'F': '🇫', 'G': '🇬', 'H': '🇭', 'I': '🇮', 'J': '𝚙', 'K': '𝙺', 'L': '𝙻', 'M': '🇲', 'N': '🇳', 'O': '🇴', 'P': '🇵', 'Q': '𝚀', 'R': '🇷', 'S': '🇸', 'T': '🇹', 'U': '🇺', 'V': '🇻', 'W': '🇼', 'X': '🇽', 'Y': '🇾', 'Z': '𝚉' },
        squared: { 'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴', 'f': '🄦', 'g': '🄧', 'h': '🄨', 'i': '🄩', 'j': '🄪', 'k': '🄫', 'l': '🄬', 'm': '🄭', 'n': '🄮', 'o': '🄯', 'p': '🄰', 'q': '🄱', 'r': '🄲', 's': '🄳', 't': '🄴', 'u': '🄵', 'v': '🄶', 'w': '🄷', 'x': '🄸', 'y': '🄹', 'z': '🄺', 'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴', 'F': '🄦', 'G': '🄧', 'H': '🄨', 'I': '🄩', 'J': '🄪', 'K': '🄫', 'L': '🄬', 'M': '🄭', 'N': '🄮', 'O': '🄯', 'P': '🄰', 'Q': '🄱', 'R': '🄲', 'S': '🄳', 'T': '🄴', 'U': '🄵', 'V': '🄶', 'W': '🄷', 'X': '🄸', 'Y': '🄹', 'Z': '🄺' },
        smallcaps: { 'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ', 'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 'ꜱ', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ' },
        script: { 'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝒫', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏', 'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵' },
        upsidedown: { 'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': '◖', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': '⋊', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z' },
        subscript: { 'a': 'ₐ', 'b': '♭', 'c': '꜀', 'd': 'ᵈ', 'e': 'ₑ', 'f': '𝔣', 'g': '₉', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'q': 'q', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'w': 'w', 'x': 'ₓ', 'y': 'ᵧ', 'z': '₂' }
    };

    // 50 High-Vibe Framework Combinations
    const frameworks = [
        { sideL: "꧁༒ ", sideR: " ༒꧂" }, { sideL: "👑⚡ ", sideR: " ⚡👑" },
        { sideL: "⚔️ 〆", sideR: " 〆 ⚔️" }, { sideL: "×͜× ", sideR: " 🔥" },
        { sideL: "☠️ ", sideR: " ☠️" }, { sideL: "👻✨ ", sideR: " ✨👻" },
        { sideL: "≋ ", sideR: " ≋" }, { sideL: "♦️[ ", sideR: " ]♦️" },
        { sideL: "「 ", sideR: " 」ツ" }, { sideL: "ﮩ٨ـﮩﮩ٨ـ ", sideR: " ﮩ٨ـﮩﮩ٨ـ" },
        { sideL: "★彡 ", sideR: " 彡★" }, { sideL: "『 ", sideR: " 』" },
        { sideL: "⚠️ ░ ", sideR: " ░ ⚠️" }, { sideL: "𝄟🇱🇺 ", sideR: " 亗" },
        { sideL: "︻╦̵̵͇̿̿̿̿╤── ", sideR: " ──╤╦̵̵͇̿̿̿̿︻" }, { sideL: "👉💖 ", sideR: " 💖👈" },
        { sideL: "₊˚⊹♡ ", sideR: " ♡⊹˚₊" }, { sideL: "⚡⛓️ ", sideR: " ⛓️⚡" },
        { sideL: "✨🔮 ", sideR: " 🔮✨" }, { sideL: "🦊🍁 ", sideR: " 🍁🦊" },
        { sideL: "🪐✨ ", sideR: " ✨🪐" }, { sideL: "🏴‍☠️⚔️ ", sideR: " ⚔️🏴‍☠️" },
        { sideL: "🍷 » ", sideR: " « 🍷" }, { sideL: "☯️ [ ", sideR: " ] ☯️" },
        { sideL: "🛸👽 ", sideR: " 👽🛸" }, { sideL: "❄️✨ ", sideR: " ✨❄️" },
        { sideL: "🎭 ", sideR: " 🎭" }, { sideL: "🧸🎈 ", sideR: " 🎈🧸" },
        { sideL: "🍀• ", sideR: " •🍀" }, { sideL: "🌙💫 ", sideR: " 💫🌙" },
        { sideL: "🍒♩ ", sideR: " ♩🍒" }, { sideL: "🎨🖌️ ", sideR: " 🖌️🎨" },
        { sideL: "💎⛓️ ", sideR: " ⛓️💎" }, { sideL: "🐉🔥 ", sideR: " 🔥🐉" },
        { sideL: "🎮👾 ", sideR: " 👾🎮" }, { sideL: "⚡🥋 ", sideR: " 🥋⚡" },
        { sideL: "🦅🇺🇸 ", sideR: " 🇺🇸🦅" }, { sideL: "🧿✨ ", sideR: " ✨🧿" },
        { sideL: "🔱👑 ", sideR: " 👑🔱" }, { sideL: "💔🏹 ", sideR: " 🏹💔" },
        { sideL: "🍃✨ ", sideR: " ✨🍃" }, { sideL: "🚀🌌 ", sideR: " 🌌🚀" },
        { sideL: "✨💎 ", sideR: " 💎✨" }, { sideL: "⚡💥 ", sideR: " 💥⚡" },
        { sideL: "🥀⛓️ ", sideR: " ⛓️🥀" }, { sideL: "🍁✨ ", sideR: " ✨🍁" },
        { sideL: "👑💎 ", sideR: " 💎👑" }, { sideL: "✨🎈 ", sideR: " 🎈✨" },
        { sideL: "🎵🎧 ", sideR: " 🎧🎵" }, { sideL: "💥⚔️ ", sideR: " ⚔️💥" }
    ];

    const symbols = ["꧁★", "★꧂", "×͜×", "⚡", "ツ", "〆", "☠️", "⚔️", "👑", "👻", "🔥", "✨"];

    function mapText(text, map) {
        if (!map) return text;
        return text.split('').map(char => map[char] || char).join('');
    }

    if (generateBtn) {
        generateBtn.addEventListener("click", () => {
            let inputVal = "";
            let baseStyles = [];
            let variationData = [];

            // Identify current sub-page view
            if (mainInput) {
                inputVal = mainInput.value.trim();
                if (!inputVal) return;
                baseStyles = [
                    { name: "Bold Font", map: alphabets.bold },
                    { name: "Bubble Font", map: alphabets.bubble },
                    { name: "Italic Font", map: alphabets.italic },
                    { name: "Gothic Font", map: alphabets.gothic },
                    { name: "Monospace Font", map: alphabets.monospace },
                    { name: "Squared Font", map: alphabets.squared },
                    { name: "Small Caps", map: alphabets.smallcaps },
                    { name: "Cursive Script", map: alphabets.script },
                    { name: "Upside Down", map: alphabets.upsidedown },
                    { name: "Subscript Font", map: alphabets.subscript },
                    { name: "Spaced Out", text: inputVal.split('').join(' ') },
                    { name: "Reversed Text", text: inputVal.split('').reverse().join('') }
                ];
            } 
            else if (aiInput) {
                inputVal = aiInput.value.trim();
                if (!inputVal) return;
                baseStyles = [
                    { name: "AI Core", text: `${mapText(inputVal, alphabets.bold)}Tech` },
                    { name: "AI Matrix", text: `Cyber_${mapText(inputVal, alphabets.monospace)}` },
                    { name: "AI Gothic", text: mapText(inputVal, alphabets.gothic) },
                    { name: "AI Code", text: `${mapText(inputVal, alphabets.squared)}_X9` }
                ];
                for (let i = 0; i < 8; i++) {
                    baseStyles.push({ name: `AI Variant ${i+1}`, text: `${inputVal}Bot_${100 + i}` });
                }
            } 
            else if (ffInput) {
                inputVal = ffInput.value.trim();
                if (!inputVal) return;
                baseStyles = [
                    { name: "FF Destroyer", text: mapText(inputVal, alphabets.bold) },
                    { name: "FF Immortal", text: mapText(inputVal, alphabets.gothic) }
                ];
                for (let i = 0; i < 10; i++) {
                    const symStart = symbols[i % symbols.length];
                    const symEnd = symbols[(i + 4) % symbols.length];
                    baseStyles.push({ name: `FF Style Elite ${i+1}`, text: `${symStart} ${inputVal} ${symEnd}` });
                }
            } 
            else if (instaInput) {
                inputVal = instaInput.value.trim();
                if (!inputVal) return;
                baseStyles = [
                    { name: "Insta Bold", map: alphabets.bold },
                    { name: "Insta Bubble", map: alphabets.bubble },
                    { name: "Insta Script", map: alphabets.script },
                    { name: "Insta SmallCaps", map: alphabets.smallcaps },
                    { name: "Waves View", text: `≋${inputVal}≋` },
                    { name: "Sparkle View", text: `✨ ${inputVal} ✨` }
                ];
                while(baseStyles.length < 12) {
                    baseStyles.push({ name: `Insta Stack ${baseStyles.length}`, text: inputVal });
                }
            } 
            else if (waInput) {
                inputVal = waInput.value.trim();
                if (!inputVal) return;
                baseStyles = [
                    { name: "Bio Alpha", text: `👑 Status: ${mapText(inputVal, alphabets.bold)} | Live Vibe` },
                    { name: "Bio Beta", text: `⚡ Grind ➡️ Key: ${mapText(inputVal, alphabets.italic)}` },
                    { name: "Bio Gamma", text: `🎯 Target: ${mapText(inputVal, alphabets.bubble)} 🚀` }
                ];
                for(let i = 0; i < 9; i++) {
                    baseStyles.push({ name: `Bio Core Idea ${i+1}`, text: `✨ ${inputVal} [${i+1}] ✨` });
                }
            }

            // Generate Cross Matrix Variations (500+)
            if (baseStyles.length > 0) {
                window.open(SMARTLINK_URL, '_blank');

                let variantIndex = 1;
                baseStyles.forEach(base => {
                    const cleanText = base.text ? base.text : mapText(inputVal, base.map);
                    variationData.push({ label: base.name, text: cleanText });

                    frameworks.forEach(frame => {
                        variationData.push({
                            label: `Style Variant #${variantIndex++}`,
                            text: `${frame.sideL}${cleanText}${frame.sideR}`
                        });
                    });
                });

                // Render dynamically using document fragment
                outputGrid.innerHTML = "";
                outputGrid.classList.remove("hidden");

                const fragment = document.createDocumentFragment();

                variationData.forEach(item => {
                    const card = document.createElement("div");
                    card.className = "card";

                    const labelDiv = document.createElement("div");
                    labelDiv.className = "card-label";
                    labelDiv.textContent = item.label;

                    const textDiv = document.createElement("div");
                    textDiv.className = "card-text";
                    textDiv.textContent = item.text;

                    const copyBtn = document.createElement("button");
                    copyBtn.className = "btn-copy";
                    copyBtn.innerHTML = `📋 Copy`;
                    
                    copyBtn.addEventListener("click", () => {
                        navigator.clipboard.writeText(item.text).then(() => {
                            copyBtn.innerHTML = `✅ Copied!`;
                            setTimeout(() => { copyBtn.innerHTML = `📋 Copy`; }, 1200);
                        }).catch(err => console.error(err));
                    });

                    card.appendChild(labelDiv);
                    card.appendChild(textDiv);
                    card.appendChild(copyBtn);
                    fragment.appendChild(card);
                });

                outputGrid.appendChild(fragment);
            }
        });
    }
});
