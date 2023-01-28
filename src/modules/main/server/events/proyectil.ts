import { RpgEvent, EventData, RpgPlayer, EventMode  } from '@rpgjs/server'

@EventData({
    name: 'EV-proyectil', 
    mode : EventMode.Shared,
    hitbox: {
        width: 96,
        height: 96
    },
    
})
export class proyectil extends RpgEvent {
    onInit() {
        this.setGraphic("proyectil_animation")
        //this.showAnimation('base', 'default')
    } 
    async onAction(player: RpgPlayer) {
        
    }

} 