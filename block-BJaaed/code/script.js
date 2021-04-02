let container = document.querySelector(".container");
let array1 = data.books.map((elem) => {
  return `
    <article class="flex-31 text-center">
            <div class="font-0 width-70">
              <img
                src=${elem.image}
                alt=""
                class="img"
              />
            </div>
            <h3>${elem.title}</h3>
            <p>author ${elem.author} </p>
            <a href="" class="btn">Buy Now</a>
          </article>
    `;
});

container.innerHTML = array1.join("");
