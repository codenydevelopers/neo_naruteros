import { RpgClient, RpgModule } from '@rpgjs/client'
import { Characters } from './characters/characters'
import { baseCharacter } from './characters/player_sprite'

@RpgModule<RpgClient>({ 
    spritesheets: [
        //Characters,
        baseCharacter
    ]
})
export default class RpgClientModuleEngine {}