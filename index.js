const currentDate = document.querySelector(".current-data");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span i")

let data = new Date();
currYear = data.getFullYear(),
currMonth = data.getMonth();


const months = ["January","February","March","April","May","June","July","Agust","September","Ocrober","November","December"];

const rendomCalendar = () =>{
    let firstDayofMonth = new Date(currYear, currMonth,1).getDate(),
     lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
     lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(),
     lastDayofMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
    let liTag = "";

    for(let i = firstDayofMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    for(let i = 1; i <=lastDateOfMonth; i++){
        let isToday = i === new Date().getDate() && currMonth === (new Date()).getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`
    }

    for(let i = lastDayofMonth; i < 6; i++){
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
}

rendomCalendar();

prevNextIcon.forEach(icon =>{
    icon.addEventListener("click", ()=>{
       currMonth = icon.id === "prev" ? currMonth -1 : currMonth +1;

       if(currMonth < 0 || currMonth > 11){
        data = new Date(currYear,currMonth);
        currYear = data.getFullYear();
        currMonth = data.getMonth();
       }else{
        data = new Date()
       }
       rendomCalendar();
    })
})
