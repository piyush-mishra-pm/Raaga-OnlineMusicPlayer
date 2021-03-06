/****************************************************************
 * Plays a song when clicked, and updates the song info on playbar modal at screen bottom.
 * Uses music-player.js to work.
 ****************************************************************/

const setUpForPlaylistItem = e => {
    var elem = e.target.closest('.playbar-item');
    if (elem) {
        const audioSrc = elem.dataset.songUrl;
        const imgSrc = elem.querySelector('.playbar-img')?.src;
        const title = elem.querySelector('.playbar-title')?.innerText;
        const subtitle = elem.querySelector('.playbar-subtitle')?.innerText;
        setAndPlay(imgSrc, audioSrc, title, subtitle);
    }
};
document.querySelectorAll('.playbar-listener')?.forEach(playbarListener => {
    playbarListener.addEventListener('click', setUpForPlaylistItem);
});
