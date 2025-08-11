document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#inventory-table tbody");

    if (typeof books !== 'undefined' && books.length > 0) {
        books.forEach(book => {
            const row = document.createElement("tr");

            const idCell = document.createElement("td");
            idCell.textContent = book.id;

            const titleCell = document.createElement("td");
            titleCell.textContent = book.title;

            const authorCell = document.createElement("td");
            authorCell.textContent = book.author;

            row.appendChild(idCell);
            row.appendChild(titleCell);
            row.appendChild(authorCell);

            tableBody.appendChild(row);
        });
    } else {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 3;
        cell.textContent = "No books found.";
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
});