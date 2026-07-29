const houses = [
  {
    id: "jinan", number: "01", name: "진안 강정리 근대 한옥", year: "1924", type: "농촌 주거·생산 공간", tag: "2층 잠실", accent: "#8c5a3e", bg: "#ead7c1", house: "#bf8b65", image: "assets/images/jinan-gangjeongri.jpg", imageAlt: "진안 강정리 근대 한옥의 외관",
    summary: "전통 목구조와 ‘ㄱ’자 배치를 바탕으로, 농촌 생활과 잠실 기능을 담기 위해 2층을 올린 한옥입니다.",
    text: "대지 가운데 안채가 놓이고 안채와 사랑채가 ‘ㄱ’자 모양을 이루는 농촌 가옥입니다. 안채 1층에는 안방·윗방·부엌이 있으며, 2층은 누에를 치는 잠실로 쓰였습니다. 근대기의 2층화가 외래 양식의 모방만을 뜻하지 않았음을 보여 주는 사례로, 전통 한식 목구조 안에서 생산과 주거의 필요에 대응한 변화에 주목합니다.",
    features: ["안채와 사랑채가 이루는 ‘ㄱ’자 배치", "주거 공간 위에 더한 2층 잠실", "전통 목구조를 유지한 농촌 한옥의 수직 확장"],
    source: "https://digital.khs.go.kr/heri/heriDetail.do?ctptNo=4413501910000&ctptUid=13898859681356301331"
  },
  {
    id: "ganggyeong", number: "02", name: "강경 구 연수당 건재 약방", year: "1923", type: "시장 약방·상점", tag: "상가 기능", accent: "#af563c", bg: "#edd8cf", house: "#b46c4d", image: "assets/images/ganggyeong-yeonsudang.jpg", imageAlt: "강경 구 연수당 건재 약방의 2층 전면",
    summary: "전통 한식 목구조에 상점 기능을 결합해, 번성한 강경시장의 풍경을 간직한 2층 약방입니다.",
    text: "건축 당시 ‘남일당 한약방’으로 사용되었고, 이후 ‘연수당 건재 대약방’으로 상호가 바뀌었습니다. 1920년대 강경시장 전경 사진 속 건물 가운데 현존하는 사례로 알려져 있습니다. 1층 전면의 미서기문은 점포로서의 개방성을, 2층의 창과 차양은 시장을 마주한 건물의 기능을 보여 줍니다.",
    features: ["판매와 출입에 대응한 1층 전면 미서기문", "2층 창과 차양이 만드는 시장 쪽 입면", "전통 목구조에 더해진 상가 기능"],
    source: "https://digital.khs.go.kr/heri/heriDetail.do?ctptNo=4413400100000&ctptUid=13898859679602301177"
  }
];

const cards = document.querySelector("#cards");
const detail = document.querySelector("#detail-content");

function renderCards() {
  cards.innerHTML = houses.map((house, i) => `
    <button class="card ${i === 0 ? "is-active" : ""}" data-id="${house.id}" style="--card-bg:${house.bg};--card-house:${house.house};--card-accent:${house.accent}">
      <span class="card-number">${house.number} · ${house.year}</span>
      <span class="card-art"><img src="${house.image}" alt="${house.imageAlt}" /></span>
      <span><h3>${house.name}</h3><p>${house.summary}</p></span>
      <span class="tag">${house.tag} →</span>
    </button>`).join("");
}

function renderDetail(id) {
  const house = houses.find((item) => item.id === id) || houses[0];
  detail.innerHTML = `
    <div class="detail-grid">
      <div class="detail-visual photo-visual" style="--detail-bg:${house.bg};--detail-house:${house.house}">
        <div class="photo-label"><b>HERITAGE PHOTO</b><span>건물의 외관과 2층 구조를 관찰해 보세요.</span></div>
        <img src="${house.image}" alt="${house.imageAlt}" />
        <span class="model-caption">${house.year} · ${house.type}</span>
      </div>
      <div class="detail-content">
        <p class="eyebrow">${house.number} · ${house.tag}</p>
        <h2 id="detail-title">${house.name}</h2>
        <p class="metadata">국가등록문화유산 · ${house.year} · ${house.type}</p>
        <p class="detail-summary">${house.summary}</p>
        <p>${house.text}</p>
        <ul class="features">${house.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
        <a class="source-link" href="${house.source}" target="_blank" rel="noreferrer">국가유산 디지털 서비스에서 자료 보기 ↗</a>
      </div>
    </div>`;
  document.querySelectorAll(".card").forEach((card) => card.classList.toggle("is-active", card.dataset.id === id));
}

renderCards();
renderDetail(houses[0].id);
cards.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (!card) return;
  renderDetail(card.dataset.id);
  document.querySelector("#detail").scrollIntoView({ behavior: "smooth", block: "start" });
});
