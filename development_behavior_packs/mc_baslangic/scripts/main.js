import { world, system } from "@minecraft/server";

console.warn("javascript yuklendi")

// After Events için bir örnek
world.afterEvents.entityDie.subscribe(v => {
    console.warn("Entity öldürüldü")
})