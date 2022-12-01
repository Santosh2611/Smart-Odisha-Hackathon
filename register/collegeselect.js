let usernames=[
    "Amrita Vishwa Vidyapeetham",
    "Indian Institute of Technology (IIT), Madras",
    "Indian Institute of Technology (IIT), Bombay",
    "Indian Institute of Technology (IIT), Bhubaneshwar",
    "National Institute of Technology (NIT), Rourkela",
    "Kalinga Institute of Industrial Technology, Bhubaneshwar",
    "Odisha University of Technology & Research (OUTR), Bhubaneshwar",
   ];
    //Sort names in ascending order
    let sortedNames = usernames.sort();
    
    //reference
    let input = document.getElementById("search");
    
    //Execute function on keyup
    input.addEventListener("keyup", (e) => {
      //loop through above array
      //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
      removeElements();
      for (let i of sortedNames) {
        //convert input to lowercase and compare with each string
    
        if (
          i.toLowerCase().startsWith(input.value.toLowerCase()) &&
          input.value != ""
        ) {
          //create li element
          let listItem = document.createElement("li");
          //One common class name
          listItem.classList.add("list-items");
          listItem.style.cursor = "pointer";
          listItem.setAttribute("onclick", "displayNames('" + i + "')");
          //Display matched part in bold
          let word = "<b>" + i.substr(0, input.value.length) + "</b>";
          word += i.substr(input.value.length);
          //display the value in array
          listItem.innerHTML = word;
          document.querySelector(".list").appendChild(listItem);
        }
      }
    });
    function displayNames(value) {
      input.value = value;
      removeElements();
    }
    function removeElements() {
      //clear all the item
      let items = document.querySelectorAll(".list-items");
      items.forEach((item) => {
        item.remove();
      });
    }
    
  