function cheesify() {
  // TODO: Add the image replacement script here
  const images = document.querySelectorAll('img');
  images.forEach( (img) => {
    img.src = `https://source.unsplash.com/featured/?cheese/${img.width}x${img.height}?${Math.random()}`;
    img.srcset = img.src;
  })
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // actions based on the request (which corresponds to the object we sent in our message)
    // console.log(request);
    if (request.action === 'cheesify') {
      cheesify();
    }
  }
);
