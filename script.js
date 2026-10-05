/* =====================================================
   RECIPE OPENING
===================================================== */

function openRecipe(food) {

    window.location.href =
        "recipe.html?food=" + encodeURIComponent(food);

}


/* =====================================================
   SEARCH
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("searchInput");

    const cards =
        document.querySelectorAll(".recipe-card");


    cards.forEach(function (card) {

        const image =
            card.querySelector("img");

        if (image) {

            card.style.setProperty(
                "--food-image",
                "url('" + image.src + "')"
            );

        }

    });


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const search =
                    searchInput.value
                    .trim()
                    .toLowerCase();


                cards.forEach(function (card) {

                    const food =
                        card
                        .getAttribute("data-food")
                        .toLowerCase();


                    const title =
                        card
                        .querySelector("h3")
                        .textContent
                        .toLowerCase();


                    if (
                        food.includes(search) ||
                        title.includes(search)
                    ) {

                        card.style.display =
                            "block";

                    } else {

                        card.style.display =
                            "none";

                    }

                });

            }
        );

    }

});
