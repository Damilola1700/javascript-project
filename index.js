// let products = [];
// async function getUsers() {


//   const fetchData = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: "Bearer hchcjdjcjc",
//   },
//  };

//     let url = 'https://dummyjson.com/products'
//     let response = await fetch(url, fetchData);
//     let data = await response.json();
//     console.log(data);
//     users = data.users;
//     console.log(users);


// }


let targetDate = new Date("june 14 2026, 12:00:00").getTime();

let countDown = setInterval(function(){
  let now = new Date().getTime();
  let timeDiference = targetDate - now;

  let day = Math.floor((timeDiference / (1000 * 60 * 60 * 24)))
  let hour = Math.floor((timeDiference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((timeDiference % (1000 * 60 * 60 )) / (1000 * 60));
  let seconds = Math.floor((timeDiference % (1000 * 60 )) / (1000));
  
  // document.querySelector('#displayCountdown').innerHTML = `DAY ${day} Hours Left: ${hour} : ${minute} : ${seconds}`
  document.querySelector('#displayCountdown').innerHTML = ` ${day}  `
  document.querySelector('#displayHours').innerHTML = ` ${hour} `
  document.querySelector('#displayMinutes').innerHTML = ` ${minute} `
  document.querySelector('#displaySeconds').innerHTML = ` ${seconds}`
  
  
  if (timeDiference < 0){
    clearInterval(countDown);
    document.querySelector('#countDown').innerHTML = "Countdown Over";
  }

},1000 );


