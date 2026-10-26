let allData = [];
const getData = async () => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    allData = data;
    showData();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Data fetching completed.");
  }
};

let result = "";
const card = document.querySelector("#cards-container");
const showData = () => {
  allData.forEach((item) => {
    result += `
    <div class="card">
    <img src="${item.img}" alt="Card Image" />
      <div class="content">
        <h2>${item.nickname}</h2>
        <p> ${item.who.length > 30 ? item.who.substring(0, 30) + '...' : item.who}</p>
        <button>Show</button>
      </div>
      </div>
    `;
  });

  card.innerHTML = result;
};

getData();
