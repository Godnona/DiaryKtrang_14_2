document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById('grid');
  const detail = document.getElementById('detail');
  const titleEl = document.getElementById('detail-title');
  const textEl = document.getElementById('detail-text');
  const imagesEl = document.getElementById('detail-images');
  const backBtn = document.querySelector('.back');

  let diaryData = [
    {
      id: 1,
      title: "Day 1",
      text: "Hôm nay bắt đầu dự án mới.",
      images: [
        "https://picsum.photos/120?1",
        "https://picsum.photos/120?2"
      ]
    },
    {
      id: 2,
      title: "Day 2",
      text: "Thiết kế UI và animation.",
      images: [
        "https://picsum.photos/120?3"
      ]
    }
  ];

  function renderGrid() {
    grid.innerHTML = "";

    diaryData.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerText = item.title;
      card.onclick = () => openDetail(item.id);
      grid.appendChild(card);
    });

    const addCard = document.createElement("div");
    addCard.className = "card add";
    addCard.innerText = "+";
    addCard.onclick = createNewCard;
    grid.appendChild(addCard);
  }

  function openDetail(id) {
    const data = diaryData.find(d => d.id === id);
    if (!data) return;

    titleEl.innerText = data.title;
    textEl.innerText = data.text;
    imagesEl.innerHTML = "";

    data.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      imagesEl.appendChild(img);
    });

    grid.style.opacity = "0";
    detail.classList.add("active");
  }

  backBtn.onclick = () => {
    detail.classList.remove("active");
    grid.style.opacity = "1";
  };

  function createNewCard() {
    const id = diaryData.length + 1;
    diaryData.push({
      id,
      title: `Day ${id}`,
      text: "Nội dung mới...",
      images: []
    });
    renderGrid();
  }

  renderGrid();

});
