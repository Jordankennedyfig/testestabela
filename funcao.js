        let deletedEmails = [];
        
        function selectAll(source) {
            let checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
            checkboxes.forEach(checkbox => checkbox.checked = source.checked);
        }
        
        function deleteSelected() {
            let checkboxes = document.querySelectorAll('tbody input[type="checkbox"]:checked');
            checkboxes.forEach(checkbox => {
                let row = checkbox.closest('tr');
                deletedEmails.push(row.outerHTML);
                row.remove();
            });
        }
        
        function undoDelete() {
            let tbody = document.querySelector('tbody');
            if (deletedEmails.length > 0) {
                tbody.insertAdjacentHTML('beforeend', deletedEmails.pop());
            }
        }
        
        function sendEmail() {
            let recipient = document.getElementById('recipient').value;
            let subject = document.getElementById('subject').value;
            let message = document.getElementById('message').value;
            
            if (recipient && subject && message) {
                alert(`E-mail enviado para: ${recipient}\nAssunto: ${subject}\nMensagem: ${message}`);
            } else {
                alert("Por favor, preencha todos os campos para enviar o e-mail.");
            }
        }
