# hex-JSLC-w3
六角 JS 作品實戰班｜第三週．產品管理頁面

<br>

## Info
第三週開始我們會開始接觸 Vue.js，在此階段同學可多練習 Vue.js 各項語法及指令。目標為依據使用者需求，完成一頁式的產品新增、刪除、修改的頁面（先不串接 API）  
提交等級：LV2，重新撰寫產品管理頁面。

### User Story
* 可以新增、編輯、刪除商品
* 商品啟用、關閉可以使用不同的顏色標示
* 商品欄位如下（請注意型別） 
    - title：商品名稱 - string
    - category：商品分類 - string
    - content：商品敘述 - string
    - description：商品說明 - string
    - imageUrl：商品圖片 - string
    - enabled：是否上架 - boolean
    - origin_price：原價 - number(integer)
    - price：售價 - number(integer)
    - unit：單位 - string

<br>

## Content 
* 使用 Vue.js 搭配 Bootstrap
* 依照產品之獨特 id 進行編輯或刪除
<!-- 圖片來源網站 -->
<!-- https://www.cosstores.com/en/men.html -->
<!-- https://www.tomford.com/ -->

<br>

## 助教 Feedback
作業有理解到使用 Vue 來顯示內容很不錯喔  
不過這邊有些地方建議要修改  

1. 若要用「獨一無二的 id」可用 timestamp 也就是取得當下上架時間來當作 id
1. 編輯 editProduct() 裡面有物件傳參考的問題，請確保編輯物件與原始物件參考不是同一個

以上可以參考看看  
恭喜你完成這個作業  