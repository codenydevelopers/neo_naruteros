import { RpgPlayer, RpgPlayerHooks, Control, Move, RpgClassMap, RpgMap } from '@rpgjs/server'

export const player: RpgPlayerHooks = {

    
    onConnected(player: RpgPlayer) {
        player.setGraphic('base')
        player.setHitbox(32, 32)
        player.changeMap('home_map')
        player.setVariable("nombre" , "sebas");
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }

        

    },
    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        await player.showText('Hola bienvenid@ ' + player.getVariable("nombre"))
        
        player.setVariable('AFTER_INTRO', true)
        player.name = 'Hero'
    }
}