
    let round = 1;  // Initial round
    // Define our comments
    const commentsStart = [
        // ... your initial comments here ...
    ];

    // Comments for rounds 1 and 2...
    const commentsA1 = [...];
    const commentsA2 = [...];
    const commentsA3 = [...];
    const commentsB11 = [...];
    const commentsB12 = [...];
    const commentsB13 = [...];
    
    // Message options at round 3, to be filled in by you
    const commentsC11 = [
        { name: "user1", comment: "comment1 for C11 in round 3", img: "../img/h3.png" },
        // Add more comments...
    ];
    const commentsC12 = [
        { name: "user1", comment: "comment1 for C12 in round 3", img: "../img/h3.png" },
        // Add more comments...
    ];
    const commentsC13 = [
        { name: "user1", comment: "comment1 for C13 in round 3", img: "../img/h3.png" },
        // Add more comments...
    ];

    // More code...

    document.getElementById('buttonA').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('ajouterCommentaire').textContent = this.textContent;
        if (round === 1) {
            selectedComments = commentsA1;
        } else if (round === 2) {
            selectedComments = commentsB11;
        } else {
            selectedComments = commentsC11;
        }
        round++;  // increment round
    });

    buttonA.addEventListener('click', function (event) {
        event.preventDefault();
        if (round === 2) {
            // Set button text for round 2
            buttonA.textContent = "...";
            buttonB.textContent = "...";
            buttonC.textContent = "...";
        } else if (round === 3) {
            // Set button text for round 3
            buttonA.textContent = "...";
            buttonB.textContent = "...";
            buttonC.textContent = "...";
        }
    });

    // Similarly, modify buttonB and buttonC event handlers...

    // More code...

    // And, don't forget to modify your 'commentairePublier' event listener
    document.getElementById('commentairePublier').addEventListener('click', function () {
        // Display selected comments
        displayComments(selectedComments);

        // If it's the end of the game, you might want to do something special here...
        if (round > 3) {
            console.log("End of the game!");
            // Do something...
        }

        // Rest of the code...
    });
