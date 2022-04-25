window.addEventListener('load', () => {
    const encodeText = document.querySelector('#encodeText');
    const decodeText = document.querySelector('#decodeText');
    encodeText.addEventListener('blur', () => {
        // clear
        decodeText.value = '';
        const inputText = encodeText.value;
        console.log(inputText);
        const convertedText = inputText.replace(/\\x/gi, '%');
        console.log(convertedText);
        const outputText = decodeURIComponent(convertedText);
        // output
        decodeText.value = outputText;
    });
});
