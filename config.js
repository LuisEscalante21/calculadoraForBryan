document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    let discount = 0;

    if (amount >= 1000) {
        discount = 0.15; 
    } else if (amount >= 500) {
        discount = 0.10; 
    } else {
        discount = 0.05; 
    }

    const discountAmount = amount * discount;
    const finalAmount = amount - discountAmount;

    document.getElementById('result').innerHTML = `
        Descuento aplicado: $${discountAmount.toFixed(2)}<br>
        Total a pagar: $${finalAmount.toFixed(2)}
    `;
});