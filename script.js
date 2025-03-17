function hamwork() {
    const hambox = document.querySelector("#mobile__menu__btn");
    const hambarbox = document.querySelector("#mobile__menu");
    const hambarboxa = document.querySelectorAll("#mobile__menu a");

    let hamopen = false;
    hambox.addEventListener("click", function () {
        console.log("Clicked")
        if (!hamopen) {
            hambox.classList.add("open");
            hamopen = true;
            gsap.to(hambarbox, {
                duration: 0.01,
                opacity: 1,
                scale: 1,
            });
            document.body.style.overflow = 'hidden';
        } else {
            hambox.classList.remove("open");
            hamopen = false;
            gsap.to(hambarbox, {
                duration: 0.2,
                opacity: 0,
                scale: 0,
            });
            document.body.style.overflow = '';
        }
    });

    hambarboxa.forEach(function (elem) {
        elem.addEventListener("click", function () {
            if (!hamopen) {
                hambox.classList.add("open");
                hamopen = true;
                gsap.to(hambarbox, {
                    duration: 0.2,
                    opacity: 1,
                    scale: 1,
                });
                document.body.style.overflow = 'hidden';
            }
            else {
                hambox.classList.remove("open");
                hamopen = false;
                gsap.to(hambarbox, {
                    duration: 0.2,
                    opacity: 0,
                    scale: 0,
                });
                document.body.style.overflow = '';

            }
        });
    });
}
hamwork();


const data = [
    {
        "imageUrl": "./images/1.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/10.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/14.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/15.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/16.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/2.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/3.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/4.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/5.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/9.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/GREEN CHILLY PICKLE.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/honeyy03.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_1983.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2027.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2029.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2032.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2045.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2440.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2441.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2442.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2463.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2595.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2596.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2606.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2607.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2610.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2613.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2615.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/IMG_2792.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/JAM.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/lemon.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/MULTI GRAIN AATA.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/pine apple.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/schezwan.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/Screenshot 2025-01-08 170515.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/Screenshot 2025-01-26 210453.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/Screenshot 2025-01-26 210543.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/Screenshot 2025-01-26 210624.webp",
        "name": "Photo"
    },
    {
        "imageUrl": "./images/vegetables.webp",
        "name": "Photo"
    }
]

const imageContainer = document.querySelector("#image__container");



data.forEach((item, index) => {
    if (!(item.imageUrl.endsWith('.CR3'))) {

        const imgElement = `
 <a href="${item.imageUrl}" data-lightbox="models" data-title="${item.name+index}"
    class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
    <img src="${item.imageUrl}" loading="lazy" alt="${item.name}"  loading="lazy"
        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">${item.name}</span>
</a>
`;

        // Append the image element to the container
        imageContainer.innerHTML += imgElement;
    }
});


// Fetch the JSON file
// fetch("images.json")
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((item, index) => {
//             if (!(item.imageUrl.endsWith('.CR3'))) {

//                 const imgElement = `
//          <a href="${item.imageUrl}" data-lightbox="models" data-title="${item.name+index}"
//             class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
//             <img src="${item.imageUrl}" loading="lazy" alt="${item.name}"  loading="lazy"
//                 class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
    
//             <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    
//             <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">${item.name}</span>
//         </a>
//       `;

//                 // Append the image element to the container
//                 imageContainer.innerHTML += imgElement;
//             }
//         });
//     })
//     .catch((error) => console.error("Error loading images:", error));
