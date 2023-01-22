import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    id: 'base',
    image: require('./assets/fix_base_alone.png'),
    width: 128,
    height: 128,
    ...RMSpritesheet(4, 4, 0)
   
})
export class baseCharacter {}