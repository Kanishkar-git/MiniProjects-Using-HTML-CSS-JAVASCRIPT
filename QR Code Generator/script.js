document.getElementById('frm').addEventListener('submit', function (e) {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = parseInt(document.getElementById('size').value);
    const color = document.getElementById('color').value;

    const spinner = document.getElementById('spinner');
    const qrcode = document.getElementById('qrcode');
    const downloadButton = document.getElementById('download');

    // Clear previous QR code and hide download button
    qrcode.innerHTML = '';
    qrcode.style.display = 'none';
    downloadButton.style.display = 'none';

    // Show spinner
    spinner.style.display = 'block';

    // Simulate QR code generation delay
    setTimeout(() => {
        spinner.style.display = 'none';

        // Generate QR Code
        const qrCodeGenerator = new QRCode(qrcode, {
            text: url,
            width: size,
            height: size,
            colorDark: color,
            colorLight: '#ffffff', // Light color remains white
        });

        // Show QR code and download button
        qrcode.style.display = 'flex';
        downloadButton.style.display = 'inline-block';

        // Add download functionality
        downloadButton.onclick = function () {
            const img = qrcode.querySelector('img');
            const link = document.createElement('a');
            link.href = img.src;
            link.download = 'qrcode.png';
            link.click();
        };
    }, 10000); // 10-second delay for processing animation
});
