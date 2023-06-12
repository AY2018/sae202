
        let round = 1;  // Initial round
        let currentChoice = "comments"; // Tracks the sequence of choices
        let buttonClicked = false; // Flag variable to track button clicks
        let commentsPublished = false; // Flag variable to track comments publication



        // Comments 
        const commentsStart = [
            { name: "SasaRacroche", comment: "Ton sourire est incroyable, n'arrête jamais de sourire 😁", img: "../img/saracroche.jpeg" },
            { name: "Lydia92", comment: "Nice! Je vois que t'as un peu maigris! La chance!", img: "../img/lydia.jpeg" },
            { name: "SamLePompier", comment: "@Lydia92 Un peu trop maigre même tu trouves pas 😂😂😂?", img: "../img/SamLePompier.png" }
        ];

        // Message options at round 1 

        // If clickk A
        const commentsA = [
            { name: "Velizy2023", comment: "On dirait un squelette avec de la peau 😂", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Trop maigre, mange un peu plus! 🤢", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Elle a besoin d'un bon grec la soeur wsh 😂", img: "../img/h3.png" },
            { name: "DeathShot65", comment: "@Mwahahahah60 nan c'est tout le stock qu'il lui faut bahahaha", img: "../img/h3.png" }
        ];
        // If clickk B
        const commentsB = [
            { name: "Velizy2023", comment: "@SamLePompier Chacun est parfait tel qu'il est. 🙏", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Trop maigre, mange un peu plus! 🤢", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "10kg en moins et elle se transforme en baguette ", img: "../img/h3.png" },
            { name: "Lydia92", comment: "@Mwahahahah60 t'es pas drôle poto déguage. @Sarah, chérie, les écoute pas. T'es magnignifique. ", img: "../img/h3.png" }
        ];
        // If clickk C
        const commentsC = [
            { name: "Monkey D. Itachi", comment: "Trop maigre, mange un peu plus! 🤢", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Elle a besoin d'un bon grec la soeur wsh 😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "@Mwahahahah60 nan c'est tout le stock qu'il lui faut bahahaha", img: "../img/h3.png" }
        ];


        // Message options at round 2

        // If clickk A > A DONE
        const commentsAA = [
            { name: "Velizy2023", comment: "La Croix Rouge ! Je vous ai trouvé votre prochain modèle pour votre pub contre la famine 🙈", img: "../img/velizy.png" },
            { name: "Mwahahahah60", comment: "@Velizy2023 mdrr poto t'es un batard toi 😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "😂😂😂😂😂 ah mec c'est vrai non? Chui sur on peut voir ses os si elle enlève son pull", img: "../img/velizy.png" },
            { name: "Lydia92", comment: "C'est bon les gars stop la...", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Un plus pâle, elle serais transparente. 👻", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha je pars 5 min et vous l'allumez la pauvre 😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Ca va? T'es pas malade cousine? Tu ressembles à Gasper 👻🤮", img: "../img/h3.png" }
        ];

        // If clickk A > B  DONE
        const commentsAB = [
            { name: "Velizy2023", comment: "... Après elle est mignonne vite fait.", img: "../img/velizy.png" },
            { name: "Mwahahahah60", comment: "@Velizy2023 mdrr poto toi tu les aimes comme ca ? 😂", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Non mais, pas besoin de la tailler comme ca juste pour une photo", img: "../img/velizy.png" },
            { name: "Lydia92", comment: "C'est bon les gars stop la... @Velizy2023 a raison! ", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Un plus pâle, elle serais transparente. 👻", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "@Sarah bloque ces batards. Ils ont rien à faire de leur vie. Je suis sûr c'est des obus derrières leur écran. 🚫🚫🚫", img: "../img/laurie.jpg" }
        ];

        // If clickk A > C DONE
        const commentsAC = [
            { name: "Monkey D. Itachi", comment: "Un plus pâle, elle serais transparente. 👻", img: "../img/h3.png" },
            { name: "Lydia92", comment: "C'est bon les gars stop la...", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Ca va? T'es pas malade cousine? Tu ressembles à un Gasper 👻🤮", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha je pars 5 min et vous l'allumez la pauvre 😂😂😂😂😂", img: "../img/h3.png" }
        ];

        // If clickk B > A DONE
        const commentsBA = [
            { name: "Velizy2023", comment: "On dirait un squelette avec de la peau 😂", img: "../img/velizy.png" },
            { name: "Mwahahahah60", comment: "@Velizy2023 mdrr poto t'es un batard toi 😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "😂😂😂😂😂 ah mec c'est vrai non? Chui sur on peut voir ses os si elle enlève son pull", img: "../img/velizy.png" },
            { name: "Lydia92", comment: "C'est bon les gars stop la...", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Un plus pâle, elle serais transparente. 👻", img: "../img/h3.png" }
        ];

        // If clickk B > B  DONE
        const commentsBB = [
            { name: "Velizy2023", comment: "Lydia a raison Sarah les écoutes pas. Juste bloque les, te casse pas la tête", img: "../img/velizy.png" },
            { name: "Mwahahahah60", comment: "@Velizy2023 mdrr poto trql on rigole", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Non mais, pas besoin de la tailler comme ca juste pour une photo, c'est pas drôle", img: "../img/velizy.png" },
            { name: "Laurie&Laurie", comment: "Mais ca va pas non @Mwahahahah60? Comment ca on rigole? ", img: "../img/laurie.jpg" },
            { name: "Laurie&Laurie", comment: "Poste ta photo on va voire si tu vas rigoler si des inconnus viennent t'insulter", img: "../img/laurie.jpg" },
            { name: "Monkey D. Itachi", comment: "Elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/h3.png" },
            { name: "LOL2018", comment: "Les jeunes de nos jours, je vous jure. A mon époque ... ", img: "../img/h3.png" },
            { name: "Laurie", comment: "@Sarah juste bloque ces batards. Ils ont rien à faire de leur vie. Je suis sûr c'est des obus derrières leur écran. 🚫🚫🚫", img: "../img/laurie.jpg" },
            { name: "DeathShot65", comment: "Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" }
        ];

        // If clickk B > C  DONE
        const commentsBC = [
            { name: "Mwahahahah60", comment: "@Lydia92 mdrr poto trql on rigole", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Mais ca va pas non @Mwahahahah60? Comment ca on rigole? ", img: "../img/laurie.jpg" },
            { name: "Laurie&Laurie", comment: "Poste ta photo on va voire si tu vas rigoler si des inconnus viennent t'insulter", img: "../img/laurie.jpg" },
            { name: "Monkey D. Itachi", comment: "Elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/h3.png" },
            { name: "LOL2018", comment: "Les jeunes de nos jours, je vous jure. A mon époque ... ", img: "../img/h3.png" }
        ];

        // If clickk C > A DONE
        const commentsCA = [
            { name: "Velizy2023", comment: "On dirait un squelette avec de la peau 😂", img: "../img/velizy.png" },
            { name: "Mwahahahah60", comment: "@Velizy2023 mdrr poto t'es un batard toi 😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "😂😂😂😂😂 ah mec c'est vrai non? Chui sur on peut voir ses os si elle enlève son pull", img: "../img/velizy.png" },
            { name: "Lydia92", comment: "C'est bon les gars stop la...", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Un plus pâle, elle serais transparente. 👻", img: "../img/h3.png" }
        ];

        // If clickk C > B  DONE
        const commentsCB = [
            { name: "Velizy2023", comment: "Lydia a raison Sarah les écoutes pas. Juste bloque les, te casse pas la tête", img: "../img/velizy.png" },
            { name: "Mwahahahah60", comment: "@Velizy2023 mdrr poto trql on rigole", img: "../img/h3.png" }, ,
            { name: "Laurie&Laurie", comment: "Mais ca va pas non @Mwahahahah60? Comment ca on rigole? ", img: "../img/laurie.jpg" },
            { name: "Laurie&Laurie", comment: "Poste ta photo on va voire si tu vas rigoler si des inconnus viennent t'insulter", img: "../img/laurie.jpg" },
            { name: "Monkey D. Itachi", comment: "Elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/h3.png" },
            { name: "LOL2018", comment: "Les jeunes de nos jours, je vous jure. A mon époque ... ", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "@Sarah juste bloque ces batards. Ils ont rien à faire de leur vie. Je suis sûr c'est des obus derrières leur écran. 🚫🚫🚫", img: "../img/laurie.jpg" }
        ];

        // If clickk C > C  DONE
        const commentsCC = [
            { name: "Lydia92", comment: "C'est bon les gars stop la...", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Un plus pâle, elle serais transparente. 👻", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha je pars 5 min et vous l'allumez la pauvre 😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Ca va? T'es pas malade cousine? Tu ressembles à Gasper 👻🤮", img: "../img/h3.png" }
        ];


        // Message options at round 3
        // If clickk A > A > A
        const commentsAAA = [
            { name: "Velizy2023", comment: "Elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];

        // If clickk A > A > B
        const commentsAAB = [
            { name: "Velizy2023", comment: "Après elle est mignonne vite fait...", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "DeathShot65", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Les gars c'est bon là...", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];

        // If clickk A > A > C
        const commentsAAC = [
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "DeathShot65", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];


        // If clickk A > B > A
        const commentsABA = [
            { name: "Velizy2023", comment: "J'avoue la go est maigre ouf quand même. Et elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];
        // If clickk A > B > B
        const commentsABB = [
            { name: "Velizy2023", comment: "Bloque les !", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Bloque les !💪", img: "../img/laurie.jpg" },
            { name: "SamLePompier", comment: "Bloque les !💪", img: "../img/h3.png" },

            { name: "Monkey D. Itachi", comment: "@SamLePompier D'où tu dis ça wsh, c'est toi qui a tout lancé 😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Lydia92", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Bloque les !💪", img: "../img/velizy.png" },
            { name: "Myriam_Moroco", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarasaracroche", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Mob3000", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "KilluaIsBadass", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarah", comment: "C'est bon je les ai bloqué. Merci infiniment pour tout le soutient 💖💖💪", img: "../img/h3.png" }
        ];

        // If clickk A > B > C
        const commentsABC = [
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "@Sarah ma chérie les écoute pas !", img: "../img/laurie.jpg" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Vous abusez là!", img: "../img/laurie.jpg" }
        ];

        // If clickk A > C > A
        const commentsACA = [
            { name: "Velizy2023", comment: "J'avoue la go est maigre de ouf quand même. Et elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/velizy.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];
        // If clickk A > C > B
        const commentsACB = [
            { name: "Velizy2023", comment: "Les gars stop la, c'est trop quand même, vous abusez", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "@Velizy2023 Et? 😂😂😂 Moi jdis elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "@Sarah ma chérie les écoute pas !", img: "../img/laurie.jpg" },
            { name: "Velizy2023", comment: "@Sarah juste bloque les", img: "../img/velizy.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Meuf même si tu nous bloques, on a tous au moins 2-3 autres comptes haha", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Vous abusez là!", img: "../img/laurie.jpg" }
        ];

        // If clickk A > C > C
        const commentsACC = [
            { name: "Popo89", comment: "J'avoue la go est maigre de ouf quand même. Et elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "KataFreeWin", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];


        // If clickk B > A > A
        const commentsBAA = [
            { name: "Velizy2023", comment: "Elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "DeathShot65", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];

        // If clickk B > A > B
        const commentsBAB = [
            { name: "Velizy2023", comment: "Après elle est mignonne vite fait... Sarah juste bloque les ", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Bloque les !💪", img: "../img/laurie.jpg" },
            { name: "SamLePompier", comment: "Bloque les !💪", img: "../img/h3.png" },

            { name: "Monkey D. Itachi", comment: "@SamLePompier D'où tu dis ça wsh, c'est toi qui a tout lancé 😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Lydia92", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Bloque les !💪", img: "../img/velizy.png" },
            { name: "KilluaIsBadass", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarah", comment: "C'est bon je les ai bloqué. Merci infiniment pour tout le soutient 💖💖💪", img: "../img/h3.png" }
        ];

        // If clickk B > A > C
        const commentsBAC = [
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "DeathShot65", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];

        // If clickk B > B > A
        const commentsBBA = [
            { name: "Velizy2023", comment: "@DeathShot65 😂😂😂😂😂😂😂😂😂😂", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Bloque les !💪", img: "../img/laurie.jpg" },
            { name: "SamLePompier", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "@SamLePompier D'où tu dis ça wsh, c'est toi qui a tout lancé 😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Lydia92", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Myriam_Moroco", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarasaracroche", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Mob3000", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "KilluaIsBadass", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarah", comment: "C'est bon je les ai bloqué. Merci infiniment pour tout le soutient 💖💖💪", img: "../img/h3.png" }
        ];

        // If clickk B > B > B
        const commentsBBB = [
            { name: "Velizy2023", comment: "Bloque les !", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Bloque les !💪", img: "../img/laurie.jpg" },
            { name: "SamLePompier", comment: "Bloque les !💪", img: "../img/h3.png" },

            { name: "Monkey D. Itachi", comment: "@SamLePompier D'où tu dis ça wsh, c'est toi qui a tout lancé 😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Lydia92", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Bloque les !💪", img: "../img/velizy.png" },
            { name: "Myriam_Moroco", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarasaracroche", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Mob3000", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "KilluaIsBadass", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarah", comment: "C'est bon je les ai bloqué. Merci infiniment pour tout le soutient 💖💖💪", img: "../img/h3.png" }
        ];
        // If clickk B > B > C
        const commentsBBC = [
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Bloque les !💪", img: "../img/h3.png" },

            { name: "Monkey D. Itachi", comment: "@SamLePompier D'où tu dis ça wsh, c'est toi qui a tout lancé 😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Lydia92", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Myriam_Moroco", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarasaracroche", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Mob3000", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "KilluaIsBadass", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarah", comment: "C'est bon je les ai bloqué. Merci infiniment pour tout le soutient 💖💖💪", img: "../img/h3.png" }
        ];

        // If clickk B > C > A
        const commentsBCA = [
            { name: "Velizy2023", comment: "Elle manque d'attention. 🤔", img: "../img/velizy.png" },
            { name: "DeathShot65", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/velizy.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];
        // If clickk B > C > B
        const commentsBCB = [
            { name: "Velizy2023", comment: "Bloque les !", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Bloque les !💪", img: "../img/h3.png" },

            { name: "Monkey D. Itachi", comment: "@SamLePompier D'où tu dis ça wsh, c'est toi qui a tout lancé 😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Lydia92", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Bloque les !💪", img: "../img/velizy.png" },
            { name: "Myriam_Moroco", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarasaracroche", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Mob3000", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "KilluaIsBadass", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarah", comment: "C'est bon je les ai bloqué. Merci infiniment pour tout le soutient 💖💖💪", img: "../img/h3.png" }
        ];
        // If clickk B > C > C
        const commentsBCC = [
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Bloque les !💪", img: "../img/h3.png" },

            { name: "Monkey D. Itachi", comment: "@SamLePompier D'où tu dis ça wsh, c'est toi qui a tout lancé 😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Lydia92", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Myriam_Moroco", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarasaracroche", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Mob3000", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "KilluaIsBadass", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarah", comment: "C'est bon je les ai bloqué. Merci infiniment pour tout le soutient 💖💖💪", img: "../img/h3.png" }
        ];

        // If clickk C > A > A
        const commentsCAA = [
            { name: "Velizy2023", comment: "Elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];

        // If clickk C > A > B 
        const commentsCAB = [
            { name: "Velizy2023", comment: "Après elle est mignonne vite fait...", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "DeathShot65", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Les gars c'est bon là...", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];

        // If clickk C > A > C 
        const commentsCAC = [
            { name: "Popo89", comment: "J'avoue la go est maigre de ouf quand même. Et elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "KataFreeWin", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];

        // If clickk C > B > A
        const commentsCBA = [
            { name: "Velizy2023", comment: "Elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "@Velizy2023 😂😂😂 Moi jdis elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "@Sarah ma chérie les écoute pas ! Juste bloque les", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh @Velizy2023 toi t'es un bon 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Meuf même si tu nous bloques, on a tous au moins 2-3 autres comptes haha", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Vous abusez là!", img: "../img/h3.png" }
        ];

        // If clickk C > B > B
        const commentsCBB = [
            { name: "Velizy2023", comment: "Sarah juste bloque les", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Bloque les !💪", img: "../img/h3.png" },

            { name: "Monkey D. Itachi", comment: "@SamLePompier D'où tu dis ça wsh, c'est toi qui a tout lancé 😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Lydia92", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Bloque les !💪", img: "../img/velizy.png" },
            { name: "KilluaIsBadass", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarah", comment: "C'est bon je les ai bloqué. Merci infiniment pour tout le soutient 💖💖💪", img: "../img/h3.png" }
        ];
        // If clickk C > B > C
        const commentsCBC = [
            { name: "PanthBotSup", comment: "Sarah juste bloque les", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Laurie&Laurie", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Bloque les !💪", img: "../img/h3.png" },

            { name: "Monkey D. Itachi", comment: "@SamLePompier D'où tu dis ça wsh, c'est toi qui a tout lancé 😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Lydia92", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "KilluaIsBadass", comment: "Bloque les !💪", img: "../img/h3.png" },
            { name: "Sarah", comment: "C'est bon je les ai bloqué. Merci infiniment pour tout le soutient 💖💖💪", img: "../img/h3.png" }
        ];

        // If clickk C > C > A
        const commentsCCA = [
            { name: "Velizy2023", comment: "Elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];

        // If clickk C > C > B
        const commentsCCB = [
            { name: "Velizy2023", comment: "Après elle est mignonne vite fait...", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "DeathShot65", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Velizy2023", comment: "Les gars c'est bon là...", img: "../img/velizy.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];

        // If clickk C > C > C
        const commentsCCC = [
            { name: "Pokemon123", comment: "Elle est pas juste anorexique, elle est moche aussi 🤮😂😂", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "Elle manque d'attention. 🤔", img: "../img/h3.png" },
            { name: "Pokemon123", comment: "Y a que sur Insta qu'elle peut la trouver. Chui sur elle ose même pas sortir avec ca tête d'ane. Et encore, j'insulte l'ane là", img: "../img/h3.png" },
            { name: "Monkey D. Itachi", comment: "😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "wsh 😂😂😂😂😂😂😂😂😂😂", img: "../img/h3.png" },
            { name: "SamLePompier", comment: "Hahaha c'est bon laisser la pauvre elle va se suicider😂😂😂😂😂", img: "../img/h3.png" },
            { name: "Mwahahahah60", comment: "Nan elle a pas les balls. Je les connais les meufs comme ca. Elle va pleurer vite, puis emme va allez écrire ses fantaisies sur Watpadd. ", img: "../img/h3.png" }
        ];










        // Target comment section
        let commentSection = document.querySelector('.game_comments_section');

        // Function to create a comment
        const createComment = ({ name, comment, img }) => {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('game_comments_comment');

            let imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.alt = "photo de profil commentaire";
            commentDiv.appendChild(imgElement);

            let commentText = document.createElement('div');
            commentText.classList.add('game_comments_comment_texte');
            commentDiv.appendChild(commentText);

            let h2 = document.createElement('h2');
            h2.textContent = name;
            commentText.appendChild(h2);

            let p = document.createElement('p');
            p.textContent = comment;
            commentText.appendChild(p);

            return commentDiv;


        };

        let selectedComments = null;

        function publishComments() {
            // Display hideScreen
            document.getElementById('hideScreen').style.display = 'flex';

            // Display selected comments
            displayComments(selectedComments);

            // If it's the end of the game, you might want to do something special here...
            if (round > 3) {
                console.log("End of the game!");
                // Get the div with id "endDiv"
    var endDiv = document.getElementById("endDiv");

    // Add the class "endDivFront"
    endDiv.classList.add("endDivFront");
            }
        }


        let allComments = {
            "commentsA": commentsA,
            "commentsB": commentsB,
            "commentsC": commentsC,
            "commentsAA": commentsAA,
            "commentsAB": commentsAB,
            "commentsAC": commentsAC,
            "commentsBA": commentsBA,
            "commentsBB": commentsBB,
            "commentsBC": commentsBC,
            "commentsCA": commentsCA,
            "commentsCB": commentsCB,
            "commentsCC": commentsCC,
            "commentsAAA": commentsAAA,
            "commentsAAB": commentsAAB,
            "commentsAAC": commentsAAC,
            "commentsABA": commentsABA,
            "commentsABB": commentsABB,
            "commentsABC": commentsABC,
            "commentsACA": commentsACA,
            "commentsACB": commentsACB,
            "commentsACC": commentsACC,
            "commentsBAA": commentsBAA,
            "commentsBAB": commentsBAB,
            "commentsBAC": commentsBAC,
            "commentsBBA": commentsBBA,
            "commentsBBB": commentsBBB,
            "commentsBBC": commentsBBC,
            "commentsBCA": commentsBCA,
            "commentsBCB": commentsBCB,
            "commentsBCC": commentsBCC,
            "commentsCAA": commentsCAA,
            "commentsCAB": commentsCAB,
            "commentsCAC": commentsCAC,
            "commentsCBA": commentsCBA,
            "commentsCBB": commentsCBB,
            "commentsCBC": commentsCBC,
            "commentsCCA": commentsCCA,
            "commentsCCB": commentsCCB,
            "commentsCCC": commentsCCC
        };


        function updateImgSrc(allComments) {
            Object.values(allComments).forEach((commentArray) => {
                commentArray.forEach((comment) => {
                    if (comment.name === 'Velizy2003') {
                        comment.img = '../img/velizy.png';
                    }
                    if (comment.name === 'SasaRacroche') {
                        comment.img = '../img/saracroche.jpeg';
                    }
                    if (comment.name === 'Lydia92') {
                        comment.img = '../img/lydia.jpeg';
                    }
                    if (comment.name === 'SamLePompier') {
                        comment.img = '../img/SamLePompier.png';
                    }
                    if (comment.name === 'Mwahahahah60') {
                        comment.img = '../img/mwahahaha.png';
                    }
                    if (comment.name === 'Monkey D. Itachi') {
                        comment.img = '../img/itachi.jpeg';
                    }
                    if (comment.name === 'DeathShot65') {
                        comment.img = '../img/DeathShot65.jpeg';
                    }
                    if (comment.name === 'Laurie&Laurie') {
                        comment.img = '../img/laurie.jpg';
                    }
                    if (comment.name === 'LOL2018') {
                        comment.img = '../img/lol.jpeg';
                    }
                    if (comment.name === 'Myriam_Moroco') {
                        comment.img = '../img/myriam.jpeg';
                    }
                    if (comment.name === 'Mob3000') {
                        comment.img = '../img/mob.jpeg';
                    }
                    if (comment.name === 'KilluaIsBadass') {
                        comment.img = '../img/killua.jpeg';
                    }
                    if (comment.name === 'Sarah') {
                        comment.img = '../img/sarah.png';
                    }
                    if (comment.name === 'Popo89') {
                        comment.img = '../img/popo.jpeg';
                    }
                    if (comment.name === 'KataFreeWin') {
                        comment.img = '../img/kata.jpeg';
                    }
                    if (comment.name === 'Sarasaracroche') {
                        comment.img = '../img/saracroche.jpeg';
                    }
                    if (comment.name === 'PanthBotSup') {
                        comment.img = '../img/panth.jpeg';
                    }
                    if (comment.name === 'Pokemon123') {
                        comment.img = '../img/charmender.png';
                    }



                });
            });
        }

        // Update image source for all comment arrays
        updateImgSrc(allComments);

        const videoGame = document.getElementById('videoGame');

        const videoURLs = {
            commentsA: '../img/A.MOV',
            commentsB: '../img/whatshappening.MOV',
            commentsC: '../img/A.MOV',
            commentsAA: '../img/AA.MOV',
            commentsAB: '../img/AA.MOV',
            commentsAC: '../img/AA.MOV',
            commentsBA: '../img/AA.MOV',
            commentsBB: '../img/sadThenHappy.MOV',
            commentsBC: '../img/AA.MOV',
            commentsCA: '../img/AA.MOV',
            commentsCB: '../img/sadThenHappy.MOV',
            commentsCC: '../img/AA.MOV',
            commentsAAA: '../img/EndingSad.MOV',
            commentsAAB: '../img/EndingSad.MOV',
            commentsAAC: '../img/EndingSad.MOV',
            commentsABA: '../img/EndingSad.MOV',
            commentsABB: '../img/Happy.MOV',
            commentsABC: '../img/EndingSad.MOV',
            commentsACA: '../img/EndingSad.MOV',
            commentsACB: '../img/EndingSad.MOV',
            commentsACC: '../img/EndingSad.MOV',
            commentsBAA: '../img/EndingSad.MOV',
            commentsBAB: '../img/Happy.MOV',
            commentsBAC: '../img/EndingSad.MOV',
            commentsBBA: '../img/Happy.MOV',
            commentsBBB: '../img/Happy.MOV',
            commentsBBC: '../img/Happy.MOV',
            commentsBCA: '../img/EndingSad.MOV',
            commentsBCB: '../img/Happy.MOV',
            commentsBCC: '../img/Happy.MOV',
            commentsCAA: '../img/EndingSad.MOV',
            commentsCAB: '../img/EndingSad.MOV',
            commentsCAC: '../img/EndingSad.MOV',
            commentsCBA: '../img/EndingSad.MOV',
            commentsCBB: '../img/Happy.MOV',
            commentsCBC: '../img/Happy.MOV',
            commentsCCA: '../img/EndingSad.MOV',
            commentsCCB: '../img/EndingSad.MOV',
            commentsCCC: '../img/EndingSad.MOV'
        };



        document.getElementById('buttonA').addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('ajouterCommentaire').textContent = this.textContent;
            currentChoice += "A";
            console.log('Current Choice:', currentChoice); // log the current choice
            selectedComments = allComments[currentChoice]; // Get comments array based on the choice sequence
            console.log('Selected Comments:', selectedComments);
            round++; // increment round
            buttonClicked = true; // Set the button clicked flag to true
            commentsPublished = false; // Reset the comments published flag
            publishComments();
            commentsPublished = true; // Set the comments published flag to true
            updateVideoSource(currentChoice);
        });

        document.getElementById('buttonB').addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('ajouterCommentaire').textContent = this.textContent;
            currentChoice += "B";
            console.log('Current Choice:', currentChoice); // log the current choice
            selectedComments = allComments[currentChoice]; // Get comments array based on the choice sequence
            console.log('Selected Comments:', selectedComments);
            round++; // increment round
            buttonClicked = true; // Set the button clicked flag to true
            commentsPublished = false; // Reset the comments published flag
            publishComments();
            commentsPublished = true; // Set the comments published flag to true
            updateVideoSource(currentChoice);
        });

        document.getElementById('buttonC').addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('ajouterCommentaire').textContent = this.textContent;
            currentChoice += "C";
            console.log('Current Choice:', currentChoice); // log the current choice
            selectedComments = allComments[currentChoice]; // Get comments array based on the choice sequence
            console.log('Selected Comments:', selectedComments);
            round++; // increment round
            buttonClicked = true; // Set the button clicked flag to true

            commentsPublished = false; // Reset the comments published flag
            publishComments();
            commentsPublished = true; // Set the comments published flag to true
            updateVideoSource(currentChoice);
        });

        function updateVideoSource(choice) {
            const videoSrc = videoURLs[choice];
            if (videoSrc) {
                videoGame.setAttribute('src', videoSrc);
            }
        }






        function displayComments(comments) {
            // loop over comments and add them to the page
            let i = 0;
            let interval = setInterval(() => {
                if (i >= comments.length) {
                    clearInterval(interval);
                    // Hide hideScreen
                    document.getElementById('hideScreen').style.display = 'none';
                    return;
                }

                let commentDiv = createComment(comments[i]);
                commentSection.appendChild(commentDiv);

                // smoothly scroll to the bottom of the comment section
                commentSection.scrollTop = commentSection.scrollHeight;
                i++;
            }, 1500);
        }

        window.onload = function () {
            // Scroll to the bottom of the comment section


            // Create initial comments
            let i = 0;
            let interval = setInterval(() => {
                if (i >= commentsStart.length) {
                    clearInterval(interval);
                    return;
                }

                let commentDiv = createComment(commentsStart[i]);
                commentSection.appendChild(commentDiv);

                // smoothly scroll to the bottom of the comment section
                commentSection.scrollTop = commentSection.scrollHeight;
                i++;
            }, 1000); setTimeout(() => {
                document.querySelector('#game_choices').classList.add('animate-decaleDroite');
                document.querySelector('#game_interface').classList.add('animate-decaleGauche');
            }, 4000);
        };
