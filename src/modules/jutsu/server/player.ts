import { Control, RpgPlayer, RpgPlayerHooks } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {

    },
    onInput(player: RpgPlayer, { input }) {
        

        

    },
    async onJoinMap(player: RpgPlayer) {
        //await player.showText('Ejecutandome desde el jutsu archivo')
        
    }
}