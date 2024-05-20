function toggleDarkMode() {
            const style = document.getElementById('custom-style');
            const sidebar = document.querySelector('.sidebar');
            if (style.innerText === '') {
                style.innerText = `
                    body {
                        background-color: #343a40;
                        color: #ffffff; /* Cor do texto quando escuro */
                    }
                    .modal-body {
                        color: #000000; /* Cor do texto dentro do modal */
                    }
                `;
            } else {
                style.innerText = '';
                sidebar.style.backgroundColor = '';
                sidebar.style.color = '';
            }
        }


            // Função para DarkMode
        document.getElementById('darkModeBtn').addEventListener('click', toggleDarkMode);

        document.getElementById('configBtn').addEventListener('click', function() {
            $('#configModal').modal('show');
        });


        