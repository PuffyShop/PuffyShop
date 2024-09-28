document.addEventListener('DOMContentLoaded', function() {
    const addCartButtons = document.querySelectorAll('.btn-add-cart');
    const detailButtons = document.querySelectorAll('.btn-details');

    addCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Produit ajouté au panier!');
        });
    });

    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Voici plus de détails sur le produit.');
        });
    });
});
