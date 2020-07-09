var app = new Vue({
    el: '#app',
    data: {
        temporarilyData: {},
        productsData: [
            {
                id: 1,
                title: "修身彈力棉質襯衫",
                category: "西裝襯衫",
                content:"由棉質混紡布料裁製，融合修身剪裁，重釋雋永格調。",
                description: "這款長袖襯衫由棉質混紡布料裁製，帶有舒適的彈性，包含隱形紐扣門襟、精緻的袖扣細節，弧形下擺融合修身剪裁，重釋雋永格調。",
                imageUrl: "https://github.com/yuu-chien/hex-JSLC-w3/blob/master/img/%E4%BF%AE%E8%BA%AB%E6%A3%89%E8%B3%AA%E6%B7%B7%E7%B4%A1%E8%A5%AF%E8%A1%AB.jpg?raw=true",
                enabled: true,
                origin_price: 1800,
                price: 1650,
                unit: "件"
            },
            {
                id: 2,
                title: "修身亞麻西裝外套",
                category: "西裝外套",
                content:"純亞麻單排雙扣西裝外套，融合修身剪裁，為日常通勤打造出雋永單品。",
                description: "這款單排雙扣西裝外套由純亞麻布料精裁而成，包含劍領領片、半襯裡設計、對稱嵌線口袋、精緻袖扣細節，背部為便於活動的單開衩，融合修身剪裁，為日常通勤打造出雋永單品。",
                imageUrl: "https://github.com/yuu-chien/hex-JSLC-w3/blob/master/img/%E4%BF%AE%E8%BA%AB%E4%BA%9E%E9%BA%BB%E8%A5%BF%E8%A3%9D%E5%A4%96%E5%A5%97.jpg?raw=true",
                enabled: false,
                origin_price: 7500,
                price: 7000,
                unit: "件"
            }
        ]
    },
    methods: {
        // 打開新增商品的 Model
        openAddNewProduct() {
            this.temporarilyData = {};
        },
        // 新增商品
        addNewProduct() {
            // 新增無法被填寫的 id 
            // -- 想法：抓出 this.productsData 中的最後一筆物件資料的 id 屬性值，加一後即為新資料的 id 屬性值 --

            // Object.keys() 方法會回傳一個由給定物件的所有可列舉自身屬性的屬性名組成的陣列
            // 參考：https://www.itread01.com/content/1549953212.html
            let productsDataKeys = Object.keys(this.productsData);
            // 找到回傳陣列中最後一筆資料的 id 屬性的值，並賦予到變數 newId
            let newId = (productsDataKeys.length-1);
            // newId+1 後賦予到 this.temporarilyData.id
            newId = (this.productsData[newId].id)+1;
            this.temporarilyData.id = newId;

            this.productsData.push(this.temporarilyData);
            this.temporarilyData = {};
            console.log("新增完成～後清空資料",this.temporarilyData);
        },
        // 刪除商品
        deleteProduct(id) {
            console.log("Woona Delete!", id);
            this.productsData.forEach((item, index)=>{
                if(item.id == id) {
                   this.productsData.splice(id, 1);
                }
            })
        },
        // 編輯商品
        editProduct(id) {
            console.log("Woona Edit!", id);
            this.productsData.forEach((item, index)=>{
                if(item.id == id) {
                    console.log("hi", id);
                    this.temporarilyData = item;
                    console.log("hi temporarilyData", this.temporarilyData);
                }
            })
        }
    }
});

