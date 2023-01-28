import { RpgPlayer, RpgPlayerHooks, Control, Move, RpgClassMap, RpgMap } from '@rpgjs/server'
import { MoveManager } from '@rpgjs/server/lib/Player/MoveManager'
import { proyectil } from './events/proyectil'


export const player: RpgPlayerHooks = {

    
    onConnected(player: RpgPlayer) {
        player.setGraphic('base')
        player.setHitbox(32, 32)
        player.changeMap('home_map')
    },
    async onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }

        if(input == Control.Action) {

            let map = player.getVariable("mapa")
            
            map.createDynamicEvent({
                x: player.position.x,
                y: player.position.y,
                event: proyectil
           })


           player.showAnimation("proyectil_animation","default")

        }

    },
    async onJoinMap(player: RpgPlayer, map: RpgMap) {
        
        await player.showText('Hola bienvenid@ ')
        player.setVariable("mapa" , map);
        player.setVariable('AFTER_INTRO', true)
        player.name = 'Hero'
    }
}