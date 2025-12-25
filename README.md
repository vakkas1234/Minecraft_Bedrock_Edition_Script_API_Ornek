



## Minecraft Bedrock Edition Script Api örnek

Minecraft Bedrock Edition'da Script API mevcut. Bu API Javascript eventleriyle Minecraft içinde etkileşim kurmamıza yarayan bir API'dır.

## Kullanım/Örnekler

```javascript
import {world,system} from "@minecraft/server"

world.beforeEvents.entityDie(v =>{
    //Yapılacak İşlem Burası Entity Ölmeden önce yapılacak şeyleri yazınız.
    
})



```


  
## Ekran Görüntüleri

![WhatsApp Image 2025-12-25 at 23 10 57](https://github.com/user-attachments/assets/921c3c85-f97f-4e9c-9d5b-0b89ba49db0c)

Gördüğünüz üzere entity her öldürüldüğünde bu event çalısacaktır.


