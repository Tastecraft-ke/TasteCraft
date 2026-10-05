/* =====================================================
   TASTECRAFT FOOD DATABASE
===================================================== */

const recipes = {


    pilau: {

        title: "Pilau",

        category: "KENYAN CUISINE",

        image: "images/pilau.jpg",

        description:
            "Aromatic spiced rice prepared with meat, onions and a blend of fragrant spices.",

        cookTime:
            "Approx. 1 hour",

        difficulty:
            "Medium",


        ingredients: [

            "Rice",

            "Beef or chicken",

            "Onions",

            "Garlic",

            "Ginger",

            "Pilau masala",

            "Cooking oil",

            "Salt",

            "Water"

        ],


        instructions: [

            "Wash and prepare the rice.",

            "Heat cooking oil and cook the onions until golden brown.",

            "Add garlic, ginger and pilau spices.",

            "Add the meat and cook until properly browned.",

            "Add water and bring the mixture to a boil.",

            "Add the rice and stir carefully.",

            "Cover and cook until the rice is tender and the liquid has been absorbed.",

            "Allow the pilau to rest before serving."

        ],


        benefits: [

            "Rice provides carbohydrates that can contribute to daily energy needs.",

            "Meat can provide protein and nutrients such as iron and vitamin B12.",

            "Onions and spices can contribute small amounts of micronutrients and plant compounds.",

            "The nutritional value depends strongly on the ingredients and portion size."

        ],


        risks: [

            "Large portions may provide more calories than needed.",

            "A recipe containing substantial oil or fatty meat may be high in calories and saturated fat.",

            "Excessive salt can contribute to high sodium intake.",

            "Food should be cooked and stored safely to reduce the risk of foodborne illness."

        ],


        nutrition: {

            "Carbohydrates": "Main energy source",

            "Protein": "Depends on meat used",

            "Fat": "Depends on oil and meat",

            "Sodium": "Depends on salt",

            "Calories": "Depends on portion and ingredients"

        }

    },


    chapati: {

        title: "Chapati",

        category: "KENYAN CUISINE",

        image: "images/chapati.jpg",

        description:
            "A soft layered flatbread made primarily from wheat flour, water and cooking fat or oil.",

        cookTime:
            "Approx. 45 minutes",

        difficulty:
            "Medium",


        ingredients: [

            "Wheat flour",

            "Water",

            "Cooking oil",

            "Salt"

        ],


        instructions: [

            "Place wheat flour in a bowl.",

            "Add salt and mix.",

            "Gradually add water and knead into a soft dough.",

            "Allow the dough to rest.",

            "Divide the dough into portions.",

            "Roll each portion and apply a small amount of oil.",

            "Fold and roll into layers.",

            "Cook on a heated pan until both sides are properly browned."

        ],


        benefits: [

            "Wheat flour provides carbohydrates for energy.",

            "Whole-wheat flour can provide more fibre than refined flour.",

            "Chapati can contribute to a balanced meal when paired with vegetables and protein."

        ],


        risks: [

            "Chapati can become calorie-dense when large amounts of oil or fat are used.",

            "Refined flour provides less fibre than whole-wheat flour.",

            "People with wheat allergy or gluten-related conditions may need to avoid wheat-based chapati.",

            "Large portions can contribute substantially to total energy intake."

        ],


        nutrition: {

            "Carbohydrates": "Main energy source",

            "Protein": "Primarily from wheat",

            "Fibre": "Higher when whole-wheat flour is used",

            "Fat": "Depends on oil used",

            "Calories": "Depends on size and preparation"

        }

    },


    "nyama-choma": {

        title: "Nyama Choma",

        category: "KENYAN CUISINE",

        image: "images/nyama-choma.jpg",

        description:
            "Grilled meat prepared over heat and commonly served with vegetables or traditional side dishes.",

        cookTime:
            "Approx. 45–90 minutes",

        difficulty:
            "Medium",


        ingredients: [

            "Goat meat or beef",

            "Salt",

            "Water",

            "Optional herbs and spices"

        ],


        instructions: [

            "Clean and prepare the meat safely.",

            "Season the meat according to preference.",

            "Prepare a clean grill and ensure sufficient heat.",

            "Cook the meat thoroughly while turning regularly.",

            "Check that the meat reaches a safe level of doneness.",

            "Allow the cooked meat to rest before serving."

        ],


        benefits: [

            "Meat is a source of high-quality protein.",

            "Red meat can provide nutrients such as iron, zinc and vitamin B12.",

            "Protein can contribute to maintenance of muscle and body tissues."

        ],


        risks: [

            "Some cuts of meat can contain substantial saturated fat.",

            "Frequent consumption of large amounts of processed or heavily charred meat should be limited.",

            "Very high heat can cause surface charring, so meat should not be excessively burnt.",

            "Raw and cooked meat should be handled separately to reduce contamination risk."

        ],


        nutrition: {

            "Protein": "High-quality protein source",

            "Iron": "Important mineral found in meat",

            "Zinc": "Supports normal body functions",

            "Fat": "Varies by cut",

            "Calories": "Depends on cut and portion"

        }

    },


    githeri: {

        title: "Githeri",

        category: "KENYAN CUISINE",

        image: "images/githeri.jpg",

        description:
            "A traditional Kenyan dish made from maize and beans and often prepared with vegetables and seasonings.",

        cookTime:
            "Approx. 1 hour",

        difficulty:
            "Easy",


        ingredients: [

            "Maize",

            "Beans",

            "Onions",

            "Tomatoes",

            "Cooking oil",

            "Salt",

            "Water",

            "Optional vegetables"

        ],


        instructions: [

            "Sort and wash the maize and beans.",

            "Cook them until tender.",

            "Prepare onions and tomatoes in a cooking pot.",

            "Add the cooked maize and beans.",

            "Add vegetables and seasonings.",

            "Add a suitable amount of water.",

            "Simmer until the flavours combine and the vegetables are properly cooked."

        ],


        benefits: [

            "Beans provide plant protein.",

            "Beans and maize can provide dietary fibre.",

            "The combination provides carbohydrates and plant-based nutrients.",

            "Adding vegetables can increase the variety of vitamins and minerals."

        ],


        risks: [

            "Large portions can still provide substantial calories.",

            "Adding excessive salt can increase sodium intake.",

            "Some people may experience gas or bloating from beans.",

            "Beans and maize should be adequately cooked for safety and digestibility."

        ],


        nutrition: {

            "Protein": "Mainly from beans",

            "Fibre": "Good source when beans and whole maize are used",

            "Carbohydrates": "Main energy source",

            "Fat": "Depends on cooking oil",

            "Calories": "Depends on portion and additions"

        }

    }

};



/* =====================================================
   GET SELECTED FOOD
===================================================== */

function getSelectedFood() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return params.get("food");

}



/* =====================================================
   DISPLAY RECIPE
===================================================== */

function displayRecipe() {

    const food =
        getSelectedFood();


    const recipe =
        recipes[food];


    if (!recipe) {

        window.location.href =
            "index.html";

        return;

    }


    document.title =
        "TasteCraft | " + recipe.title;


    document.getElementById(
        "recipeTitle"
    ).textContent =
        recipe.title;


    document.getElementById(
        "recipeCategory"
    ).textContent =
        recipe.category;


    document.getElementById(
        "recipeDescription"
    ).textContent =
        recipe.description;


    document.getElementById(
        "cookTime"
    ).textContent =
        recipe.cookTime;


    document.getElementById(
        "difficulty"
    ).textContent =
        recipe.difficulty;



    /* ================= IMAGE ================= */

    const mainImage =
        document.getElementById(
            "recipeImage"
        );


    mainImage.src =
        recipe.image;


    mainImage.alt =
        recipe.title;



    /* ================= BLURRED BACKGROUND ================= */

    document.getElementById(
        "recipeBackground"
    ).style.backgroundImage =
        "url('" + recipe.image + "')";



    /* ================= INGREDIENTS ================= */

    const ingredientList =
        document.getElementById(
            "ingredients"
        );


    ingredientList.innerHTML = "";


    recipe.ingredients.forEach(
        function (ingredient) {

            const li =
                document.createElement("li");


            li.textContent =
                ingredient;


            ingredientList.appendChild(li);

        }
    );



    /* ================= INSTRUCTIONS ================= */

    const instructionList =
        document.getElementById(
            "instructions"
        );


    instructionList.innerHTML = "";


    recipe.instructions.forEach(
        function (instruction) {

            const li =
                document.createElement("li");


            li.textContent =
                instruction;


            instructionList.appendChild(li);

        }
    );



    /* ================= BENEFITS ================= */

    const benefitList =
        document.getElementById(
            "benefits"
        );


    benefitList.innerHTML = "";


    recipe.benefits.forEach(
        function (benefit) {

            const li =
                document.createElement("li");


            li.textContent =
                benefit;


            benefitList.appendChild(li);

        }
    );



    /* ================= RISKS ================= */

    const riskList =
        document.getElementById(
            "risks"
        );


    riskList.innerHTML = "";


    recipe.risks.forEach(
        function (risk) {

            const li =
                document.createElement("li");


            li.textContent =
                risk;


            riskList.appendChild(li);

        }
    );



    /* ================= NUTRITION ================= */

    const nutrition =
        document.getElementById(
            "nutrition"
        );


    nutrition.innerHTML = "";


    Object.entries(
        recipe.nutrition
    ).forEach(
        function ([name, value]) {

            const div =
                document.createElement("div");


            div.className =
                "nutrition-item";


            div.innerHTML = `

                <strong>
                    ${name}
                </strong>

                <span>
                    ${value}
                </span>

            `;


            nutrition.appendChild(div);

        }
    );

}



/* =====================================================
   START
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    displayRecipe
);
