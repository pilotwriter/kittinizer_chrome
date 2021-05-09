let filenames = [
    "1.jpeg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
]
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req === 'changeImage') 
    changeImagesWithKittens();
});

function changeImagesWithKittens(){
    const imgList = document.getElementsByTagName('img');
        for (imgElmt of imgList) {
            let r = Math.floor(Math.random() * filenames.length);
            let file = filenames[r];
            let url = chrome.extension.getURL("kitten/"+file);
            imgElmt.src = url;

        }

}