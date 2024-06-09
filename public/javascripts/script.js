document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  document.querySelectorAll(".delete-btn").forEach(button => {
    console.log("Delete button found");

    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      console.log(`Delete button clicked, id: ${id}`);

      fetch(`/notes/${id}`, { method: "DELETE" })
        .then(response => {
          if (response.ok) {
            window.location.reload();
          } else {
            console.error("Failed to delete note");
          }
        })
        .catch(error => console.error("Error:", error));
    });
  });

  document.querySelectorAll(".edit-btn").forEach(button => {
    console.log("Edit button found");

    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      const content = document.querySelector(`div[data-id='${id}']`).innerText;
      console.log(`Edit button clicked, id: ${id}, content: ${content}`);

      fetch(`/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: content })
      }).then(response => {
        if (response.ok) {
          window.location.reload();
        } else {
          console.error("Failed to edit note");
        }
      }).catch(error => console.error("Error:", error));
    });
  });
});
