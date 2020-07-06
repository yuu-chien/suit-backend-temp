var app = new Vue({
    el: '#app',
    data: {
        productsData: [
            {
                id: 1,
                title: "修身彈力棉質襯衫",
                category: "襯衫",
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
});