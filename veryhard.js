var nameList = document.querySelector("#nameList")

var names = ["Conor McGregor", "Kevin Lee", "Jon Jones"]
function compare(a, b) {
   var splitA = a.split(" ");
   var splitB = b.split(" ");
   var lastA = splitA[splitA.length - 1];
   var lastB = splitB[splitB.length - 1];

   if (lastA < lastB) return -1;
   if (lastA > lastB) return 1;
   return 0;
}

var sorted = names.sort(compare);
sorted.map(function(item){
   var name = item.split(" ")
   var li = document.createElement("li")
   li.innerHTML = `${name[0]} <span>${name[name.length - 1]}</span>`
   nameList.appendChild(li)
})