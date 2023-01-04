const itemList = ({ data, imagePath, description }) => {
  if (!data) {
    return `<h2>No Data</h2>`
  }
  return `
  <div class="restoImgCity">
      <span class="restoCity">Kota ${data.city}</span>
      <a href='#/detail/${data.id}'><img loading="lazy" src="${imagePath}" alt="${data.name}" width="100%"></a>
  </div>
  <div class="restoContent">
      <p class="restoRating">⭐️ ${data.rating}</p>
      <h2><a href="#/detail/${data.id}" class="restoName">${data.name}</a></h2>
      <p class="restoDescription">${description}</p>
  </div>
  `
}
export default itemList
