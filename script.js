(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {
    answer.innerHTML = "Loading...";

    const newPost = {
      title: "Nowy post z zadania 2_1.4",
      body: "To jest treść nowego posta wysłanego metodą POST.",
      userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(newPost)
    })
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        answer.innerHTML = `✅ Dodano nowy post o ID = ${data.id}`;
        console.log("Odpowiedź serwera:", data);
      })
  })

  cw2.addEventListener("click", function() {
    answer.innerHTML = "Ładowanie danych...";
    const popup = document.getElementById("loadingPopup");
    popup.style.display = "flex";
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>
          response.json())
        .then(posts => {
          console.log("Wszystkie posty:");
          console.table(posts);
          let html = `
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
            <thead style="background-color: #f2f2f2;">
              <tr>
                <th>ID</th>
                <th>Tytuł</th>
                <th>Treść</th>
              </tr>
            </thead>
            <tbody>
        `;

          posts.forEach(post => {
            html += `
            <tr>
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.body}</td>
            </tr>
          `;
          });

          html += `</tbody></table>`;
          answer.innerHTML = html;
          const popup = document.getElementById("loadingPopup");
          popup.style.display = "none";
        })
    }, 1000);
  });


  cw3.addEventListener("click", function() {
    //TODO
  })

})();
