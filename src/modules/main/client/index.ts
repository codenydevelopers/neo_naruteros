import { RpgClient, RpgModule } from '@rpgjs/client'
import { Characters } from './characters/characters'
import { baseCharacter } from './characters/player_sprite'
import { proyectil } from './proyectil/sprite_proyectil'

@RpgModule<RpgClient>({ 
    spritesheets: [
        //Characters,
        baseCharacter,
        proyectil
    ]
})
export default class RpgClientModuleEngine {}