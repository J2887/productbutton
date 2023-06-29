
<script>
    window.addEventListener('DOMContentLoaded', function() {
        var inputElement = document.getElementById('productAmount');
        var addToCartButton = document.getElementById('addToCart');
        var Bundelaantal = 4320;

        inputElement.value = Bundelaantal; // Set Bundelaantal as the default value
        inputElement.setAttribute('max', '99999'); // Set the max attribute
        inputElement.classList.add('hideArrows'); // Add the hideArrows class

        // Create a message element
        var messageElement = document.createElement('div');
        messageElement.style.marginTop = '10px';
        messageElement.style.fontWeight = 'bold';

        // Create a container div for the input field and buttons
        var container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'row'; // Set the flex direction to column

        // Create up and down buttons
        var incrementButton = document.createElement('button');
        incrementButton.textContent = '▲';
        incrementButton.style.width = '50px';
        incrementButton.style.padding = '0'; // Remove the padding
        var decrementButton = document.createElement('button');
        decrementButton.textContent = '▼';
        decrementButton.style.width = '50px';
        decrementButton.style.padding = '0'; // Remove the padding

        // Function to handle incrementing the value
        function incrementValue() {
            var inputValue = parseInt(inputElement.value);
            inputValue += Bundelaantal;
            inputElement.value = inputValue;
            updateMessage();
        }

        // Function to handle decrementing the value
        function decrementValue() {
            var inputValue = parseInt(inputElement.value);
            inputValue -= Bundelaantal;
            if (inputValue < 0) {
                inputValue = 0;
            }
            inputElement.value = inputValue;
            updateMessage();
        }

        // Add event listeners to the buttons
        incrementButton.addEventListener('click', incrementValue);
        decrementButton.addEventListener('click', decrementValue);

        // Append the input field and buttons to the container div
        container.appendChild(inputElement);
        container.appendChild(incrementButton);
        container.appendChild(decrementButton);

        // Append the container div after the addToCartButton
        addToCartButton.parentNode.insertBefore(container, addToCartButton);

        // Append the message element after the addToCartButton
        addToCartButton.parentNode.insertBefore(messageElement, addToCartButton.nextSibling);

        // Add margin-top to the addToCartButton
        addToCartButton.style.marginTop = '20px';

        function updateMessage() {
            var inputValue = parseInt(inputElement.value);
            var roundedValue = Math.ceil(inputValue / Bundelaantal) * Bundelaantal;
            inputElement.value = roundedValue;

            if (roundedValue % Bundelaantal === 0) {
                messageElement.textContent = 'Dit product is gebundeld, de prijs is per stuk en te bestellen in meervoud van ' + Bundelaantal + '.';
                messageElement.style.color = 'green';
                addToCartButton.disabled = false;
            } else {
                messageElement.textContent = 'Pas aub het aantal aan. Dit product is gebundeld en enkel te bestellen in meervoud van ' + Bundelaantal + '.';
                messageElement.style.color = 'red';
                addToCartButton.disabled = true;
            }
        }

        function handleBlur() {
            updateMessage();
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                updateMessage();
            }
        }

        function handleMouseMove() {
            updateMessage();
        }

        inputElement.addEventListener('blur', handleBlur);
        inputElement.addEventListener('keypress', handleKeyPress);
        document.addEventListener('mousemove', handleMouseMove);

        addToCartButton.addEventListener('click', function(event) {
            if (addToCartButton.disabled) {
                event.preventDefault();
                return;
            }
        });
    });
</script>

<style>
    .hideArrows::-webkit-inner-spin-button,
    .hideArrows::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .hideArrows {
        -moz-appearance: textfield;
    }
</style>

