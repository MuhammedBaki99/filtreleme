//ilk başta karmaşık bir dizi oluştur
//hangi kategoriye ait ürünleri istersiniz diye sor ona göre filtreleme işlemi yapıp farklı bir dizi oluştur ve console da yazdır
let filtrelenmişVeri = [];

const data = [
    {
      category: "Arabalar",
      items: [
        { name: "Ferrari", model: "458 Italia", year: 2019 },
        { name: "Tesla", model: "Model S", year: 2021 },
        { name: "BMW", model: "M3", year: 2018 },
      ],
    },
    {
      category: "Meyveler",
      items: [
        { name: "Elma", color: "Kırmızı", weight: 150 },
        { name: "Muz", color: "Sarı", weight: 120 },
        { name: "Üzüm", color: "Yeşil", weight: 50 },
      ],
    },
    {
      category: "Hayvanlar",
      items: [
        { name: "Aslan", habitat: "Orman", lifespan: 12 },
        { name: "Köpek", habitat: "Evcil", lifespan: 15 },
        { name: "Tavşan", habitat: "Çayır", lifespan: 8 },
      ],
    },
  ];
  

let kategori = prompt("Hangi kategoride ürünleri istersiniz?").toLowerCase();

for (let i = 0; i < data.length; i++) {
   
    if(data[i].category.toLowerCase() === kategori){
        
        filtrelenmişVeri.push(data[i].items);
        console.log(filtrelenmişVeri);
        
    }else{
        console.log("Böyle bir kategori yok");
    }
    
}