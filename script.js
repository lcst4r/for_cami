/* =========================================================
   CAMI GIFT HALL
   SCRIPT.JS
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       GET ELEMENTS
    ===================================================== */

    const giftHall =
        document.getElementById("giftHall");

    const cardOverlay =
        document.getElementById("cardOverlay");

    const giftCard =
        document.getElementById("giftCard");

    const closeCard =
        document.getElementById("closeCard");

    const friendName =
        document.getElementById("friendName");

    const friendMessage =
        document.getElementById("friendMessage");

    const giftImage =
        document.getElementById("giftImage");

    const imageLoading =
        document.getElementById("imageLoading");

    const typingCursor =
        document.getElementById("typingCursor");

    const celebrationLayer =
        document.getElementById("celebrationLayer");

    const starsLayer =
        document.getElementById("starsLayer");


    /* =====================================================
       CHECK EVERYTHING
    ===================================================== */

    if (!giftHall) {
        console.error("ERROR: #giftHall was not found.");
        return;
    }

    if (!cardOverlay) {
        console.error("ERROR: #cardOverlay was not found.");
        return;
    }

    if (!giftCard) {
        console.error("ERROR: #giftCard was not found.");
        return;
    }

    if (!closeCard) {
        console.error("ERROR: #closeCard was not found.");
        return;
    }

    if (!friendName) {
        console.error("ERROR: #friendName was not found.");
        return;
    }

    if (!friendMessage) {
        console.error("ERROR: #friendMessage was not found.");
        return;
    }

    if (!giftImage) {
        console.error("ERROR: #giftImage was not found.");
        return;
    }


    console.log(
        "♡ CAMI GIFT HALL INITIALIZED ♡"
    );


    /* =====================================================
       GIFT DATA
       
       EXACT FILENAMES.
    ===================================================== */

    const giftsData = {

        Masha: {
            image: "mashagift.png",
            message:
                "Happy birthday to our key to happiness 🔆     On this day, the world welcomes someone who brings joy to everyone without even doing anything  , Her name makes everyone eagerly anticipate her  ! 🪷        في هذا اليوم انولدت كامي الحلوة عشان تخلينا نفرح اكثر في كل مرة هي تكون موجودة بيننا  ، سبحان من سو​اها وخلاها جميلة داخليا وخارجيا، خلوقة، حنونة، لطيفة، ذكية، وجه جميل وقبول اجمل، انا سعيدة لاني اشوفك تكبري قدامي وكل مرة تصيري احلى وانجح، اسأل الله ان يخلي هاي السنة خفيفة ظريفة عليك، ويرزقك السعادة اللي تستاهليها دائماً 💓           - masha holland"
        },

        Zahraa: {
            image: "zahragift.png",
            message:
                "Happy Birthday, Camilishouti , I hope you have the best day and that this year brings you happiness, success, and beautiful memories. You deserve all the good things life has to offer. Have an amazing birthday and enjoy every moment."
        },

        Heather: {
            image: "heathergift.png",
            message:
                "Happy birthday to the sweetest little Cami! We've been friends for such a long time that I don't even remember when our friendship started but I remember how it did, when I was the purple jisoo and u were the pink Rosé, it was one of the best things that happened to me in the fakeland. I love how we always find our ways back to each other no matter how long we separate because you're the most extraordinary girl Cami, as clear as a musical note and as sincere as a melody, you're the music that's been playing in my head since the first day we met~. I love all our memories, ships, silly little moments, our breakdowns and how we cherish each other. You really mean a lot to me and you're very special to my heart, I hope our friendship never ends and I promise I'll be there in every birthday of URS until we meet✨."
        },

        Angelos: {
            image: "angelgift.png",
            message:
                "Sweetest 18 to my lovely girl <3 The caramel to my vanilla, I couldn't believe that i found you after 3 years.. I was there for u in your bday 3 years ago and it was the day we became friends, also :3 Your bday is special cuz that's the day u were born and as a bonus the day we became friends >-< Love u sm my legal adult ♡"
        },

        Fairy: {
            image: "fairygift.png",
            message:
                "𝑱𝒐𝒚𝒆𝒖𝒙 𝒂𝒏𝒏𝒊𝒗𝒆𝒓𝒔𝒂𝒊𝒓𝒆 𝒎𝒂 𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒔𝒆 𝑪𝒂𝒎𝒊, 𝒋’𝒕𝒆 𝒔𝒐𝒖𝒉𝒂𝒊𝒕𝒆 𝒖𝒏𝒆 𝒏𝒐𝒖𝒗𝒆𝒍𝒍𝒆 𝒂𝒏𝒏é𝒆 𝒑𝒍𝒆𝒊𝒏𝒆 𝒅𝒆 𝒃𝒐𝒏𝒉𝒆𝒖𝒓, 𝒔𝒂𝒏𝒔 𝒑𝒓𝒊𝒔𝒆 𝒅𝒆 𝒕ê𝒕𝒆 𝒆𝒕 𝒓𝒆𝒎𝒑𝒍𝒊𝒆 𝒅𝒆 𝒓é𝒖𝒔𝒔𝒊𝒕𝒆𝒔 𝒒𝒖𝒊 𝒕𝒆 𝒓𝒆𝒏𝒅𝒓𝒐𝒏𝒕 𝒉𝒆𝒖𝒓𝒆𝒖𝒔𝒆 𝒆𝒕 𝒒𝒖𝒊 𝒏𝒐𝒖𝒔 𝒇𝒆𝒓𝒐𝒏𝒕 𝒑𝒍𝒂𝒊𝒔𝒊𝒓 à 𝒏𝒐𝒖𝒔 𝒂𝒖𝒔𝒔𝒊, 𝒋’𝒔𝒖𝒊𝒔 𝒗𝒓𝒂𝒊𝒎𝒆𝒏𝒕 𝒕𝒓𝒐𝒑 𝒄𝒐𝒏𝒕𝒆𝒏𝒕𝒆 𝒅𝒆 𝒕𝒆 𝒄𝒐𝒏𝒏𝒂î𝒕𝒓𝒆 𝒆𝒕 𝒅𝒆 𝒑𝒐𝒖𝒗𝒐𝒊𝒓 𝒕𝒆 𝒔𝒐𝒖𝒉𝒂𝒊𝒕𝒆𝒓 𝒕𝒐𝒏 𝒂𝒏𝒏𝒊𝒗 ♡."
        },

        Ellara: {
            image: "mygift.png",
            message:
                "my sweet cami and my forever after best friend and my pink bunny princess beauty belle golden shiny lady, today is the day you were born and without you I'd be soooo lonely, you're the only thing I'm so scared to lose and I can't wait to see you one day, I hope all the good things come for you and I just wanted you to know that no matter what you'll always be my favorite person and no one will replace your place in my heart, I never told you that and you don't know how much I adore you cause you're the prettiest girl I've ever seen and I'll be on your side in the worst days, on the happiest days in your life, I'll be there any time you need me and if you wanted the moon I'll learn to fly and I mean it because you deserve the moon and the sun and all the stars and the whole planet system, I hope you succeed this school year and get the best grades as you wish and I know you can do it because that's you duh, you always get what you want, I always see you as my sunshine because since you came into my life I've never been happier, you always take care of me and make sure I'm okay, you hate the people I hate and accept me as who I am not the version of me that everyone see in public, you're the most precious thing and I hope we stay friends forever even after death, enjoy your birthday caramel ⊹ ࣪ ˖"
        },

        Nari: {
            image: "narigift.png",
            message:
                "كامي حلوتي جميلتي المزة العسولة عيد ميلاد سعيد كل عام وانتِ بخير اتمنالك كل الفرح و السعادة الله يخليك لي واشوفك محققة كل احلامك وبيجي اليوم يلي نلتقي فيه وبعيطك اقوى حضن وبوسات يا اجمل والطف واحن مغربية قابلتها فحياتي فخورة انك صديقتي وماندمت اني تعرفت عليكِ ابدا بحبك"
        }

    };


    /* =====================================================
       STATE
    ===================================================== */

    let typingInterval = null;

    let currentGift = null;


    /* =====================================================
       BACKGROUND STARS
    ===================================================== */

    function createStars() {

        if (!starsLayer) {
            return;
        }

        const symbols = [
            "✦",
            "✧",
            "⋆",
            "˚",
            "·"
        ];

        for (
            let i = 0;
            i < 55;
            i++
        ) {

            const star =
                document.createElement("span");

            star.className =
                "background-star";

            star.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";

            star.style.setProperty(
                "--size",
                (
                    6 +
                    Math.random() * 12
                ) + "px"
            );

            star.style.setProperty(
                "--opacity",
                (
                    0.15 +
                    Math.random() * 0.55
                )
            );

            star.style.setProperty(
                "--duration",
                (
                    2 +
                    Math.random() * 4
                ) + "s"
            );

            star.style.animationDelay =
                (
                    -Math.random() * 5
                ) + "s";

            starsLayer.appendChild(
                star
            );
        }
    }


    createStars();


    /* =====================================================
       GET GIFT ELEMENT
    ===================================================== */

    function getGiftButton(target) {

        if (
            target instanceof Element
        ) {

            const button =
                target.closest(".gift");

            if (button) {
                return button;
            }

        }

        return null;
    }


    /* =====================================================
       OPEN GIFT
    ===================================================== */

    function openGift(giftButton) {

        if (!giftButton) {
            return;
        }


        const name =
            giftButton.dataset.name;


        if (!name) {

            console.error(
                "Gift has no data-name."
            );

            return;
        }


        const data =
            giftsData[name];


        if (!data) {

            console.error(
                "No gift data found for:",
                name
            );

            return;
        }


        console.log(
            "Opening gift:",
            name
        );


        currentGift =
            giftButton;


        /* ================================================
           STOP OLD TYPING
        ================================================= */

        if (typingInterval) {

            clearInterval(
                typingInterval
            );

            typingInterval = null;

        }


        /* ================================================
           RESET CARD
        ================================================= */

        friendName.textContent =
            name;

        friendMessage.textContent =
            "";


        if (typingCursor) {

            typingCursor.classList.remove(
                "hidden"
            );

        }


        /* ================================================
           RESET IMAGE
        ================================================= */

        giftImage.classList.remove(
            "loaded"
        );

        giftImage.removeAttribute(
            "src"
        );

        giftImage.alt =
            name + "'s gift";


        if (imageLoading) {

            imageLoading.classList.remove(
                "hidden"
            );

            imageLoading.textContent =
                "✦ opening your surprise... ✦";

        }


        /* ================================================
           OPEN CARD IMMEDIATELY
        ================================================= */

        cardOverlay.classList.add(
            "open"
            );

        cardOverlay.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";


        /* ================================================
           FIREWORKS
        ================================================= */

        createFireworks(
            giftButton
        );


        /* ================================================
           LOAD EXACT IMAGE
        ================================================= */

        loadImage(
            data.image,
            name
        );


        /* ================================================
           TYPE MESSAGE
        ================================================= */

        setTimeout(
            function () {

                typeMessage(
                    data.message
                );

            },
            500
        );

    }


    /* =====================================================
       LOAD IMAGE
       
       This uses EXACTLY the filename we specified.
       No fake fallback filenames.
    ===================================================== */

    function loadImage(
        imagePath,
        name
    ) {

        const testImage =
            new Image();


        testImage.onload =
            function () {

                console.log(
                    "IMAGE FOUND:",
                    imagePath
                );


                giftImage.onload =
                    function () {

                        giftImage.classList.add(
                            "loaded"
                        );

                    };


                giftImage.src =
                    imagePath;


                if (imageLoading) {

                    imageLoading.classList.add(
                        "hidden"
                    );

                }

            };


        testImage.onerror =
            function () {

                console.error(
                    "IMAGE NOT FOUND:",
                    imagePath
                );


                if (imageLoading) {

                    imageLoading.textContent =
                        "♡ gift image could not be found ♡";

                }

            };


        testImage.src =
            imagePath;

    }


    /* =====================================================
       TYPEWRITER
    ===================================================== */

    function typeMessage(text) {

        if (typingInterval) {

            clearInterval(
                typingInterval
            );

        }


        friendMessage.textContent =
            "";


        if (typingCursor) {

            typingCursor.classList.remove(
                "hidden"
            );

        }


        let index = 0;


        typingInterval =
            setInterval(
                function () {

                    if (
                        index >=
                        text.length
                    ) {

                        clearInterval(
                            typingInterval
                        );

                        typingInterval =
                            null;


                        setTimeout(
                            function () {

                                if (
                                    typingCursor
                                ) {

                                    typingCursor.classList.add(
                                        "hidden"
                                    );

                                }

                            },
                            700
                        );


                        return;
                    }


                    friendMessage.textContent +=
                        text.charAt(index);


                    index++;


                },
                30
            );

    }


    /* =====================================================
       FIREWORKS
    ===================================================== */

    function createFireworks(
    giftButton
    ) {

        if (!celebrationLayer) {
            return;
        }


        const rect =
            giftButton.getBoundingClientRect();


        const x =
            rect.left +
            rect.width / 2;


        const y =
            rect.top +
            rect.height / 2;


        const symbols = [
            "✦",
            "✧",
            "♡",
            "⋆",
            "✶"
        ];


        const colors = [
            "#f4d38b",
            "#ffd8e7",
            "#ffffff",
            "#dfc2ea",
            "#efb2ca"
        ];


        for (
            let i = 0;
            i < 40;
            i++
        ) {

            const particle =
                document.createElement("span");


            particle.className =
                "magic-particle";


            particle.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            const angle =
                Math.random() *
                Math.PI *
                2;


            const distance =
                80 +
                Math.random() *
                230;


            const dx =
                Math.cos(angle) *
                distance;


            const dy =
                Math.sin(angle) *
                distance;


            particle.style.setProperty(
                "--x",
                x + "px"
            );


            particle.style.setProperty(
                "--y",
                y + "px"
            );


            particle.style.setProperty(
                "--dx",
                dx + "px"
            );


            particle.style.setProperty(
                "--dy",
                dy + "px"
            );


            particle.style.setProperty(
                "--rotation",
                (
                    -180 +
                    Math.random() *
                    360
                ) + "deg"
            );


            particle.style.setProperty(
                "--duration",
                (
                    0.8 +
                    Math.random() *
                    0.7
                ) + "s"
            );


            particle.style.setProperty(
                "--size",
                (
                    10 +
                    Math.random() *
                    13
                ) + "px"
            );


            particle.style.setProperty(
                "--color",
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ]
            );


            celebrationLayer.appendChild(
                particle
            );


            setTimeout(
                function () {

                    particle.remove();

                },
                1700
            );

        }


        /* =================================================
           CENTER FLASH
        ================================================== */

        const flash =
            document.createElement("div");


        flash.style.position =
            "fixed";

        flash.style.left =
            x + "px";

        flash.style.top =
            y + "px";

        flash.style.width =
            "18px";

        flash.style.height =
            "18px";

        flash.style.borderRadius =
            "50%";

        flash.style.background =
            "rgba(255,241,195,0.95)";

        flash.style.boxShadow =
            "0 0 35px 15px rgba(255,221,160,0.55)";

        flash.style.pointerEvents =
            "none";

        flash.style.transform =
            "translate(-50%, -50%) scale(0.2)";

        flash.style.transition =
            "transform 0.7s ease, opacity 0.7s ease";


        celebrationLayer.appendChild(
            flash
        );


        requestAnimationFrame(
            function () {

                flash.style.transform =
                "translate(-50%, -50%) scale(7)";

                flash.style.opacity =
                    "0";

            }
        );


        setTimeout(
            function () {

                flash.remove();

            },
            800
        );

    }


    /* =====================================================
       CLOSE GIFT
    ===================================================== */

    function closeGift() {

        console.log(
            "Closing gift."
        );


        if (typingInterval) {

            clearInterval(
                typingInterval
            );

            typingInterval =
                null;

        }


        cardOverlay.classList.remove(
            "open"
        );


        cardOverlay.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";


        if (typingCursor) {

            typingCursor.classList.add(
                "hidden"
            );

        }


        currentGift =
            null;


        setTimeout(
            function () {

                if (
                    !cardOverlay.classList.contains(
                        "open"
                    )
                ) {

                    friendMessage.textContent =
                        "";

                    giftImage.removeAttribute(
                        "src"
                    );

                    giftImage.classList.remove(
                        "loaded"
                    );

                }

            },
            450
        );

    }


    /* =====================================================
       THE IMPORTANT PART:
       ONE EVENT LISTENER FOR THE WHOLE GIFT HALL
       
       This is deliberately done this way so the gift
       buttons cannot randomly lose their click listeners.
    ===================================================== */

    giftHall.addEventListener(
        "click",
        function (event) {

            const giftButton =
                getGiftButton(
                    event.target
                );


            if (!giftButton) {
                return;
            }


            event.preventDefault();


            openGift(
                giftButton
            );

        }
    );


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    closeCard.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            closeGift();

        }
    );


    /* =====================================================
       CLICK OUTSIDE CARD
    ===================================================== */

    cardOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                cardOverlay
            ) {

                closeGift();

            }

        }
    );


    /* =====================================================
       ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                cardOverlay.classList.contains(
                    "open"
                )
            ) {

                closeGift();

            }

        }
    );


    /* =====================================================
       KEYBOARD ACCESS
    ===================================================== */

    giftHall.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {

                return;

            }


            const giftButton =
                getGiftButton(
                    event.target
                );


            if (!giftButton) {
                return;
            }


            event.preventDefault();
            openGift(
                giftButton
            );

        }
    );


    /* =====================================================
       PREVENT DRAGGING
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(
            function (image) {

                image.addEventListener(
                    "dragstart",
                    function (event) {

                        event.preventDefault();

                    }
                );

            }
        );


    /* =====================================================
       FINAL CHECK
    ===================================================== */

    const allGifts =
        document.querySelectorAll(
            ".gift"
        );


    console.log(
        "Total gifts detected:",
        allGifts.length
    );


    allGifts.forEach(
        function (gift) {

            console.log(
                "Gift ready:",
                gift.dataset.name,
                "| image:",
                gift.dataset.image
            );

        }
    );


    console.log(
        "♡ Gift hall is ready. ♡"
    );

});