document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addItemForm");
    const tableBody = document.querySelector("#inventoryTable tbody");

    let inventory = JSON.parse(localStorage.getItem('inventory') || '[]');

    window.deleteItem = function (idx) {
        if (confirm('Delete this item?')) {
            inventory.splice(idx, 1);
            saveAndRender();
        }
    };

    window.editItem = function (idx) {
        const item = inventory[idx];
        const newName = prompt('Edit part name:', item.name);
        if (newName === null) return;
        const newQuantity = prompt('Edit quantity:', item.quantity);
        if (newQuantity === null) return;
        const newUser = prompt('Edit user:', item.user);
        if (newUser === null) return;
        const now = new Date();
        const newTime = now.toLocaleString();
        if (newName.trim() && !isNaN(newQuantity) && Number(newQuantity) >= 0 && newUser.trim()) {
            inventory[idx] = { name: newName.trim(), quantity: Number(newQuantity), user: newUser.trim(), time: newTime };
            saveAndRender();
        } else {
            alert('Invalid input.');
        }
    };

    function renderTable() {
        tableBody.innerHTML = '';
        inventory.forEach((item, idx) => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.user || ''}</td>
            <td>${item.time || ''}</td>
            <td>
                <button onclick="editItem(${idx})">Edit</button>
                <button onclick="deleteItem(${idx})">Delete</button>
            </td>
        `;
            tableBody.appendChild(row);
        });
    }

    function addItem(name, quantity, user) {
        const now = new Date();
        inventory.push({ name, quantity, user, time: now.toLocaleString() });
        saveAndRender();
    }

    function saveAndRender() {
        localStorage.setItem('inventory', JSON.stringify(inventory));
        renderTable();
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = localStorage.getItem("currentUser") || "Unknown";
        const name = document.getElementById("partName").value.trim();
        const quantity = Number(document.getElementById("partQuantity").value);
        if (name && !isNaN(quantity) && quantity >= 0) {
            addItem(name, quantity, user);
            form.reset();
        } else {
            alert('Please enter valid values.');
        }
    });

    renderTable();
});
