const seasonSelect = document.getElementById('seasonSelect');
const seasonImage = document.getElementById('seasonImage');

seasonSelect.addEventListener('change', function() {
    const selectedSeason = seasonSelect.value;
    const imageSrc = `https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-${selectedSeason}-md-img.png`;
    
    seasonImage.src = imageSrc;
});