// const svgHeart = (
//   <svg
//     aria-label="Feed de actividades"
//     class="_8-yf5 "
//     fill="#262626"
//     height="22"
//     viewBox="0 0 48 48"
//     width="22"
//   >
//     <path
//       clip-rule="evenodd"
//       d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
//       fill-rule="evenodd"
//     ></path>
//   </svg>
// );

const loadJSON = callback => {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "./media.json", true);
  xobj.onreadystatechange = () => {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
};

loadJSON(res => {
  const data = JSON.parse(res);
  loadProfile(data);
});

const loadProfile = data => {
  const post = data.media;
  const container = document.getElementById("gallery");
  for (i = 0; i < post.length; i++) {
    const containerPost = document.createElement("div");
    const containerProfile = document.createElement("div");

    const img = document.createElement("img");
    const profile = document.createElement("h2");
    const likes = document.createElement("h3");

    img.setAttribute("src", post[i].name);
    img.setAttribute("class", "gallery__img");
    img.setAttribute("alt", post[i].title);

    containerProfile
      .appendChild(img.cloneNode(true))
      .setAttribute("class", "gallery__profile");

    containerProfile.appendChild(
      profile.appendChild(document.createTextNode(post[i].profile))
    );

    containerProfile.appendChild(
      likes.appendChild(document.createTextNode(post[i].likes))
    );

    containerProfile.setAttribute("class", "gallery__info");

    containerPost.appendChild(img);
    containerPost.appendChild(containerProfile);
    container.appendChild(containerPost);
  }
};
