
  const menubar=document.getElementById("menubar");
  const menu=document.getElementById("menu");
  const basket = document.getElementById("basket");
  const search= document.getElementById("search");
  const cross = document.getElementById("cross");
  const logo = document.getElementById("logo");
  const div1 = document.getElementById("div1");
  const d1 = document.getElementById("d1");
  const div2 = document.getElementById("div2");
  const d2 = document.getElementById("d2");
  const div3 = document.getElementById("div3");
  const d3 = document.getElementById("d3");
  const div4 = document.getElementById("div4");
  const d4 = document.getElementById("d4");
  const div5 = document.getElementById("div5");
  const d5 = document.getElementById("d5");
  
  
  menu.addEventListener("click", () => {
   console.log("menu clickes") 
   menu.classList.toggle("hidden")
   menubar.classList.toggle("hidden")
   basket.classList.toggle("hidden")
   
   cross.classList.toggle("hidden")
   logo.classList.toggle("hidden")
   
   
  });
  cross.addEventListener("click", () => {
   console.log("menu clickes") 
   menu.classList.toggle("hidden")
   menubar.classList.toggle("hidden")
   basket.classList.toggle("hidden")
   
   cross.classList.toggle("hidden")
   logo.classList.toggle("hidden")
   
   
  });
 
  

  function toggleD1Visibility() {
            d1.classList.toggle('hidden');
        }

        // Event listener for clicks inside div1
        div1.addEventListener('click', (event) => {
            toggleD1Visibility();
            event.stopPropagation(); // Prevent event from bubbling up
        });

        // Event listener for clicks outside of div1
        document.addEventListener('click', (event) => {
            if (!div1.contains(event.target)) {
                if (!d1.classList.contains('hidden')) {
                    d1.classList.add('hidden');
                }
            }
        });

        // Prevent clicks inside d1 from closing it
        d1.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
  function toggleD1Visibility2() {
            d2.classList.toggle('hidden');
        }

        // Event listener for clicks inside div1
        div2.addEventListener('click', (event) => {
            toggleD1Visibility2();
            event.stopPropagation(); // Prevent event from bubbling up
        });

        // Event listener for clicks outside of div1
        document.addEventListener('click', (event) => {
            if (!div2.contains(event.target)) {
                if (!d2.classList.contains('hidden')) {
                    d2.classList.add('hidden');
                }
            }
        });

        // Prevent clicks inside d1 from closing it
        d2.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
        
        function toggleD1Visibility4() {
            d4.classList.toggle('hidden');
        }

        // Event listener for clicks inside div1
        div4.addEventListener('click', (event) => {
            toggleD1Visibility4();
            event.stopPropagation(); // Prevent event from bubbling up
        });

        // Event listener for clicks outside of div1
        document.addEventListener('click', (event) => {
            if (!div4.contains(event.target)) {
                if (!d4.classList.contains('hidden')) {
                    d4.classList.add('hidden');
                }
            }
        });

        // Prevent clicks inside d1 from closing it
        d4.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
        function toggleD1Visibility5() {
            d5.classList.toggle('hidden');
        }

        // Event listener for clicks inside div1
        div5.addEventListener('click', (event) => {
            toggleD1Visibility5();
            event.stopPropagation(); // Prevent event from bubbling up
        });

        // Event listener for clicks outside of div1
        document.addEventListener('click', (event) => {
            if (!div5.contains(event.target)) {
                if (!d5.classList.contains('hidden')) {
                    d5.classList.add('hidden');
                }
            }
        });

        // Prevent clicks inside d1 from closing it
        d5.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
        function toggleD1Visibility6() {
            d6.classList.toggle('hidden');
        }

        // Event listener for clicks inside div1
        div6.addEventListener('click', (event) => {
            toggleD1Visibility6();
            event.stopPropagation(); // Prevent event from bubbling up
        });

        // Event listener for clicks outside of div1
        document.addEventListener('click', (event) => {
            if (!div6.contains(event.target)) {
                if (!d6.classList.contains('hidden')) {
                    d6.classList.add('hidden');
                }
            }
        });

        // Prevent clicks inside d1 from closing it
        d6.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
        function toggleD1Visibility7() {
            d7.classList.toggle('hidden');
        }

        // Event listener for clicks inside div1
        div7.addEventListener('click', (event) => {
            toggleD1Visibility7();
            event.stopPropagation(); // Prevent event from bubbling up
        });

        // Event listener for clicks outside of div1
        document.addEventListener('click', (event) => {
            if (!div7.contains(event.target)) {
                if (!d7.classList.contains('hidden')) {
                    d7.classList.add('hidden');
                }
            }
        });

        // Prevent clicks inside d1 from closing it
        d7.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
        function toggleD1Visibility8() {
            d8.classList.toggle('hidden');
        }

        // Event listener for clicks inside div1
        div8.addEventListener('click', (event) => {
            toggleD1Visibility8();
            event.stopPropagation(); // Prevent event from bubbling up
        });

        // Event listener for clicks outside of div1
        document.addEventListener('click', (event) => {
            if (!div8.contains(event.target)) {
                if (!d8.classList.contains('hidden')) {
                    d8.classList.add('hidden');
                }
            }
        });

        // Prevent clicks inside d1 from closing it
        d8.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
        function toggleD1Visibility3() {
            d3.classList.toggle('hidden');
        }

        // Event listener for clicks inside div1
        div3.addEventListener('click', (event) => {
            toggleD1Visibility3();
            event.stopPropagation(); // Prevent event from bubbling up
        });

        // Event listener for clicks outside of div1
        document.addEventListener('click', (event) => {
            if (!div3.contains(event.target)) {
                if (!d3.classList.contains('hidden')) {
                    d3.classList.add('hidden');
                }
            }
        });

        // Prevent clicks inside d1 from closing it
        d3.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from bubbling up to the document
        });
  