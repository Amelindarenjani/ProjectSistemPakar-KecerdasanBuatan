const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function checkIngredients() {
  const category = document.getElementById("category").value;
  const ingredients = document
    .getElementById("ingredients")
    .value.toLowerCase();
  const resultDiv = document.getElementById("result");

  // Fungal acne causing ingredients
  const fungalAcneIngredients = [
    "stearic acid",
    "palmitic acid",
    "oleic acid",
    "ascorbyl palmitate",
    "ascorbyl tetraisopalmitate",
    "isopropyl myristate",
    "isopropyl palmitate",
    "glyceryl stearate",
    "polysorbate 20",
    "polysorbate 40",
    "polysorbate 60",
    "polysorbate 80",
    "lechitin",
    "retynyl palmitate",
    "peg-100 stearate",
    "peg- 40 stearate",
    "glyceryl monostearate",
    "sorbitan laurate",
    "peg- 10 isostearate",
    "lauric acid",
    "polyglyceryl-3 diisostearate",
    "shea butter",
    "ethylhexyl palmitate",
    "peg- 90 isostearate",
    "sucrose cocoate",
    "peg-7 glyceryl cocoate",
    "glyceryl oleate",
    "hexyl laurate",
    "glycol distearate",
    "glyceryl laurate",
    "hydrogenated castor oil",
    "mangifera indica (mango) seed butter",
    "sorbitan trioleate",
    "cocos nucifera (coconut) oil",
    "hydrogenated coco glyserides",
    "peg-20 glyceryl triisostearate",
    "decyl oleate",
    "trihydroxystearin",
    "hydrogenated palm glyserides citrate",
    "peg-35 castor oil",
    "peg-8 laurate",
    "methyl glucose sesquistearate",
    "peg- 40 castor oil",
    "peg-60 hydrogenated castor oil",
    "saponified cocos nucifera (coconut oil)",
    "acetylated glycol stearate",
    "galactomyces ferment filtrate",
    "polyglyceryl-10 laurate",
    "polyglyceryl-10 stearate",
    "polyglyceryl-10 myristate",
    "polyglyceryl-10 oleate",
    "myristic acid",
    "lauric acid",
    "olive oil peg-7 esters",
    "macadamia integrifolia seed oil",
    "pseudoalteromonas ferment extract",
    "bacillus/folic acid ferment filtrate extract",
    "ethyl macadamiate",
    "lactobacillus/​ginseng root ferment filtrate",
    "tribehenin",
    "lactobacillus/?collagen ferment filtrate (collagen water)",
    "bifida ferment lysate",
    "peg-40 hydrogenated castor oil",
    "coconut acid",
  ];

  const ingredientList = ingredients
    .split(",")
    .map((ingredient) => ingredient.trim());

  let isFungalAcneSafe = true;

  for (let i = 0; i < ingredientList.length; i++) {
    if (fungalAcneIngredients.includes(ingredientList[i])) {
      isFungalAcneSafe = false;
      break;
    }
  }

  const recommendations = {
    facialWash: [
      {
        name: "Wardah Nature Daily Aloe Hydramild Facial Wash",
        url: "https://id.shp.ee/4dqQofA",
      },
      {
        name: "Simple Kind to Skin Refreshing Facial Gentle Wash",
        url: "https://id.shp.ee/9CU1KK9",
      },
      {
        name: "Cetaphil Gentle Skin Cleanser",
        url: "https://id.shp.ee/fjNgh5L",
      },
      {
        name: "Simple Water Boost Facial Cleanser Gel Wash",
        url: "https://id.shp.ee/b7CySCR",
      },
      {
        name: "Emina Dot Burst Face Wash",
        url: "https://id.shp.ee/enTmj4F",
      },
      {
        name: "Safi Dermasafe Mild and Gentle Gel Cleanser",
        url: "https://id.shp.ee/4mAbwJd",
      },
      {
        name: "Cerave Hydrating Facial Cleanser",
        url: "https://id.shp.ee/VbWiLSw",
      },
    ],
    moisturizer: [
      {
        name: "Cerave Moisturizing Cream",
        url: "https://id.shp.ee/xsnRdrv",
      },
      {
        name: "COSRX Advanced Snail 96 Mucin Power Essence",
        url: "https://id.shp.ee/jo4GuQf",
      },
      {
        name: "Safi Dermasafe Day Moisturizer",
        url: "https://id.shp.ee/VGG8TZH",
      },
      {
        name: "Hadalabo Perfect 3D Gel",
        url: "https://id.shp.ee/BzsBhDQ",
      },
      {
        name: "Wardah C-Defence Mousse Moisturizer",
        url: "https://id.shp.ee/76ZbdYN",
      },
      {
        name: "Raecca Moisturizer Jelly Centella",
        url: "https://id.shp.ee/5PzsXbu",
      },
      {
        name: "Safi Acne Expert Shooting Gel Moisturizer",
        url: "https://id.shp.ee/4CFirob",
      },
      {
        name: "Studio Tropic Fresh Skin Barrier Cream",
        url: "https://id.shp.ee/WeGBdyw",
      },
      {
        name: "Emina Bright Stuff Night Cream",
        url: "https://id.shp.ee/Gz8Y9Xx",
      },
    ],
    serum: [
      {
        name: "Somethinc Retinol 1%",
        url: "https://id.shp.ee/n9Uo7y6",
      },
      {
        name: "Hanasui Power Bright Serum",
        url: "https://id.shp.ee/w8y53TL",
      },
      {
        name: "Hanasui Rich Nutrition Serum",
        url: "https://id.shp.ee/Wzkjgvq",
      },
      {
        name: "Azarine Lightening Serum C White",
        url: "https://id.shp.ee/6H1TGeG",
      },
      {
        name: "Azarine Easy White Moisturizer Herbal Serum",
        url: "https://id.shp.ee/ws4jKnK",
      },
      {
        name: "Azarine Acne Spot Serum",
        url: "https://id.shp.ee/rJprYjy",
      },
      {
        name: "Somethinc Niacinamide Barrier Serum 10% / 5%",
        url: "https://id.shp.ee/LEr45Hx",
      },
      {
        name: "Somethinc Hyaluronic + Advanced + B5 Serum",
        url: "https://id.shp.ee/rqYFCdB",
      },
      {
        name: "Implora Acne Serum",
        url: "https://id.shp.ee/1xd27t3",
      },
    ],
    sunscreen: [
      {
        name: "Skin Aqua Moisture Milk SPF 50 PA+++",
        url: "https://id.shp.ee/oeZJbMF",
      },
      {
        name: "Nivea Sun face Serum Extra Protect Aura SPF 50 PA+++",
        url: "https://id.shp.ee/UWSpYyu",
      },
      {
        name: "Azarine Hydramax C Sunscreen Serum SPF 50 PA++++",
        url: "https://id.shp.ee/WBu5YZd",
      },
      {
        name: "Azarine Hydrasoothe Sunscreen Mist SPF 50 PA++++",
        url: "https://id.shp.ee/6PfdiXS",
      },
      {
        name: "Emina Skin Buddy Sun Protection SPF 30 PA+++",
        url: "https://id.shp.ee/3SZRKK2",
      },
    ],
    toner: [
      {
        name: "Hadalabo Gokujyun Ultimate Moisturizing Lotion (orange)",
        url: "https://id.shp.ee/E6kBKe2",
      },
      {
        name: "Hadalabo Gokujyun Light Lotion (stripe hijau)",
        url: "https://id.shp.ee/B6MH3hn",
      },
      {
        name: "Hadalabo Tamagohada Mild Peeling Lotion",
        url: "https://id.shp.ee/45eeFVn",
      },
      {
        name: "COS RX AHA BHA Clarifying Treatment Toner",
        url: "https://id.shp.ee/KtUEVo3",
      },
      {
        name: "Simple Skin Soothing Facial Toner",
        url: "https://id.shp.ee/NDb8EQf",
      },
      {
        name: "Hadalabo Gokujyun Premium Hyaluronic Acid Lotion",
        url: "https://id.shp.ee/FPrvYvF",
      },
      {
        name: "MS Glow Glow/acne Toner",
        url: "https://id.shp.ee/DhsaWas",
      },
      {
        name: "Studio Tropic Herbitus Skin Tonic",
        url: "https://id.shp.ee/eVvzApo",
      },
      {
        name: "Skintific 4D Hyaluronic Acid Barrier Essence Toner",
        url: "https://id.shp.ee/G1cEBwX",
      },
      {
        name: "Somethinc Calm Down Toner 3% PHA",
        url: "https://id.shp.ee/u5JXCxC",
      },
      {
        name: "Cosrx Hydrium Watery Toner",
        url: "https://id.shp.ee/JnkVgY2",
      },
      {
        name: "Azarine Blemish Resque Mild Purifying Toner (hijau)",
        url: "https://id.shp.ee/ciLEqS3",
      },
    ],
    makeupRemover: [
      {
        name: "Garnier Micellar Cleansing Water Pink (for sensitive skin)",
        url: "https://id.shp.ee/ERL6akd",
      },
      {
        name: "Garnier Micellar Cleansing Water Salicylic BHA",
        url: "https://id.shp.ee/anmA7kx",
      },
      {
        name: "L'oreal Revitalift Crystal Purifying Micellar Water",
        url: "https://id.shp.ee/D2BQ2dq",
      },
      {
        name: "Azarine Ceramoist Botanical Micellar Water",
        url: "https://id.shp.ee/xGuRuD6",
      },
      {
        name: "Pixy White Aqua Micell Oil Cleansing Water Smooth Pores",
        url: "https://id.shp.ee/ybGQXtG",
      },
      {
        name: "Garnier Micellar Water Vitamin C",
        url: "https://id.shp.ee/dvhe1Sg",
      },
      {
        name: "Bioderma Sensibio H2O Micellar Water Pink",
        url: "https://id.shp.ee/fi8MnZ5",
      },
      {
        name: "Watsons Cleansing Water Gentle & Mild",
        url: "https://id.shp.ee/qd1Cyht",
      },
      {
        nama: "Facetology Triple Care Hydra Cleanse Micellar Water",
        url: "https://id.shp.ee/Lq2PryC",
      },
    ],
  };

  let recommendation = "Unknown Category";

  if (recommendations[category]) {
    recommendation = recommendations[category]
      .map(
        (product) =>
          `<li class="list-group-item list-group-item-info"><a href="${product.url}" target="_blank">${product.name}</a></li>`
      )
      .join("");
  }

  if (isFungalAcneSafe) {
    resultDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
</svg>
</div>
        <div class="alert alert-success mb-3" role="alert">
            Produk <b>Aman</b> Digunakan :). 
        </div>
        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
            <div>
                Rekomendasi lainnya:
            </div>
        </div>
        <ul>
            ${recommendation}
        </ul>
        `;
  } else {
    resultDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        </svg>
        </div>
        <div class="alert alert-danger mb-3" role="alert">
            Produk ini <b>tidak aman</b> digunakan :( 
        </div>
        
        <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
            <div>
                Rekomendasi produk yang <b>aman</b>:
            </div>
        </div>
            <ul class="list-group list-group-flush">
                ${recommendation}
            </ul>
        `;
  }
}
