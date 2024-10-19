function filterIncidents() {
    const date = document.getElementById('filter-date').value;
    const severity = document.getElementById('filter-severity').value;
    const rows = document.querySelectorAll('#incident-table tr');

    rows.forEach(row => {
        const rowDate = row.cells[0].innerText;
        const rowSeverity = row.cells[3].innerText.toLowerCase();

        const dateMatch = !date || rowDate === date;
        const severityMatch = !severity || rowSeverity === severity;

        if (dateMatch && severityMatch) {
            row.classList.add('visible');
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
            row.classList.remove('visible');
        }
    });
}
