class Table {
    constructor(data, elementId) {
        this.data = data;
        this.elementId = elementId;
        this.render();
    }

    render() {
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Create table headers
        const headers = ['Name', 'Size', 'Location', 'Image'];
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.innerText = header;
            tr.appendChild(th);
        });
        thead.appendChild(tr);

        // Create table rows
        this.data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.name}</td>
                <td>${item.size}</td>
                <td>${item.location}</td>
                <td><img src="js/data/${item.image}" alt="${item.name}" width="50" height="50"/></td>
            `;
            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById(this.elementId).appendChild(table);
    }
}
